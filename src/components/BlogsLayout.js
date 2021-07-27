import React, {useState} from 'react';
import BlogCard from './BlogCard';
import{Container, Row } from 'react-bootstrap';
import FooterLayout from './FooterLayout';


const current_blogs = [
    {
      image: "nn.png",
      title: "title1",
      description: "description 1",
      link: "link1",
    },
    {
      image: "njj.png",
      title: "title2",
      description: "description 2",
      link: "link2",
    },
    {
        image: "njj.png",
        title: "title2",
        description: "description 2",
        link: "link2",
    },
    {
        image: "njj.png",
        title: "title2",
        description: "description 2",
        link: "link2",
    },
  ];

const BlogsLayout = ()=>{
    const [blogs, setBlogs] = useState(current_blogs);

    return(
        <>
       
            <div className="container-div">
                <div className="section-paragraph-div">
                    <h2 className="titles">My Blogs</h2>
                    <p className="section-paragraph">some text here........masnn jshd jjwjhd sbbxggsjk jh h  jsii hhs js nn
                    bb </p>
                </div>
                <Container>
                    <Row>
                        {blogs.length &&
                            blogs.map((blog) => (
                            <BlogCard
                                image={blog.image}
                                title={blog.title}
                                description={blog.description}
                                siteLink={blog.siteLink}
                            />
                        ))}
                    </Row>
                </Container> 
            </div>
            <FooterLayout />
        </>
    )
}
export default BlogsLayout