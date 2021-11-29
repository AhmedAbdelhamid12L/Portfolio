import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Education from '../Education/Education'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Projects from '../Projects/Projects'
import Notfound from '../Notfound/Notfound'
import { Redirect, Route, Switch } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Main} />
          <Route path="/education" component={Education} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Notfound} />
        </Switch>
      </div>
      <Footer/>
      </>
    )
  }
}
