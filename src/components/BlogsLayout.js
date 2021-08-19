import React, {useState, useEffect} from 'react';
import BlogCard from './BlogCard';
import{Container, Row } from 'react-bootstrap';
import FooterLayout from './FooterLayout';
import env from 'react-dotenv';
import axios from 'axios';

const BlogsLayout = ()=>{
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get(`${env.remoteApi}blogs/me/${env.myId}`)
        .then(res=>{
            console.log(res.data)
            setBlogs(res.data)
        })
       }, [])

    return(
        <>
       
            <div className="container-div">
                <div className="section-paragraph-div">
                    <h2 className="titles">My Blogs</h2>
                    <p className="section-paragraph">I mostly write to educate, guide
                    as well as inspire anyone out there interested in taking on a career in tech. Here are some of the blogs I've written so far. 
                    </p>
                </div>
                <Container>
                    <Row> 
                    { blogs.map((blog) => (
                        <BlogCard
                            key={blog._id}
                            image={blog.image}
                            title={blog.title}
                            description={blog.description}
                            siteLink={blog.link}
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
