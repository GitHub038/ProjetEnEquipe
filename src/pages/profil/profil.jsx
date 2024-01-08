import { Button } from '@/components/ui/button'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

import FormProfil from './formProfil'

const Profil = () => {
  // const [user, setUser] = useState(null)
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
      <FormProfil />
    </div>
  )
}

export default Profil
