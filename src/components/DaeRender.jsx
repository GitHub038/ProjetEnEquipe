import React, { useEffect, useState } from 'react'
import { where } from 'firebase/firestore/lite'
import { Loader2 } from 'lucide-react'
import { useFetchData } from '../hooks/useFetchData'
import { getDocsCustom } from '../utils/firebaseApi'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getLocation } from '@/utils/helpers.js'
import { getGeoDocs } from '@/utils/firebaseApi'
import { Button } from './ui/button.jsx'
import { ThumbsUp } from 'lucide-react'
import { LocateFixed } from 'lucide-react'
import { MapPinned } from 'lucide-react'
import { ENDPOINT } from '@/utils/constants.js'

//Mini component to display loader
const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-secondary">
      <Loader2 size={'64px'} className="animate-spin" />
    </div>
  )
}

//Mini component to display error
const ErrorMessage = ({ message }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-secondary">
      <span>❌{message}</span>
    </div>
  )
}

//Mini component to display DAE_List
const DAEList = React.memo(({ data }) => {
  if (data?.length === 0) {
    return (
      <div className="flex h-screen w-full justify-center bg-secondary">
        <p className="text-xl pt-32 text-center text-gray-800 dark:text-gray-300 md:text-5xl">
          Aucun DAE trouvé correspondant à votre recherche !
        </p>
      </div>
    )
  }
  return (
    <>
      <h1 className="text-center mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white lg:text-4xl">
        Nombre de DAE disponible(s) : {data?.length}
      </h1>
      <div
        className={`grid ${data?.length === 1 ? '' : 'lg:grid-cols-2'} gap-4`}
      >
        {data?.map((entry) => (
          <Card
            key={entry.id}
            className="w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px]"
          >
            <CardHeader>
              <CardTitle className="md:text-2xl text-lg font-semibold	text-primary text-center">
                ID : {entry.c_gid}
              </CardTitle>
              <CardDescription className="md:text-lg text-sm text-center font-semibold">
                <span className="flex flex-row justify-between">
                  <span className="flex flex-row gap-2 items-center">
                    <ThumbsUp /> {entry.c_etat_fonct}{' '}
                  </span>
                  <span className="flex flex-row gap-2 items-center	">
                    {entry.distance !== undefined ? (
                      <>
                        <MapPinned /> {entry.distance} {'km'}
                      </>
                    ) : (
                      ''
                    )}
                  </span>
                </span>
              </CardDescription>
              <Separator className="my-4" />
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <p>
                      <span className="font-bold">Lieu :</span> {entry.c_nom}
                    </p>
                    <p>
                      <span className="font-bold">Rue :</span>{' '}
                      {entry.c_adr_voie}
                    </p>
                    <p>
                      <span className="font-bold">Code postal :</span>{' '}
                      {entry.c_com_cp}
                    </p>
                    <p>
                      <span className="font-bold">Ville :</span>{' '}
                      {entry.c_com_nom}
                    </p>
                    {entry.c_disp_j.replace(/[{}"]/g, '') !==
                      'non renseigné' && (
                      <p className="truncate max-w-[14rem] xl:overflow-visible">
                        <span className="font-bold">Disponibilité :</span>{' '}
                        {entry.c_disp_j.replace(/[{}"]/g, '')}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  )
})

const initialQuery = getDocsCustom(
  ENDPOINT,
  where('c_etat_fonct', '==', 'En fonctionnement'),
)

const DaeRender = () => {
  const { data, status, error, execute } = useFetchData()
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState(initialQuery)
  const [dae, setDae] = useState()
  useEffect(() => {
    execute(query)
  }, [execute, query])

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      const isNumeric = !isNaN(search)
      const newQuery = search
        ? getDocsCustom(
            ENDPOINT,
            where(
              isNumeric ? 'c_com_cp' : 'c_com_nom',
              '==',
              isNumeric ? parseInt(search) : search,
            ),
            where('c_etat_fonct', '==', 'En fonctionnement'),
          )
        : initialQuery
      setQuery(newQuery)
    }
  }

  const DaeListResult = () => {
    switch (status) {
      case 'failure':
        return <ErrorMessage message={error} />
      case 'loading':
        return <Loader />
      case 'done':
        return (
          <div className="h-full w-full mx-auto flex justify-center items-center flex-col pb-16 pt-6 gap-6 px-4 sm:px-8">
            <DAEList data={dae} />
          </div>
        )
      default:
        return <>{status}</>
    }
  }

  useEffect(() => {
    setDae(
      data
        ? data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        : [],
    )
  }, [data])

  const handleClick = () => {
    getLocation()
      .then((coords) => {
        getGeoDocs(ENDPOINT, coords)
          .then((data) => {
            setDae(
              data
                ? data.map((item) => ({
                    id: item.doc.id,
                    distance: Math.round(item.distance),
                    ...item.doc.data(),
                  }))
                : [],
            )
          })
          .catch((error) => {
            console.error(
              'Erreur lors de la récupération des documents : ',
              error,
            )
          })
      })
      .catch((error) => {
        console.error(
          'Une erreur est survenue lors de la récupération de la localisation :',
          error,
        )
      })
  }

  return (
    <>
      <section className="bg-secondary h-full">
        <div className="flex justify-center items-center flex-col pt-20 sm:pt-32">
          <div className="flex flex-row">
            <div className="relative w-[350px] sm:w-[450px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <Label className="sr-only" htmlFor="search" />
              <Input
                id="search"
                name="search"
                type="text"
                placeholder="Rechercher un DAE par CP ou par ville"
                className="pl-12 pr-4"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </div>
            <Button onClick={handleClick} size="icon">
              <LocateFixed className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {DaeListResult()}
      </section>
    </>
  )
}

export default DaeRender
