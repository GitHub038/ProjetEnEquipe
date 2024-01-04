import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="../public/Logo.svg" alt="Urgence DAE" className="h-16 " />
      <span className="text-3xl font-bold">Geo-Defibrilateur</span>
    </Link>
  )
}

export default Logo
