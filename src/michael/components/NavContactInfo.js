import React, { Component } from 'react';
import '../App.css';

class NavContactInfo extends Component {
    render() {
      return (
        <div className="nav-contact-info-container">
            <div className="call-text"><span>(</span>call<span>/</span>text<span>)</span></div>
            <div className="nav-jacob-number"><span className="space-number1">512</span> 669 96<span className="space-number2">13</span></div>            
        </div>
      );
    }
  }
  
  export default NavContactInfo;
  