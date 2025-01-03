import React from 'react'
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <>
     <nav
      style={{
        padding: "10px",
        background: "#f4f4f4",
        backgroundColor: "#f4f4f4",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px" }}>
        About
      </Link>
      <Link to="/services" style={{ margin: "0 10px" }}>
        Services
      </Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>
        Contact
      </Link>
    </nav>
    </>
  )
}

export default Navbar