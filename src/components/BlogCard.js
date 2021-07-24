import React from 'react';
import{Card, Col} from 'react-bootstrap';

const BlogCard = ({image, title, description, siteLink})=>{

    return(
        <>
        <Col className="card-column" md={4} sm={12}>
            <Card className="blog-card">
                <Card.Img src={image} alt="Blog image" />
                <Card.ImgOverlay>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link href={siteLink} className="blog-card-btn" target="_blank">Blog Link</Card.Link>
                </Card.ImgOverlay>
            </Card>
        </Col>
        </>
    )
}
export default BlogCard