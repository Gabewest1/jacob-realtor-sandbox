import React, { Component } from 'react';
import '../App.css';
import Mls from '../components/Mls';
import HeaderStatement from '../components/HeaderStatement';

class Hero extends Component {
    render() {
      return (
        <div className="hero">
            {/* <div className="overlay">
            </div>  */}
            <HeaderStatement />  
            <Mls />
        </div>  
      );
    }
  }
  
  export default Hero;
  