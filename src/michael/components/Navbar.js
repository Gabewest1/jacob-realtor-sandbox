import React, { Component } from 'react';
import '../App.css';
import NavButton from '../components/NavButton';
import NavContactInfo from '../components/NavContactInfo';
import Balloon from '../components/Balloon';

class Navbar extends Component {
    render() {
      return (
        <div className="nav-container">
            <div className="nav-items-container">
                <Balloon />
                <div className="nav-buttons-container">
                    <NavButton name='Property Search' />
                    <NavButton name='Buy' />
                    <NavButton name='Sell' />
                    <NavButton name='About Us' />
                    <NavButton name='Contact' />
                </div>        
                <NavContactInfo />
            </div>        
        </div>  
      );
    }
  }
  
  export default Navbar;
  