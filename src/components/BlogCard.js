import React from 'react';
import{Card, Col} from 'react-bootstrap';

const BlogCard = ({image, title, description, siteLink})=>{

    return(
        <>
        <Col className="card-column" md={4} sm={12}>
            <Card className="blog-card">
            <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link href={siteLink} className="blog-card-btn" target="_blank">Site Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}
export default BlogCard