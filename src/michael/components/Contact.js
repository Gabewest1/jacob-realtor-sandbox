import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
    render() {
      return (
        <div className="contact-container">
            <div className="jacob-contact-info">
                <h1>Jacob West</h1>
                <p>512 669 9033</p>
                <p>jacob@austinelitehomes.com</p>
                <span>More Info</span>                
            </div>       
            <div className="remax-contact-info">
                <h1>Remax Office</h1>
                <p>1911 N Austin Ave STE 502</p>
                <p>512 930 0000</p>
                <span>More Info</span>
            </div>  
            <img src='/assets/skyline.svg'/>
        </div>
      );
    }
  }
  
  export default Contact;
  