import React, { Component } from 'react'
import styled from "styled-components"

import Navbar1 from "./components/Navbar1"
import Navbar2 from "./components/Navbar2"
import MLASearchForm from "./components/MLASearchForm"
import MLASearchForm2 from "./components/MLASearchForm2"
import About1 from "./components/About1"
import About2 from "./components/About2"
import About3 from "./components/About3"
import About4 from "./components/About4"
import About5 from "./components/About5"
import Contact from "./components/Contact"
import Listings from "./components/Listings"
import Locations from "./components/Locations"
import Icons from "./components/Icons"
import Icons2 from "./components/Icons2"
import Testimonials1 from "./components/Testimonials1"
import Testimonials2 from "./components/Testimonials2"
import Testimonials3 from "./components/Testimonials3"
import Testimonials4 from "./components/Testimonials4"
import Testimonials5 from "./components/Testimonials5"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      // color: "#004e95"
      color: "white"
    }
  }
  render() {
    return (
      <AppView>
        
        <Navbar2 />

        <Header>

          <HeroImage src="https://player.vimeo.com/video/169572557?background=1&portrait=0&byline=0&title=0&badge=0&loop=1&autopause=1&api=1&rel=0&player_id=player_2_1081388825_836852567&color=a81010" width="300" height="150" frameborder="0" allowfullscreen="allowfullscreen"></HeroImage>

          <TintedOverlay />

          <HeroContent>
            <HeroTitle>YOUR NEXT HOME VENTURE STARTS HERE</HeroTitle>
            <HeroDescription>My Process Makes It Simple</HeroDescription>
            <HeroButton>Buyers Process</HeroButton>
            <HeroButton>Sellers Process</HeroButton>
          </HeroContent>

          <MLAFormWrapper>
            <_MLASearchForm SearchForm />  
          </MLAFormWrapper>

          <Arrows color={ this.state.color } />
          
        </Header>

        <Locations color={ this.state.color } />

        <Icons2 color={ this.state.color } />

        <div style={{ padding: "60px 0" }}>
          <About5 />
        </div>

        <Contact />

        <Listings />

        <Testimonials5 />

        <Footer>
          <Copyright>© COPYRIGHT 2018 JACOB WEST. ALL RIGHTS RESERVED.</Copyright>
        </Footer>
      </AppView>
    )
  }
}

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
  font-family: 'Oswald', sans-serif;  
  font-size: 50px;
  font-weight: 100;
  letter-spacing: 2px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`
const TintedOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.6);
  position: absolute;
  left: 0;
  top: 0;
`
const _MLASearchForm = styled(MLASearchForm2)`
  width: 100%;
  color: white !important;

  & * {
    background: transparent;
  }
`

const HeroImage = styled.iframe`
  width: 300%;
  height: 120vh;
  display: block;
  border: none;
  position: relative;
  left: -100%;
`
const MLAFormWrapper = styled.div`
  bottom: 10%
  left: 50%;
  position: absolute;
  width: 90%; 
  transform: translateX(-50%);
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