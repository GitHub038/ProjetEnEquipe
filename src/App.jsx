import SignIn from './Routes/SignIn'
import SignUp from './Routes/SignUp'
import Home from './Routes/Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
import Protected from './Routes/Protected'
import Authentification from './pages/authentification'
import DaeRender from './components/DaeRender'
import HomePage from './pages/homePage'
import SearchDAE from './pages/SearchDAE'
import InfoDAE from './pages/infoDAE'

// TODO : Ici mettre les routes de notre projet

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Protected>
          {/* <Home /> */}
          <DaeRender />
        </Protected>
      ),
    },
    {
      path: '/homePage',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <Authentification />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    {
      path: '/recherche',
      element: <SearchDAE />,
    },
    {
      path: '/info',
      element: <InfoDAE />,
    },
  ])
  return (
    // <>
    //   <DaeRender />
    // </>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
