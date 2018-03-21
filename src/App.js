import React, { Component } from 'react'
import styled from "styled-components"

import Navbar1 from "./components/Navbar1"
import Navbar2 from "./components/Navbar2"
import MLASearchForm from "./components/MLASearchForm"
import MLASearchForm2 from "./components/MLASearchForm2"
import MLASearchForm3 from "./components/MLASearchForm3"
import About1 from "./components/About1"
import About2 from "./components/About2"
import About3 from "./components/About3"
import About4 from "./components/About4"
import About5 from "./components/About5"
import Contact from "./components/Contact"
import Contact2 from "./components/Contact2"
import Contact3 from "./components/Contact3"
import Listings from "./components/Listings"
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
        
        <Navbar1 />

        <Header>

          <HeroImage src="/assets/images/hero.jpg" />

          <TintedOverlay />

          <MLAFormWrapper>
            <HeroTitle>YOUR NEXT HOME  STARTS HERE</HeroTitle>
            <_MLASearchForm SearchForm />  
          </MLAFormWrapper>

          <Arrows color={ this.state.color } />
          
        </Header>

        <AboutWrapper style={{ padding: "60px 0", backgroundColor: "#efefef" }}>
          <About5 />
        </AboutWrapper>

        <Contact3 />

        <Testimonials6 />

        <Footer>
          <Copyright>© COPYRIGHT 2018 JACOB WEST. ALL RIGHTS RESERVED.</Copyright>
        </Footer>
      </AppView>
    )
  }
}

const AboutWrapper = styled.div`
  background: url(/assets/images/skyline.png) no-repeat;
  background-size: 50%;
  background-position: bottom right;
`
//Adds a transparent triangle between the Header and section below it.
const Arrows = styled.div`
    position: absolute;
    bottom: 0;
    height: 30px;
    width: 100%;

    &:after {
        content: '';
        border-bottom: solid 30px ${({ color }) => color};
        border-left: solid 30px transparent;
        width: 50%;
        position: absolute;
        top: 0;
        left: 50%;
    }

    &:before {
      content: '';
      border-bottom: solid 30px ${({ color }) => color};
      border-right: solid 30px transparent;
      width: 50%;
      position: absolute;
      top: 0;
      right: 50%;
  }
`
const HeroTitle = styled.h1`
  white-space: nowrap;
  margin: 0;
  margin-bottom: 10px;
  color: white;
`
const HeroDescription = styled.p`
  margin: 18px 0 27px 0;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
`
const HeroButton = styled.button`
  border: solid 2px white;
  border-radius: 5px;
  padding: 15px 30px;
  background: transparent;
  color: white;
  font-size: 20px;
  margin: 0 14px;
  cursor: pointer;
  transition: all .2s linear;
  min-width: 40%;

  &:hover {
    background: white;
    color: black;
  }
`
const HeroContent = styled.div`
  position: absolute;
  color: white;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`
const TintedOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.3);
  position: absolute;
  left: 0;
  top: 0;
`
const _MLASearchForm = styled(MLASearchForm)`
  width: 100%;
`

const HeroImage = styled.div`
  background: url(${({ src }) => src});
  background-size: 120%;
  width: 100%;
  height: 100vh;
  display: block;
  border: none;
`
const MLAFormWrapper = styled.div`
  top: 50%
  left: 50%;
  position: absolute;
  width: 90%; 
  transform: translate(-50%, -50%);
`
const Header = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
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