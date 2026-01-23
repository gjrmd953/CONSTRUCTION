import React from 'react'
import Container from './Container'
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ShapeImg from "../assets/shape.png"


const Footer = () => {
  return (
    <div className='py-10'>
      <Container>
        <div className="flex justify-between">
          <div className="w-2/5">
            <h2 className='font-pop font-bold text-2xl text-[rgb(24,167,185)] uppercase cursor-pointer'>CONSTRUCTION</h2>
            <p className='font-pop text-secondary pt-8 pb-10'>
              You’ll find your next Home <br /> loan valu you prefer.
            </p>
            <div className="flex gap-5">
              <div className="text-white bg-tertiary p-3 rounded-md">
                <FaFacebookF />
              </div>
              <div className="text-white bg-tertiary p-3 rounded-md">
                <FaTwitter />
              </div>
              <div className="text-white bg-tertiary p-3 rounded-md">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="w-1/5">
            <h2>Resources</h2>
            <ul className='py-3'>
              <li>Our Agents</li>
              <li>Member Stories</li>
              <li>Video</li>
              <li>Free trial</li>
            </ul>

          </div>
          <div className="w-1/5">
            <h2>Company</h2>
            <ul className='pt-4'>
              <li>Patnerships</li>
              <li>Terms of use</li>
              <li>Privacy</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h2 className='pb-4'>Get in touch</h2>
            <ul>
              <li>Enter your mail</li>
            </ul>
          </div>
        </div>

        <img src={ShapeImg} alt="" />
        <div className='font-pop text-[#C2C2C2] text-center py-10'>Copyright construction.com, All rights reserved.</div>
      </Container>
    </div>
  )
}

export default Footer