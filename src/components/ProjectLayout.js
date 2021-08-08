import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import{Container, Row } from 'react-bootstrap';
import FooterLayout from './FooterLayout';
import axios from 'axios';
import env from 'react-dotenv';

const ProjectLayout = ()=>{
    const [projects, setProjects] = useState([]);

   useEffect(()=>{
    axios.get(`${env.remoteApi}projects/all`)
    .then(res=>{
        setProjects(res.data)
    })
   }, [])

    return(
        <>
            
            <div className="container-div">
                <div className="section-paragraph-div">
                    <h2 className="titles">My Recent works</h2>
                    <p className="section-paragraph">From HTMl, CSS, Bootstrap to React.js, 
                    Context-Api, Node.js, Firebase and MongoDB. Check out some of my latest Projects 
                    I've worked on recently. Want to know more? DM me :) </p>
                    
                </div>
                <Container>
                    <Row>
                        {projects.length &&
                            projects.map((project) => (
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                githubLink={project.githubLink}
                                siteLink={project.siteLink}
                            />
                        ))}
                    </Row>
                </Container> 
            </div>
            <FooterLayout />
        </>
    )
}
export default ProjectLayout