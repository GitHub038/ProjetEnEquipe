import SignIn from './Routes/SignIn'
import SignUp from './Routes/SignUp'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
import Protected from './Routes/Protected'
import Authentification from './pages/authentification'
import DaeRender from './components/DaeRender'
import HomePage from './pages/homePage'
import InfoDAE from './pages/infoDAE'
import Profil from './pages/profil'

// TODO : Ici mettre les routes de notre projet

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/searchDAE',
      element: <DaeRender />,
    },
    {
      path: '/info',
      element: <InfoDAE />,
    },

    {
      path: '/auth',
      element: <Authentification />,
    },
    {
      path: '/profil',
      element: (
        <Protected>
          <Profil />
        </Protected>
      ),
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
  ])
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
