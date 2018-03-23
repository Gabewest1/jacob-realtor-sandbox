import React from "react"
import styled from "styled-components"

import MLASearchForm from "../MLASearchForm"

export default class Header2 extends React.Component {
    render() {
        return (
            <Header>

                <HeroImage src="/assets/images/hero3.jpg" />

                <MLAFormWrapper>
                    <_MLASearchForm SearchForm />  
                    <HeroTitle>BROWSE HOMES</HeroTitle>
                </MLAFormWrapper>
                
            </Header>
        )
    }
}

const _MLASearchForm = styled(MLASearchForm)`
  width: 100%;
`

const HeroImage = styled.div`
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100vh;
  display: block;
  border: none;
`
const MLAFormWrapper = styled.div`
  top: 84%
  left: 50%;
  position: absolute;
  width: 90%; 
  max-width: 1024px;
  transform: translate(-50%, -50%);
`
const Header = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`