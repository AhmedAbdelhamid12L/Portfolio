import React, { Component } from 'react'
import style from "./Main.module.css"
import logo from '../../images/my photo.jpeg'
import cv from '../../CV/Dev.AbdelhamidV2CV.pdf'

export default class Main extends Component {
  render() {
    return (
      <>
      <div className={style.mainStyle}>
        <div className="container">
          <div className='row'>
            <div className='col-md-3 text-center'>
              <img src={logo} className={style.mainImg} alt="ahmed abdelhamid photo" />
            </div>
            <div className='col-md-8 text-center pt-3'>
              <p className='h3'>Hi There...</p>
              <p className='h3'>My Name Is <h1 className={style.mainH1}>Ahmed Abdelhamid </h1> </p>
              <div className="d-flex justify-content-center align-items-center">
                <div className={style.line}></div>
                <i className="fas fa-star fa-3x px-2 text-white"></i>
                <div className={style.line}></div>
              </div>
              <p className="h3 fs-2 pt-3">I am a Web Developer</p>
              <p className="h3 fs-2 pt-3">MERN stack Developer</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <a href={cv} download target="_blank" className='text-decoration-none btn btn-dark p-3 mt-4'>
              <i class="fas fa-download pe-2"></i> DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
      </>
    )
  }
}
