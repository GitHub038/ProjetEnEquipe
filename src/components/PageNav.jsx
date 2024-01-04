import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const PageNav = () => {
  return (
    <nav className="flex w-full items-center justify-between  bg-gradient-to-r from-green-500 via-purple-500 to-blue-500">
      <Logo />

      <ul className="flex flex-row gap-16 mx-4">
        <li>
          <NavLink to="/searchDAE">Rechercher un DAE</NavLink>
        </li>
        <li>
          <NavLink to="/info">Info et FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/auth" className="">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav
