import { useState } from 'react'
import { Button } from '@/components/ui/button'

import SignIn from '@/Routes/SignIn'
import SignUp from '@/Routes/SignUp'
import { Icons } from './ui/icons'

const AuthFormUser = ({ onChangeSign, signType }) => {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-2">
      <form type="submit" onSubmit={onSubmit}>
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {signType === 'signUp'
              ? 'Creer un compte'
              : signType === 'signIn' && 'Se connecter'}
          </h1>
          <p className="text-sm text-muted-foreground">
            Entrer votre adresse mail et mot de passe
          </p>
        </div>
        <div className="grid gap-2">
          {signType === 'signUp' ? (
            <SignUp />
          ) : (
            signType === 'signIn' && <SignIn />
          )}
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.GitHub className="mr-2 h-4 w-4" />
        )}{' '}
        Github
      </Button>
    </div>
  )
}

export default AuthFormUser
