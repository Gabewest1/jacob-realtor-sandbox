import React, { Component } from 'react';
import '../App.css';

class MlsItem extends Component {
    render() {
      return (
        <div className="mls-item-container">
            <span>{this.props.text}</span>
            <img src='/assets/images/dropicon.svg'/>
        </div>
      );
    }
  }
  
  export default MlsItem;
  