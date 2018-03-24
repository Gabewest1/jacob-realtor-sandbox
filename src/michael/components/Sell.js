import React, { Component } from 'react';
import '../App.css';

class Sell extends Component {
    render() {
      return (
        <div className="sell-container">
            <h1>What<span>'</span>s my home worth?</h1>
            <input placeholder="name"/>
            <input placeholder="email"/>
            <input placeholder="phone number"/>
            <input placeholder="message"/>
            <button className="submit-sell">Get In Touch</button>
       </div>
      );
    }
  }
  
  export default Sell;
  