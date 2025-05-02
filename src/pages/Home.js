import React from 'react'
import Navbar from '../components/Navbar'
import VideoBackground from '../components/VideoBackground'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import About from '../components/About'
import Navbar2 from '../components/Navbar2'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
      <VideoBackground/>
      <Navbar2/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home;
