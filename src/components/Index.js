import React, { Component } from 'react'
import {Link} from "react-router-dom"
import blob from '../blob.svg'
import '../App.css';
import Typical from 'react-typical'


export default class Home extends Component {
    render() {
        return (
            
            <div className="home">
                <div className="title">  
               <div className="hero"> <h1>
                    I'm John
                </h1>

              
                
                <Typical className="Typer content-desktop"
            loop={Infinity}
            wrapper="b"
            steps={['Front-end Developer', 5000, 'Mobile & Web Developement', 5000, 'Musician, Songwriter', 5000]}/></div>
                 
<div className="container-btn"><Link to="/contact"><button className="contact" >Contact me</button></Link></div>
            
                
               
                </div>
                <div className="blob">
                <img src={blob} alt="logo"/>
                
                
                </div>    
            
            </div>

           
        )
    }
}
