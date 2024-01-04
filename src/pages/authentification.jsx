import AuthFormUser from '@/components/AuthFormUser'
import AuthentSidebar from '@/components/AuthentSidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const Authentification = () => {
  const [signType, setSignType] = useState('signIn')

  const onChangeSign = () => {
    if (signType === 'signUp') {
      setSignType('signIn')
    } else {
      setSignType('signUp')
    }
  }

  return (
    <>
      {/* <div className='bg-[url('public/heart-attack.jpg')]'></div> */}
      <div className="md:hidden m-6 border-2 rounded-lg  border-slate-200">
        <img
          // src="/examples/authentication-light.png"
          src="../public/heart-attack.jpg"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          // src="/examples/authentication-dark.png"
          src="../public/heart-attack.jpg"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Button
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            // 'absolute right-4 top-4 md:right-8 md:top-8'
            'absolute flex items-center w-auto gap-2 md:right-8 md:top-8',
          )}
          onClick={onChangeSign}
        >
          {signType === 'signUp' ? 'Sign In' : 'Sign Up'}
        </Button>

        <AuthentSidebar />
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <AuthFormUser onChangeSign={onChangeSign} signType={signType} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authentification
