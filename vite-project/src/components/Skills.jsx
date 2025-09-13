import React from 'react'
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiMysql, 
  SiPhp, 
  SiOracle, 
  SiC, 
  SiCplusplus, 
  SiPython,
  SiMongodb,
  SiGithub,
  SiFirebase
} from "react-icons/si";
import { Element  } from 'react-scroll';
import { FaJava } from "react-icons/fa";
import '../css/Skills.css'
const Skills = () => {
  const size = 50
  return (
    <>
    <Element name='Skills'>
      <h1 className='skills-header'>Skills</h1>
         <div className="array">
  <div className="slider">
    {/* original set */}
    <div className="icon-card"><SiHtml5 color="#E34F26" size={size} /></div>
    <div className="icon-card"><SiCss3 color="#1572B6" size={size} /></div>
    <div className="icon-card"><SiJavascript color="#F7DF1E" size={size} /></div>
    <div className="icon-card"><SiReact color="#61DAFB" size={size} /></div>
    <div className="icon-card"><SiMysql color="#4479A1" size={size} /></div>
    <div className="icon-card"><SiPhp color="#777BB4" size={size} /></div>
    <div className="icon-card"><SiPython color="#3776AB" size={size-10} /></div>
    <div className="icon-card"><FaJava color="#007396" size={size} /></div>
      <div className="icon-card"><SiMongodb color="#47A248" size={size} /></div>
      <div className="icon-card"><SiGithub color="#181717" size={size} /></div>
      <div className="icon-card"><SiFirebase color="#FFCA28" size={size} /></div>

    {/* duplicate set for infinite scroll effect */}
    <div className="icon-card"><SiHtml5 color="#E34F26" size={size} /></div>
    <div className="icon-card"><SiCss3 color="#1572B6" size={size} /></div>
    <div className="icon-card"><SiJavascript color="#F7DF1E" size={size} /></div>
    <div className="icon-card"><SiReact color="#61DAFB" size={size} /></div>
    <div className="icon-card"><SiMysql color="#4479A1" size={size} /></div>
    <div className="icon-card"><SiPhp color="#777BB4" size={size} /></div>
    <div className="icon-card"><SiPython color="#3776AB" size={size-10} /></div>
    <div className="icon-card"><FaJava color="#007396" size={size} /></div>
      <div className="icon-card"><SiMongodb color="#47A248" size={size} /></div>
      <div className="icon-card"><SiGithub color="#181717" size={size} /></div>
      <div className="icon-card"><SiFirebase color="#FFCA28" size={size} /></div>
  </div>
</div>
<div className='skill-info'>
  <div className='sec'>
    <p className='sub-header'>Programming Languages</p>
    <p className='item'>C</p>
    <p className='item'>C++ (Data Structures and Algorithms) </p>
    <p className='item'>Java </p>
    <p className='item'>PHP</p>
    <p className='item'>Python</p>
    <p className='item'>JavaScript</p>
  </div>
  <div className='sec'>
    <p className='sub-header'>Frameworks</p>
    <p className='item'>ReactJS</p>
    <p className='item'>NodeJS</p>
    <p className='item'>ExpressJS</p>
  </div>
  <div className='sec'>
    <p className='sub-header'>Database</p>
    <p className='item'>MySQL</p>
    <p className='item'>Oracle</p>
    <p className='item'>MongoDB</p>
    <p className='item'>Firebase (Firestore, Auth, and deployment) </p>
  </div>
  <div className='sec'>
    <p className='sub-header'>Tools, Markup and Styling languages</p>
    <p className='item'>GitHub</p>
    <p className='item'>Git</p>
    <p className='item'>Firebase</p>
    <p className='item'>Postman </p>
    <p className='item'>HTML </p>
    <p className='item'>CSS </p>
  </div>
</div>
</Element>
</>
  )
}

export default Skills