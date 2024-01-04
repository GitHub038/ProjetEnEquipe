import { useEffect, useState } from 'react'
import useLocalStorageState from './useLocalStorage'

const URL = import.meta.env.VITE_API_URL

const useFetchDAE = () => {
  // const [data, setData] = useState(null)
  const [data, setData] = useLocalStorageState(null, 'data')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDAE = async () => {
      try {
        setIsLoading(true)
        setError('')
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error('Something went wrong with fetching movies')
        }
        const data = await response.json()
        setData(data)
        setError('')
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDAE()
  }, [setData])

  return {
    data,
    isLoading,
    error,
  }
}

export default useFetchDAE
