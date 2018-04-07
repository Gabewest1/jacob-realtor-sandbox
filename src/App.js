import React, { Component } from 'react'
import styled from "styled-components"

import About1 from "./components/About1"
import About2 from "./components/About2"
import About3 from "./components/About3"
import About4 from "./components/About4"
import About5 from "./components/About5"
import About6 from "./components/About6"
import Contact from "./components/Contact"
import Contact2 from "./components/Contact2"
import Contact3 from "./components/Contact3"
import Listings from "./components/Listings"
import ZillowListings from "./components/ZillowListings"
import Locations from "./components/Locations"
import Icons from "./components/Icons"
import Icons2 from "./components/Icons2"
import Icons3 from "./components/Icons3"
import Testimonials1 from "./components/Testimonials1"
import Testimonials2 from "./components/Testimonials2"
import Testimonials3 from "./components/Testimonials3"
import Testimonials4 from "./components/Testimonials4"
import Testimonials5 from "./components/Testimonials5"
import Testimonials6 from "./components/Testimonials6"
import Testimonials7 from "./components/Testimonials7"
import Testimonials8 from "./components/Testimonials8"

/* Michaels components */
import Navbar from "./michael/components/Navbar.js"
import Hero from "./michael/components/Hero.js"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      // color: "#004e95"
      color: "#efefef"
    }
  }
  render() {
    return (
      <AppView>
        
        <Navbar />

        <Hero />

        <ZillowListings />

        <div style={{ margin: "50px 0" }}>
          <Icons />
        </div>

        <AboutWrapper style={{ padding: "70px 0", backgroundColor: "#efefef" }}>
          <About6 />
        </AboutWrapper>

        {/* <Contact3 /> */}

        <Testimonials4 />

        <Footer>
          <Copyright>© COPYRIGHT 2018 JACOB WEST. ALL RIGHTS RESERVED.</Copyright>
        </Footer>
      </AppView>
    )
  }
}

const AboutWrapper = styled.div`
  // background: url(/assets/images/skyline.png) no-repeat;
  // background-size: 50%;
  // background-position: bottom right;
`
const Copyright = styled.p`
  margin: 0;
  color: white;
  font-size: 14px;
`
const Footer = styled.div`
  height: 70px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`
const AppView = styled.div`
  
`
export default App