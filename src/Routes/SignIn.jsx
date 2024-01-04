import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { app } from '@/firebase/init_Firebase'

const SignIn = ({ isLoading }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // Success...
        console.log(user)
        navigate('/profil')
        //...
      })
      .catch((error) => {
        // Error
        alert('Vérifier votre email et mot de passe ou Inscrivez-vous !')
        console.log(error)
      })
  }
  return (
    <div>
      <form action="#">
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              name="pass"
              type="password"
              placeholder="Password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            onClick={(e) => handleSignIn(e)}
          >
            {isLoading && (
              <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign in
          </Button>
        </div>
      </form>
    </div>
  )
}
export default SignIn
