import { Button } from '@/components/ui/button'
import { getAuth, signOut } from 'firebase/auth'

const Profil = () => {
  const auth = getAuth()
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Button onClick={() => handleSignOut()}>Log out</Button>
      <h1>Profil</h1>
    </div>
  )
}

export default Profil
