import React from 'react';
import Typed from "react-typed";

import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shops from './components/pages/Shops';
import VetClinics from './components/pages/VetClinics';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import AboutUs from './components/pages/AboutUs';
import Cart from './components/pages/Cart';
import Forum from './components/pages/Forum';
import Foods from './components/pages/Foods';
import Medicines from './components/pages/Medicines';

import SideBar from './components/SideBar';

import {sliderData} from "./data/sliderData.js";
import Hero from "./components/Hero.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} >
          <Typed 
            className="typed-text"
            strings={["Welcome To Pet's Home!","One stop Service for your all kinds of Pets"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <div className="hero-wrapper">
            <SideBar />
            <Hero slides={sliderData} />
          </div>

          <SearchBar />
        </Route>

        <Route path='/shops' component={Shops} />
        <Route path='/foods/' component={Foods} />
        <Route path='/medicines/' component={Medicines} />
        <Route path='/Vet-clinics' component={VetClinics} />
        <Route path='/pet-forum' component={Forum} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
