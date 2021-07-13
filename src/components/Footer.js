import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { BsEnvelopeFill} from "react-icons/bs";

import { MDBIcon } from "mdbreact";
import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <div className="main-footer">
        <div className="footer-container">  
        
        <div className="social-icons">  
        <a href="https://www.linkedin.com/in/johannes-binken-40b887123/"><FaLinkedin size="40px" color="#fdc500"/></a>
        
        
        <a href="mailto:devbinken@gmail.com"><BsEnvelopeFill size="40px" color="#fdc500"/></a>

        <a href="https://www.linkedin.com/in/johannes-binken-40b887123/"><FaGithub size="40px" color="#fdc500"/></a>
       
        </div>
       <p className="binken">© John Binken. All rights Reserved.</p> 
        </div>
        </div>
    )
}

export default Footer
