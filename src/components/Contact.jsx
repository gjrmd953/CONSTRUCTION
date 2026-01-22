import React from 'react'
import Container from './Container'
import ContImg from "../assets/contact.png"

const Contact = () => {
  return (
    <div className='py-32'>
        <Container>
            <h2>Contact Us</h2>
            <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                <img src={ContImg} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Contact