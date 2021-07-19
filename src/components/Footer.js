import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { BsEnvelopeFill} from "react-icons/bs";
const Footer = () => {
    return (
        <div className="main-footer">
        <div className="footer-container">  
        
        <div className="social-icons">  
        <a href="https://www.linkedin.com/in/johannes-binken-40b887123/"><FaLinkedin size="40px" color="black"/></a>
        
        
        <a href="mailto:devbinken@gmail.com"><BsEnvelopeFill size="40px" color="black"/></a>

        <a href="https://github.com/Binkee"><FaGithub size="40px" color="black"/></a>
</div>
<div className="social-icons2">
        <a  className="icon-ipad" href="https://www.linkedin.com/in/johannes-binken-40b887123/"><FaLinkedin className="icon-ipad" size="100px" color="black"/></a>
        
        
        <a className="icon-ipad" href="mailto:devbinken@gmail.com"><BsEnvelopeFill className="icon-ipad" size="100px" color="black"/></a>

        <a className="icon-ipad" href="https://github.com/Binkee"><FaGithub  className="icon-ipad"size="100px" color="black"/></a>
       
    </div>
       <p className="binken">© John Binken. All rights Reserved.</p> 
        </div>
        </div>
    )
}

export default Footer
