import React, { useEffect, useState } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../lib/supabase/supabaseClient'

const Authentification = () => {
  return (
    <>
      <div>Authentification</div>
      <div>
        <Auth
          supabaseClient={supabase}
          providers={['google']}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    </>
  )
}

// export default Authentification

// import { Auth } from '@supabase/auth-ui-react'
// import { supabase } from '@supabase/auth-ui-shared'
// import React, { useEffect, useState } from 'react'
// import Account from '../components/authentification/Account'

// const Authentification = () => {
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     setSession(supabase.auth.session())
//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })
//   }, [])

//   return (
//     <div className="container mx-auto">
//       {!session ? (
//         <Auth />
//       ) : (
//         <Account key={session.user.id} session={session} />
//       )}
//     </div>
//   )
// }

// export default Authentification
