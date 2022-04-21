import React from "react";
// import {
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import jslogo from "../../images/skills/js.png";
import nodelogo from "../../images/skills/node-js-icon-8.jpg";
import reactlogo from "../../images/skills/React-icon.svg.png";
import expresslogo from "../../images/skills/express.png";
import dockerlogo from "../../images/skills/vertical-logo-monochromatic.webp";
import nestlogo from "../../images/skills/nestjs-logo.png";
import htmlcsslogo from "../../images/skills/html-css-logo.png";
import bootstraplogo from "../../images/skills/bootstrap-logo.png";
import restapilogo from "../../images/skills/rest-api-1.svg";
import graphqllogo from "../../images/skills/graphql-logo-freelogovectors.net_.png";
import mongologo from "../../images/skills/mongodb-logo.svg";
import mysqllogo from "../../images/skills/mysql-logo.png";
import postegresqllogo from "../../images/skills/Postgresql_elephant.svg.png";
import redislogo from "../../images/skills/redis-logo.png";
import mongooselogo from "../../images/skills/mongoose.png";
import sequelizelogo from "../../images/skills/sequelize.svg";
import typeormlogo from "../../images/skills/typeormpng.png";
import socketiologo from "../../images/skills/socketio.png";
import style from "./About.module.css";

export default function About() {
  return (
    <div>
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
          <div className="container">
            <div className="py-4">
              <p className="h2 pb-3">My Name is Ahmed Abdelhamid</p>
              <p className={style.aboutDesc}>
                I graduated from the Faculty of Civil Engineering in 2019,{" "}
                <br />
                and worked for a year as a concrete structures designer, but now
                I have experience in developing websites using
                <span className="h4 text-primary">
                  {" "}
                  REACT & NODE JAVASCRIPT{" "}
                </span>{" "}
                <br />
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
            <div className="row text-center pt-5">
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={jslogo}
                    className="img-fluid  w-100"
                    alt="js logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={nodelogo}
                    className="img-fluid  w-100"
                    alt="node logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={reactlogo}
                    className="img-fluid w-100"
                    alt="react logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={expresslogo}
                    className="img-fluid pt-5 w-100"
                    alt="express logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={dockerlogo}
                    className="img-fluid  w-100"
                    alt="docker logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={nestlogo}
                    className="img-fluid pt-5 w-100"
                    alt="nest logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={htmlcsslogo}
                    className="img-fluid  w-100"
                    alt="html css logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={bootstraplogo}
                    className="img-fluid  w-100"
                    alt="bootstrap logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={restapilogo}
                    className="img-fluid pt-5  w-100"
                    alt="restapi logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={graphqllogo}
                    className="img-fluid  w-75"
                    alt="graphql logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={mongologo}
                    className="img-fluid  w-100"
                    alt="mongo logo"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={mysqllogo}
                    className="img-fluid  w-100"
                    alt="mysql logo"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={postegresqllogo}
                    className="img-fluid  w-75"
                    alt="postegresql logo"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={redislogo}
                    className="img-fluid  w-75"
                    alt="redis logo"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={socketiologo}
                    className="img-fluid  w-75"
                    alt="socketio logo"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={sequelizelogo}
                    className="img-fluid  w-75"
                    alt="sequelize logo"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={typeormlogo}
                    className="img-fluid  w-75"
                    alt="typeorm logo"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6  p-4">
                <div>
                  <img
                    src={mongooselogo}
                    className="img-fluid pt-5  w-75"
                    alt="mongoose logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className="row pt-5">
  <div className="col-md-3 col-sm-5 p-4">
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
  <div className="col-md-3 col-sm-5 p-4">
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
  <div className="col-md-3 col-sm-5 p-4">
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
  <div className="col-md-3 col-sm-5 p-4">
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
  <div className="col-md-3 col-sm-5 p-4">
  <CircularProgressbarWithChildren
      value={70}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `rgba(62, 152, 199, ${70 / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    >
      <p className='text-center h3'>NODE.JS<br /> 70% </p>
    </CircularProgressbarWithChildren>
  </div>
  <div className="col-md-3 col-sm-5 p-4">
  <CircularProgressbarWithChildren
      value={70}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `rgba(62, 152, 199, ${70 / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    >
      <p className='text-center h3'>EXPRESS.JS<br /> 70% </p>
    </CircularProgressbarWithChildren>
  </div>
  <div className="col-md-3 col-sm-5 p-4">
  <CircularProgressbarWithChildren
      value={65}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `rgba(62, 152, 199, ${65 / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    >
      <p className='text-center h3'>SQL & <br /> NOSQL DB<br /> 65% </p>
    </CircularProgressbarWithChildren>
  </div>
  <div className="col-md-3 col-sm-5 p-4">
  <CircularProgressbarWithChildren
      value={70}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `rgba(62, 152, 199, ${70 / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    >
      <p className='text-center h3'>MONGODB & <br /> MYSQL<br /> 70% </p>
    </CircularProgressbarWithChildren>
  </div>
</div> */
