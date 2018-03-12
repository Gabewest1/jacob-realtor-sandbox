import React, { Component } from 'react'
import styled from "styled-components"

import Navbar1 from "./components/Navbar1"
import MLASearchForm from "./components/MLASearchForm"
import About1 from "./components/About1"
import About2 from "./components/About2"
import About3 from "./components/About3"
import About4 from "./components/About4"
import Testimonials1 from "./components/Testimonials1"
import Testimonials2 from "./components/Testimonials2"
import Testimonials3 from "./components/Testimonials3"
import Testimonials4 from "./components/Testimonials4"

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar1 />

        <Header>
          <HeroImage />

          <Wrapper>
            <HeroText>Find Your Next Home</HeroText>
            <_MLASearchForm />
          </Wrapper>
        </Header>

        <About4 />


        <Testimonials3 />
      </div>
    )
  }
}

const _MLASearchForm = styled(MLASearchForm)`
  width: 100%;
`
const HeroText = styled.h1`
  color: white;
  margin-bottom: 10px;
  font-weight: 100;
  font-family: open sans;
`
const HeroImage = styled.div`
  background: url(/assets/images/hero.jpg) no-repeat;
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  display: block;
  object-fit: cover;
  height: 100vh;
`
const Wrapper = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%; 
`
const Header = styled.div`
  position: relative;
`
export default App