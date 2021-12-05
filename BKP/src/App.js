import './App.css';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hcontent from "./pages/Hcontent";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Products from './pages/Products';
import Nav from './pages/Nav';
import Footer from './pages/Footer';

export default function App() {
  return (
    <>
    {/* <Router> */}
    
    {/* Viral's Navbar */} 
    <Nav/> 
     
    <Switch>
          <Route exact path="/contactus">
            <Contactus/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          <Route exact path="/">
           <Hcontent/>
          </Route>
    </Switch>

    {/* Viral's Footer */}
    <Footer/>

    {/* </Router> */}
    </>
  );
}

