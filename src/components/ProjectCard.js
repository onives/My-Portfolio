import React from 'react';
import{Card, Col} from 'react-bootstrap';

const ProjectCard = ({image, title, description, githubLink, siteLink})=>{

    return(
        <>
        <Col className="card-column" md={4} sm={12}>
            <Card className="project-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link href={githubLink} className="project-card-btn" target="_blank">Github Link</Card.Link>
                    <Card.Link href={siteLink} className="project-card-btn" target="_blank">Site Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}
export default ProjectCard
