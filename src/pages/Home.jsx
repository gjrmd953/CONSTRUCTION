import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Why from '../components/Why'
import Our from '../components/Our'
import Message from '../components/Message'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Why/>
    <Our/>
    <Message/>
    <Contact/>
    <Blog/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Home