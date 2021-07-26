import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import{Container, Row } from 'react-bootstrap';
import FooterLayout from './FooterLayout';
import axios from 'axios';

const current_projects = [
    {
      image: "nn.png",
      title: "title1",
      description: "description 1",
      githubLink: "link1",
      siteLink: "link22"
    },
    {
      image: "njj.png",
      title: "title2",
      description: "description 2",
      githubLink: "link2",
      siteLink: "link33"
    },
    {
        image: "njj.png",
        title: "title2",
        description: "description 2",
        githubLink: "link2",
        siteLink: "link33"
    },
    {
        image: "njj.png",
        title: "title2",
        description: "description 2",
        githubLink: "link2",
        siteLink: "link33"
    },
  
];

const ProjectLayout = ()=>{
    const [projects, setProjects] = useState(current_projects);

   useEffect(()=>{
    axios.get("http://localhost:4000/projects/all")
    .then(res=>{
        setProjects(res.data)
    })
   }, [])

    return(
        <>
            
            <div className="container-div">
                <h2 className="titles">My Projects</h2>
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