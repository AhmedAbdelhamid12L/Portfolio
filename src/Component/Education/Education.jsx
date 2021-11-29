import React, { Component } from 'react'
import style from './Education.module.css'


export default class Education extends Component {
  render() {
    return (
      <div>
        <div className="container p-5">
          <div>
            <div>
              <h2 className={style.educationH2}>EDUCATION</h2>
              <div className="d-flex justify-content-center align-items-center">
                <div className={style.line}></div>
                <i className="fas fa-star fa-3x px-2"></i>
                <div className={style.line}></div>
              </div>
            </div>
            <div className='pt-5'>
              <p className='h3'>2015:2019 <br /> 
              <span className='fw-bolder'>Bachelor of Engineering, 
              </span>  Al-Azhar University. <br /> 
              <span className='pe-5 me-5'>Department: Civil.</span>Grade: Good.</p>
              <p className='h3 pt-5'>2019 <br /> 
              <span className='fw-bolder'>Graduation project: 
              </span>  Steel constructions. 
              <span className='ps-5'>Grade: Excellent.</span></p>
              <p className='h3 pt-5'>2/2021:2/2022 <br /> 
              <span className='fw-bolder'>MERN Full Stack Diploma
              </span>  with Route Academy at Cairo. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

