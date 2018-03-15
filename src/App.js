import React, { Component } from 'react'
import styled from "styled-components"

import Navbar1 from "./components/Navbar1"
import MLASearchForm from "./components/MLASearchForm"
import MLASearchForm2 from "./components/MLASearchForm2"
import About1 from "./components/About1"
import About2 from "./components/About2"
import About3 from "./components/About3"
import About4 from "./components/About4"
import Icons from "./components/Icons"
import Testimonials1 from "./components/Testimonials1"
import Testimonials2 from "./components/Testimonials2"
import Testimonials3 from "./components/Testimonials3"
import Testimonials4 from "./components/Testimonials4"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  render() {
    return (
      <AppView>
        
        <Navbar1 />

        <Header>

          <HeroImage src="https://www.youtube.com/embed/EXEiVQ550I8?controls=0&amp;controls=0&amp;mute=1&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=EXEiVQ550I8" width="300" height="150" frameborder="0" allowfullscreen="allowfullscreen"></HeroImage>

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

        </Header>

        <Icons style={{ marginTop: "40px" }} />
        <Testimonials4 />

        <Footer>
          <Copyright>© COPYRIGHT 2018 JACOB WEST. ALL RIGHTS RESERVED.</Copyright>
        </Footer>
      </AppView>
    )
  }
}

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
  margin: 0 14px;
  cursor: pointer;
  transition: all .2s linear;

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
  width: 100%;
  height: 120vh;
  display: block;
  border: none;
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