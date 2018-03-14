import React, { Component } from 'react'
import styled from "styled-components"

import Navbar1 from "./components/Navbar1"
import MLASearchForm from "./components/MLASearchForm"
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
      <div className="App">
        <Navbar1 />

        <Header>
          <HeroImage src="https://www.youtube.com/embed/EXEiVQ550I8?controls=0&amp;controls=0&amp;mute=1&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=EXEiVQ550I8" width="300" height="150" frameborder="0" allowfullscreen="allowfullscreen"></HeroImage>
          <TintedOverlay />

          <HeroContent>
            <HeroTitle>YOUR NEXT HOME VENTURE STARTS HERE</HeroTitle>
            <HeroDescription>I Make It Simple</HeroDescription>
            <HeroButton>Buyers Process</HeroButton>
            <HeroButton>Sellers Process</HeroButton>
          </HeroContent>
        </Header>

        <Wrapper>
          <MLAText>Find Your Next Home</MLAText>
          <_MLASearchForm />
        </Wrapper>

        <div style={{ padding: "60px 0" }}>
          <Icons />
        </div>

        <About1 />

        <Testimonials4 />

        <Footer>
          <Copyright>© COPYRIGHT 2018 JACOB WEST. ALL RIGHTS RESERVED.</Copyright>
        </Footer>
      </div>
    )
  }
}

const HeroTitle = styled.h1`

`
const HeroDescription = styled.p`

`
const HeroButton = styled.button`
  border: solid 2px white;
  border-radius: 5px;
  padding: 15px 30px;
  background: transparent;
`
const HeroContent = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;

  ${ HeroButton }:first-of-type {
    float: left;
  }

  ${ HeroButton }:last-of-type {
    float: right;
  }
`
const TintedOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.7);
  position: absolute;
  left: 0;
  top: 0;
`
const _MLASearchForm = styled(MLASearchForm)`
  width: 100%;
`
const MLAText = styled.h1`
  color: white;
  text-shadow: 2px 2px black;
  margin-bottom: 10px;
  margin-top: 0;
  font-weight: 100;
  font-family: open sans;
  font-size: 36px;
`
const HeroImage = styled.iframe`
  width: 300%;
  height: 100vh;
  position: relative;
  left: -100%;
  display: block;
  border: none;
`
const Wrapper = styled.div`
  width: 100%; 
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d81d28;
`
const Header = styled.div`
  position: relative;
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
export default App