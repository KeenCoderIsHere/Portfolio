import React from 'react'
import '../css/Home.css'
import { Element } from 'react-scroll'
import { FiArrowUpRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Home = () => {
  
  return (
    <>
    <Element name='Home'>
      <div className='home-layout'>
        <div><img src='Susheeth.jpg'></img></div>
        <div className="text-container">
        <h1 className='hi-name'><span className='hi'>Hi, I'm </span><span className='full-name'>Susheeth Venkatraman S</span></h1>
        <p className='my-desc'>I'm a passionate developer focused on building clean, interactive web experiences. I enjoy solving problems and am currently sharpening my DSA skills through regular problem-solving.</p>
        <Link to='/projects'><p className='view-button'>View My Work <FiArrowUpRight /></p></Link>
        </div>
      </div>
    </Element>
    </>
  )
}

export default Home