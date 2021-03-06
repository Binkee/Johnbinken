import React from 'react'
import logo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">

        <div className="container">

        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" style={{backgroundColor: "007af2"}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">        <FontAwesomeIcon icon={faBars} style={{color: '#007AF3'}} />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/about">About<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          
        </div>
        </div>    
      </nav>
    )
}

export default Navbar