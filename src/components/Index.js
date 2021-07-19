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

              
                
                <Typical className="Typer"
            loop={Infinity}
            wrapper="b"
            steps={['Front-end Developer', 2000, 'Mobile & Web Developer', 2000, 'Musician, Songwriter', 2000]}/></div>
                 
<div className="container-btn"><Link to="/contact"><button className="contact-btn" >Contact me</button></Link></div>
            
                
               
                </div>
                <div className="blob">
                

                
                
                </div>    
            
            </div>

           
        )
    }
}
