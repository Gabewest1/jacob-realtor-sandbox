import React, { Component } from 'react';
import '../App.css';
import Testimonial from '../components/Testimonial';

class Testimonials extends Component {
    render() {
      return (
        <div className="testimonials-container">
          <h1>Testimonials</h1>
          <div className="testimonials-lines">
          </div>
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      );
    }
  }
  
  export default Testimonials;
  