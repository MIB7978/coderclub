import React from 'react'
import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

function Navbar() {
  const brandlogo = {
    color: '#ffff',
    textDecoration: 'none',
    fontWeight:'bold',
    fontSize:'22px',
    display:'flex',
    alignItems:'center',
  
  }
  const logoText = {
    marginLeft:'10px'

  }
  return (
    <nav className={`${style.navbar} container`}>

      <Link to="/" style={brandlogo} >
        <img src="/image/hand_sign.png" alt='' />
        <span style={logoText}>Podcastclub</span>
      </Link>

    </nav>

  )
}

export default Navbar