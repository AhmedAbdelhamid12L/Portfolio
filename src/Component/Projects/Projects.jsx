import React, { Component } from "react";
import style from "./Projects.module.css";
import logo1 from "../../images/MovieReact.PNG";
import logo2 from "../../images/NotesReact.PNG";
import logo3 from "../../images/Weathr.PNG";
import logo4 from "../../images/Memories.PNG";
import logo5 from "../../images/LoginSystem.PNG";
import logo6 from "../../images/MovieJs.PNG";
import logo7 from "../../images/Quiz.PNG";
import logo8 from "../../images/skills/node-js-icon-8.jpg";
import logo9 from "../../images/BookmarkWebsite.PNG";
import logo10 from "../../images/CRUDSystem.PNG";
import logo11 from "../../images/OnlineStore.PNG";
import logo12 from "../../images/Books.PNG";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="py-5">
          <h2 className={style.serviceH2}>MY PROJECTS</h2>
          <div className="d-flex align-items-center justify-content-center">
            <div className={style.line}></div>
            <i className="fas fa-star fa-3x px-2"></i>
            <div className={style.line}></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-4">
              <div className="card">
                <img
                  src={logo8}
                  className="card-img-top w-50 m-auto"
                  alt="Node Js"
                />
                <div className="card-body pt-4">
                  <h5 className="card-title">Node Projects</h5>
                  <p className="card-text">
                    Back End Projects using Node Js <br />
                    To see projects visit my GitHub
                  </p>
                  <div className="d-flex justify-content-center pt-2">
                    <a
                      href="https://github.com/AhmedAbdelhamid12L?tab=repositories"
                      className="btn btn-primary"
                    >
                      Visit GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo4} className="card-img-top" alt="Memorise" />
                <div className="card-body">
                  <h5 className="card-title pt-5">Memorise</h5>
                  <p className="card-text">
                    MERN Stack App React Node Express Mongo MongoAtls
                    material-ui
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://memories-app-hamido12.netlify.app/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo11} className="card-img-top" alt="OnlineStore" />
                <div className="card-body">
                  <h5 className="card-title pt-5">Online Store</h5>
                  <p className="card-text">
                    Using React.Js and GraphQL APIs to Fetching data
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/suqe-mall-client/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img
                  src={logo12}
                  className="card-img-top"
                  alt="FavoriteBooks"
                />
                <div className="card-body">
                  <h5 className="card-title">Favorite Books</h5>
                  <p className="card-text">
                    MERNG Project - Simple Full Stack Project <br /> React &
                    Node.js & Mongo & GraphQl
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/favorite-books-client/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card d-flex">
                <img src={logo1} className="card-img-top" alt="MovieReact" />
                <div className="card-body">
                  <h5 className="card-title">Movies by React</h5>
                  <p className="card-text">
                    Using React.js and Movies APIS Make this Website
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/MovieDB-By-React/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo2} className="card-img-top" alt="NotesReact" />
                <div className="card-body">
                  <h5 className="card-title">Notes by React</h5>
                  <p className="card-text">
                    Using React.js , APIS and some plugin for animation Make
                    this Website
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/Notes-By-React/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo3} className="card-img-top" alt="Weathr" />
                <div className="card-body">
                  <h5 className="card-title">Weathr by JS</h5>
                  <p className="card-text">
                    Using Pure js and Weathr API Make this Website
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/Weather-JS/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo5} className="card-img-top" alt="LoginSystem" />
                <div className="card-body">
                  <h5 className="card-title pt-4">Login System by js</h5>
                  <p className="card-text">
                    Using Pure js and APIS Make this Website
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/Simple-Login-System-JS/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo6} className="card-img-top" alt="MovieJs" />
                <div className="card-body">
                  <h5 className="card-title">Movies by js</h5>
                  <p className="card-text">
                    Using Pure js and Movies APIS Make this Website
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/MovieDB-Training-pure-javascript/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo7} className="card-img-top" alt="Quiz" />
                <div className="card-body">
                  <h5 className="card-title">Quiz by js</h5>
                  <p className="card-text">
                    Using Pure js and Quiz APIS Make this Website
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/Quiz-By-JS/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img
                  src={logo9}
                  className="card-img-top"
                  alt="BookmarkWebsite"
                />
                <div className="card-body">
                  <h5 className="card-title pt-4">Bookmark Website by js</h5>
                  <p className="card-text">Using pure js Make this Website</p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/Favorite-Website-JS/"
                      target="_blank"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="card">
                <img src={logo10} className="card-img-top" alt="CRUDSystem" />
                <div className="card-body">
                  <h5 className="card-title">CRUD System by js</h5>
                  <p className="card-text">Using pure js Make this Website</p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://ahmedabdelhamid12l.github.io/CRUD-system/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5">
          <div>
            <h2 className={style.serviceH2}>MY SERVICES</h2>
            <div className="d-flex align-items-center justify-content-center">
              <div className={style.line}></div>
              <i className="fas fa-star fa-3x px-2"></i>
              <div className={style.line}></div>
            </div>
          </div>
          <div className="py-4">
            <p className="h2 py-3 text-center">
              Develop website interfaces using React technology
            </p>
            <p className="fs-3">
              Thank you for watching my portfolio <br /> I will be very happy to
              work with you and I will use all my knowledge and experience to do
              what you want.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
