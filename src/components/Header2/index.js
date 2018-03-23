import React from "react"
import styled from "styled-components"

export default class Header2 extends React.Component {
    render() {
        return (
            <Header>

                <HeroImage src="/assets/images/hero3.jpg" />

                <TintedOverlay />

                <MLAFormWrapper>
                <_MLASearchForm SearchForm />  
                <HeroTitle>BROWSE HOMES</HeroTitle>
                </MLAFormWrapper>
                
            </Header>
        )
    }
}