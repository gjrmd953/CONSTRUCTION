import React from 'react'
import Container from './Container'
import BlgImg1 from "../assets/blogimg1.png"
import BlgImg2 from "../assets/blogimg2.png"

const Blog = () => {
  return (
    <div>
        <Container>
           <div className="">
             <h2>
                Lattest Blogs
            </h2>
            <div className="flex justify-between">
              <img src={BlgImg1} alt="" />
              <img src={BlgImg2} alt="" />
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Blog