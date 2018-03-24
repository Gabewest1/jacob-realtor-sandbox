import React, { Component } from 'react';
import '../App.css';

class NavButton extends Component {
    render() {
      return (
        <div className="nav-button-container">
            <a href='#'>{this.props.name}</a>
        </div>
      );
    }
  }
  
  export default NavButton;
  