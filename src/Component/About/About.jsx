import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from "./About.module.css"


export default function About() {
  return (
    <div id="about" className="bg-success">
      <div className={style.aboutContainer}>
        <div>
          <h2 className={style.aboutH2}>ABOUT Me</h2>
          <div className="d-flex align-items-center justify-content-center">
            <div className={style.line}></div>
            <i className="fas fa-star fa-3x px-2"></i>
            <div className={style.line}></div>
          </div>
        </div>
        <div>
        <div className='container'>
          <div className='py-4'>
            <p className='h2 pb-3 text-dark'>My Name is Ahmed Abdelhamid</p>
            <p className={style.aboutDesc}>I graduated from the Faculty of Civil Engineering in 2019, <br />
              and worked for a year as a concrete structures designer, 
              but now I have experience in developing websites using  
              <span className='h4 text-warning'> REACT JAVASCRIPT </span> <br /> 
              and I have created many projects.
            </p>
          </div>
          <div>
          <h2 className={style.aboutH2}>MY SKILLS</h2>
            <div className="d-flex align-items-center justify-content-center">
              <div className={style.line}></div>
              <i className="fas fa-star fa-3x px-2"></i>
              <div className={style.line}></div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-3 p-4">
            <CircularProgressbarWithChildren
                value={90}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',

                  // Text size
                  textSize: '16px',

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${90 / 100})`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              >
                <p className='text-center h3'>HTML <br /> 90% </p>
              </CircularProgressbarWithChildren>
            </div>
            <div className="col-md-3 p-4">
            <CircularProgressbarWithChildren
                value={90}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${90 / 100})`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              >
                <p className='text-center h3'>CSS&SASS<br /> 90% </p>
              </CircularProgressbarWithChildren>
            </div>
            <div className="col-md-3 p-4">
            <CircularProgressbarWithChildren
                value={85}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${85 / 100})`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              >
                <p className='text-center h3'>JAVASCRIPT<br /> &ES6 <br /> 85% </p>
              </CircularProgressbarWithChildren>
            </div>
            <div className="col-md-3 p-4">
            <CircularProgressbarWithChildren
                value={85}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${85 / 100})`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              >
                <p className='text-center h3'>REACT.JS<br /> 85% </p>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className='py-5'>
            <p className='h3'>And I have knowledge and skills in:</p>
            <p className='h4'>1- BOOTSTRAP.</p>
            <p className='h4'>2- Adobe XD.</p>
            <p className='h4'>3- Trello.</p>
            <p className='h4'>4- Git ,GitHub.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
