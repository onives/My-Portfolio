import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import{Container, Row } from 'react-bootstrap';
import FooterLayout from './FooterLayout';
import axios from 'axios';
import env from 'react-dotenv';

const ProjectLayout = ()=>{
    const [projects, setProjects] = useState([]);

   useEffect(()=>{
    axios.get(`${env.remoteApi}projects/me/${env.myId}`)
    .then(res=>{
        setProjects(res.data)
    })
   }, [])

    return(
        <>
            
            <div className="container-div">
                <div className="section-paragraph-div">
                    <h2 className="titles">My Recent works</h2>
                    <p className="section-paragraph"> Check out some of my personal projects 
                    I've worked on using: React.js, HTMl, CSS, Bootstrap, React-Bootstrap
                    Context-Api, Node.js, Firebase, MongoDB etc... Want to discus any project further? DM me :) </p>
                    
                </div>
                <Container>
                    <Row>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
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
