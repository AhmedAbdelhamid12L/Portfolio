import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Footer.module.css"

export default class Footer extends Component {
  render() {
    return (
      <div className={style.footerContanier}>
        <div className="container">
            <div className="text-center py-5">
              <h3>My Personal Accounts</h3>
              <div className={style.footerIcon}>
                <div className={style.icon}>
                <NavLink to='/contact'><i class="fas fa-envelope"></i></NavLink>
                </div>
                <div className={style.icon}>
                <a href="https://www.linkedin.com/in/ahmed-abdelhamid-87644821a/" target='_blank'><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className={style.icon}>
                  <a href="https://github.com/AhmedAbdelhamid12L" target='_blank'><i class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
        </div>
        <div className={style.copyright}>
          <p className="p-0 m-0">Copyright © divDEV 2021</p>
        </div>
      </div>
    )
  }
}
