import React from 'react'
import { IoGlobeSharp } from "react-icons/io5";
import { SiGithub } from 'react-icons/si';
import { Element } from 'react-scroll'
import '../css/Projects.css'
import { FiArrowUpRight} from 'react-icons/fi'
const Projects = () => {
  const size = 60
  return (
    <>
    <Element name='Projects'>
      <h1 className='projects-header'>My Works </h1>
      <div className='projects' >
        <div className='project-cards'>
          <h1 className='project-name'>Library Management API</h1>
          <p className='tech-used'>PHP • Firebase • MySQL</p>
          <p className='project-desc'>RESTful PHP API for library management with MySQL, offering secure CRUD operations for books and user records.</p>
          <div className='icon'><a href='https://github.com/KeenCoderIsHere/Library-backend' className='git'>GitHub <FiArrowUpRight /></a></div>
        </div>
        <div className='project-cards'>
          <h1 className='project-name'>Expense Tracker</h1>
          <p className='tech-used'>ReactJS • Firebase</p>
          <p className='project-desc'>Personal finance tracker built with React for tracking income, expenses, and balance in real time.</p>
          <div className='icon'>
            <a href='https://basic-color-app.netlify.app/' target='_blank' className='git'>GitHub <FiArrowUpRight /></a>
            <a href='https://github.com/KeenCoderIsHere/ColorApp' target='_blank' className='view'>View site <FiArrowUpRight /></a>
          </div>
        </div>
        <div className='project-cards'>
          <h1 className='project-name'>To-do List</h1>
          <p className='tech-used'>ReactJS</p>
          <p className='project-desc'>ReactJS task management app with add/edit/delete functionality, task completion tracking, and persistent state management.</p>
          <div className='icon'>
            <a href='https://basic-to-do-app-using-react.netlify.app/' target='_blank' className='git'>GitHub <FiArrowUpRight /></a>
            <a href='https://github.com/KeenCoderIsHere/ToDoApp' target='_blank' className='view'>View site <FiArrowUpRight /></a>
          </div>
        </div>
        <div className='project-cards'>
          <h1 className='project-name'>Tic-Tac-Toe</h1>
          <p className='tech-used'>ReactJS</p>
          <p className='project-desc'>Interactive ReactJS Tic Tac Toe with real-time state updates, win/draw detection, and a sleek, responsive UI.</p>
          <div className='icon'>
            <a href='https://basic-to-do-app-using-react.netlify.app/' target='_blank' className='git'>GitHub <FiArrowUpRight /></a>
            <a href='https://github.com/KeenCoderIsHere/ToDoApp' target='_blank' className='view'>View site <FiArrowUpRight /></a>
          </div>
        </div>
        <div className='project-cards'>
          <h1 className='project-name'>QR Code Generator</h1>
          <p className='tech-used'>HTML • CSS • JavaScript</p>
          <p className='project-desc'>Lightweight web app that generates 64×64 QR codes on demand</p>
          <div className='icon'>
            <a href='https://basic-to-do-app-using-react.netlify.app/' target='_blank' className='git'>GitHub <FiArrowUpRight /></a>
            <a href='https://github.com/KeenCoderIsHere/ToDoApp' target='_blank' className='view'>View site <FiArrowUpRight /></a>
          </div>
        </div>
        <div className='project-cards'>
          <h1 className='project-name'>Color App</h1>
          <p className='tech-used'>ReactJS</p>
          <p className='project-desc'>Responsive React color tool with live background preview, hex value resolution, and text color toggle for optimal readability.</p>
          <div className='icon'>
            <a href='https://basic-color-app.netlify.app/' target='_blank' className='git'>GitHub <FiArrowUpRight /></a>
            <a href='https://github.com/KeenCoderIsHere/ColorApp' target='_blank' className='view'>View site <FiArrowUpRight /></a>
          </div>
        </div>

        <div className='project-cards'>
          <h1 className='project-name'>Portfolio</h1>
          <p className='tech-used'>ReactJS</p>
          <p className='project-desc'>Responsive personal portfolio built with ReactJS, showcasing projects, skills, and contact features with a sleek, interactive UI.</p>
          <div className='icon'>
            <a href='https://basic-color-app.netlify.app/' target='_blank' className='git'>GitHub <FiArrowUpRight /></a>
            <a href='https://github.com/KeenCoderIsHere/ColorApp' target='_blank' className='view'>View site <FiArrowUpRight /></a>
          </div>
        </div>
      </div>
      </Element>
    </>
  )
}

export default Projects