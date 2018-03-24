import React, { Component } from 'react';
import '../App.css';
import MlsItem from './MlsItem';
import SubmitMls from './SubmitMls';

class Mls extends Component {
    render() {
      return (
        <div className="mls-container">
          <div className="mls-items-container">
            <input className="mls-input" placeholder="City, Neighborhood, Address, Zip or MLS#"/>
            <MlsItem text={'Beds'}/>
            <MlsItem text={'Baths'}/>
            <MlsItem text={'Sq ft'}/>
            <SubmitMls />
          </div>
        </div>
      );
    }
  }
  
  export default Mls;
  