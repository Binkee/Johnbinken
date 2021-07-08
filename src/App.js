import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import {BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
   <Header/>
   
  <Switch>
    
    <Route component={About} path="/about"/>
    <Route component={Projects} path="/projects"/>
    <Route component={Contact} path="/contact"/>
  </Switch>
  </BrowserRouter>
   </>
   
  );
}

export default App;
