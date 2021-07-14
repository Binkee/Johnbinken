import React from 'react'
import screenshot from '../Wildsimg.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card'
const Projects = () => {
    return (
        <div className="projects-container">
           
           <h3 className="title-projects">Projects</h3>
                
                <div className="project-section">
                  <a href="http://wildspotter.herokuapp.com/">
                      <img className="screenshot" alt="project-wildspotter" src={screenshot}/>
                  </a>
                <div className="project-info"></div>
        </div>
        </div>
    )
}

export default Projects
