import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

import Index from './components/Index'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import {BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
    <body  style={{backgroundColor: "black"}}>
  <BrowserRouter>
  <div className="app">
  <Navbar/>
  <Switch>
    <Route component={Index} exact path="/"/>
    <Route component={About} path="/about"/>
    <Route component={Projects} path="/projects"/>
    <Route component={Contact} path="/contact"/>
   </Switch>
   <Footer/>
   </div>
  </BrowserRouter></body>
   </>
   
  );
}

export default App;
