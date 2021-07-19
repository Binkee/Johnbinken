  
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

import Index from './components/Index'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import {BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
  
  <BrowserRouter>
  <div className="app">
  <Navbar/>
  <Switch>
    <Route component={Index} exact path="/"/>
    <Route component={About} path="/about"/>
    <Route component={Projects} path="/projects"/>
    <Route component={Contact} path="/contact"/>
    <Route component={NotFound}/>
   </Switch>
   <Footer/>
   </div>
  </BrowserRouter>
   </>
   
  );
}

export default App;
