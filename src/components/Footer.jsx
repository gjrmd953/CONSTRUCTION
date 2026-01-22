import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='py-10'>
        <Container>
            <div className="flex justify-between">
                <div className="">CONSTRUCTION</div>
                <div className="">Resources</div>
                <div className="">Company</div>
                <div className="">Get in touch</div>
            </div>

            <h2 className='text-center'>Copyright construction.com, All rights reserved.</h2>
        </Container>
    </div>
  )
}

export default Footer