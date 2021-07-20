import React from 'react'
import Paper from '@material-ui/core/Paper';
import screenshot1 from "../yetimg.png"
import screenshot from '../Wildsimg.png'
import screenshot2 from "../localfarm.png"
import webIcon from "../web.png"
import {FaGithub, FaLinkedin} from 'react-icons/fa'
const Projects = () => {
    return (
       <div className="project-container">
           
           <h3 className="project">Projects</h3>
          <div className="underline"></div>

           <div className="project-section">
           <a href="http://wildspotter.herokuapp.com/">
                      <img className="screenshot" alt="project-wildspotter" src={screenshot}/>
                  </a>
                 
                  <Paper elevation={1}>
                      
        <h4 className="title">Wild Spotter</h4>
        <p className="text">Wild Spotter is a full-stack web application,<br/> where the big five animals of Europe have been spotted.</p>
      <div className="tech">
      <span className="highlight">React</span> 
      <span className="highlight">NodeJS</span> 
      <span className="highlight">MongoDB</span> 
      <span className="highlight">CSS</span> 
      <span className="highlight">Bootstrap</span> 
      </div>
<div className="links">
      <a href="https://wildspotter.herokuapp.com"><img className="webIcon" src={webIcon}/>Check it out!</a>
                  <a href="https://github.com/Binkee/WildSpotter-client"><FaGithub size="24px" color="#007fda"/>Repo Client</a>
                  <a href="https://github.com/Binkee/WildSpotter-server"><FaGithub size="24px" color="#007FDA"/>Repo server</a>
               </div>   
      </Paper>
    

         
         
       </div>

       <div className="project-section">
           <a href="http://local-farm.herokuapp.com/">
                      <img className="screenshot" alt="project-wildspotter" src={screenshot2}/>
                  </a>
                  
                  <div>
                  <Paper elevation={1}>
                      
        <h3 className="title">Local Farm</h3>
        <p className="text">Local Farm is a full-stack web application, with the idea of creating a platform for people to buy food at the local farms</p>
        <div className="tech">
      <span className="highlight">React</span> 
      <span className="highlight">NodeJS</span> 
      <span className="highlight">MongoDB</span> 
      <span className="highlight">CSS</span> 
      <span className="highlight">Bootstrap</span> 
      </div>

      <div className="links">
      <a href="https://local-farm.herokuapp.com"><img className="webIcon" src={webIcon}/>Check it out!</a>
                  <a href="https://github.com/Binkee/WildSpotter-client"><FaGithub size="24px" color="#007fda"/>Repo Client</a>
                  <a href="https://github.com/Binkee/WildSpotter-server"><FaGithub size="24px" color="#007FDA"/>Repo server</a>
               </div>   
      </Paper>
    </div>

         
         
      
    </div>

         
         
       <div className="project-section">
           <a href="https://binkee.github.io/Run-Yeti-/">
                      <img className="screenshot" alt="project-wildspotter" src={screenshot1}/>
                  </a>
                  
                  <div>
                  <Paper elevation={2}>
                      
        <h3 className="title">Run Yeti Run</h3>
        <p className="text">First project after two weeks of study of Javascript. Basic game, the user must avoid the </p>
        <div className="tech">
      <span className="highlight">Javascript</span> 
       <span className="highlight">HTML</span> 
      <span className="highlight">CSS</span> 
     
      </div>

      <div className="links">
      <a href="https://binkee.github.io/Run-Yeti-/"><img className="webIcon" src={webIcon}/>Check it out!</a>
                 
               </div>   
      </Paper>
    </div>

         
         
      
    </div>
       </div>
    
    
    )
}

export default Projects
