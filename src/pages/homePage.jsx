import PageNav from '@/components/PageNav'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='mx-10 my-2 bg-scroll bg-[url("public/heart-attack.jpg")] h-screen '>
        <PageNav />
        <main
          className="h-screen bg-fixed m-16 bg-gradient-to-b from-gray-900 via-gray-900 bg-no-repeat bg-cover bg-center p-10 flex  flex-col justify-center items-center"
          style={{ backgroundImage: 'url("/public/heart-attack.jpg")' }}
        >
          <section className="flex flex-col text-center items-center justify-center w-4/5 h-auto p-16 gap-10 bg-gradient-to-r from-green-500 via-purple-500 to-red-500">
            <h1 className=" tracking-wide flex flex-col gap-5 font-bold">
              <p className="text-5xl">
                Agir pour lutter contre la mort subite.
              </p>

              <p className="text-4xl">
                L’utilisation d’un DAE lors d’un arrêt cardiaque augmente de 40%
                les chances de survie.
              </p>
            </h1>
            <h2 className="w-4/5 text-2xl">
              À peine 1 citoyen sur 10 survit à un arrêt cardiaque faute d’avoir
              bénéficié au bon moment de l’intervention d’une personne.
            </h2>
          </section>
        </main>
      </div>
    </>
  )
}

export default HomePage
