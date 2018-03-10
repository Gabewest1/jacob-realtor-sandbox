import React, { Component } from 'react'
import styled from "styled-components"

import Navbar1 from "./components/Navbar1"
import MLASearchForm from "./components/MLASearchForm"
import About1 from "./components/About1"
import About2 from "./components/About2"
import About3 from "./components/About3"
import Testimonials1 from "./components/Testimonials1"
import Testimonials2 from "./components/Testimonials2"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar1 />
        <Header>
          <HeroImage src="/assets/images/hero.jpg" />
          <_MLASearchForm />
        </Header>
        <About3 />
        <Testimonials1 />
      </div>
    )
  }
}

const _MLASearchForm = styled(MLASearchForm)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`
const HeroImage = styled.img`
  width: 100%;
`
const Header = styled.div`
  position: relative;
`
export default App
