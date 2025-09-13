import React from 'react'
import { Element } from 'react-scroll'
import '../css/About.css'
import { FiArrowUpRight} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaCode, FaPuzzlePiece, FaCogs, FaTerminal, FaBug, FaGlobe } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
const About = () => {
  return (
    <>
    <Element name='About'>
    <div className='about-me-section'>
      <h1 className='about-me-header'>About Me</h1>
      <div className='left-section'>
        <h2 className='one-line-desc'>Passionate Web Developer & Problem-Solver</h2>
        <p className='full-about-desc'>Curious and creative, I enjoy crafting meaningful digital experiences—from intuitive interfaces to reliable functionality. Passionate about learning, problem-solving, and pushing boundaries, I see every project as a chance to grow and bring ideas to life.</p>
        <div className="button-container">
          <div className='about-buttons'>  
            <Link to={"/contact"}><button className="get-in-touch">Get in Touch <FiArrowUpRight /></button></Link>
            <Link to={"/"}><button className="download-cv">Download Resume <FiArrowUpRight /></button></Link>
          </div>
      </div>
      </div>
      <div className='right-section'>
        <div className='skillcard'>
          <FaGlobe size={120}/>
          <div className='skill-text'>
            <p className='skill-name'>Web Development</p>
            <p className='skill-desc'>Crafting responsive, user-friendly experiences that blend creativity with functionality, from layout to logic.</p>
          </div>
        </div>
        <div className='skillcard'>
          <FaCogs size={120}/>
          <div className='skill-text'>
            <p className='skill-name'>Problem Solving</p>
            <p className='skill-desc'>Approaching challenges with clear logic, improving efficiency through consistent practice and analytical thinking.</p>
          </div>
        </div>
      </div>
    </div>
    </Element>
    </>
  )
}

export default About