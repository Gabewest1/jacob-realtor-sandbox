import React, { Component } from 'react';
import '../App.css';
import Buy from '../components/Buy';
import Sell from '../components/Sell';

class About extends Component {
    render() {
      return (
        <div className="about-container">
            <div className="jacob-container">
                <div>
                    <img className="jacob" src='/assets/jacob.jpg'/>
                </div>
                <div className="about-text">
                    <div className="about-header">
                        Jacob West
                    </div>
                    <div className="line">
                    </div>
                    <div className="about-paragraph">
                        Jacob West is local real estate agent committed to serving the greater Austin Area, to learn more about Jacob and his company, Local real estate agent committed to serving the greater Austin Area, to learn more about Jacob and his company, Jacob West is local real estate agent committed to serving the greater Austin Area, to learn more about Jacob and his company, <span>click here</span>
                    </div>       
                </div>        
            </div>
            <div className="buy-sell-header">
                Getting Started
            </div>
            <div className="line2">
            </div>
            <Buy />
            <Sell />
        </div>
      );
    }
  }
  
  export default About;
  