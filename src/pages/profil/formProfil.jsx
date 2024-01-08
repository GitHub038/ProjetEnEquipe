import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getAuth, updateProfile } from '@firebase/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

//Initialize
const auth = getAuth()
const storage = getStorage()

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png')

  setLoading(true)

  const snapshot = await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)

  updateProfile(currentUser, { photoURL })

  setLoading(false)
  alert('Uploaded file!')
}

const FormProfil = () => {
  const currentUser = useAuth()
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)
  const [photoURL, setPhotoURL] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  )

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading)
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL)
    }
  }, [currentUser])

  return (
    <div className="fields">
      <Input type="file" onChange={handleChange} />
      <Button disabled={loading || !photo} onClick={handleClick}>
        Upload
      </Button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div>
  )
}

export default FormProfil
