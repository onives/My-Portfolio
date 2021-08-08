import React, {useState, useEffect} from 'react';
import BlogCard from './BlogCard';
import{Container, Row } from 'react-bootstrap';
import FooterLayout from './FooterLayout';
import env from 'react-dotenv';
import axios from 'axios';

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
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get(`${env.remoteApi}blogs/all`)
        .then(res=>{
            setBlogs(res.data)
        })
       }, [])

    return(
        <>
       
            <div className="container-div">
                <div className="section-paragraph-div">
                    <h2 className="titles">My Blogs</h2>
                    <p className="section-paragraph">I love to write about my journey as a self taught developer hoping to educate
                    as well as inspire anyone out there interested in taking on a caree in tech. Here are some of the blogs I've written so far. 
                    </p>
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