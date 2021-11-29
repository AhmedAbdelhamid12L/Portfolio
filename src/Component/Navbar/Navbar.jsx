import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container py-3">
            <a className="navbar-brand fs-2 fw-bolder" href="#">divDEV</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <NavLink activeClassName="bg-success rounded text-white" className="nav-link px-4 fs-5 fw-bold" to="/home">HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="bg-success rounded text-white" className="nav-link px-4 fs-5 fw-bold" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="bg-success rounded text-white" className="nav-link px-4 fs-5 fw-bold" to="/education">EDUCATION</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="bg-success rounded text-white" className="nav-link px-4 fs-5 fw-bold" to="/projects">PROJECTS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="bg-success rounded text-white" className="nav-link px-4 fs-5 fw-bold" to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  } 
}
