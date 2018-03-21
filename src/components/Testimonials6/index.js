import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

import { testimonials } from "../../constants"

class Testimonials2 extends React.Component {
    render() {
        const testimonialsWithoutQuotation = testimonials.map(testimonial => testimonial.substring(1, testimonial.length-1))

        return (
            <div>
                <HorizontalBar>
                    <Header>
                        Testimonials
                    </Header>
                </HorizontalBar>
                <_Carousel autoPlay infiniteLoop showStatus={ false }>
                    <Testimonial>
                        <div>
                            <DoubleQuoteIcon src="/assets/images/quote-icon.svg" />
                            <Quote>{ testimonials[0] }</Quote>
                        </div>
                        <Title>&mdash; John & Karren Witherspoon</Title>
                    </Testimonial>

                    <Testimonial>
                        <div>
                            <DoubleQuoteIcon src="/assets/images/quote-icon.svg" />
                            <Quote>{ testimonials[1] }</Quote>
                        </div>
                        <Title>&mdash; John & Karren Witherspoon</Title>
                    </Testimonial>

                    <Testimonial>
                        <div>
                            <DoubleQuoteIcon src="/assets/images/quote-icon.svg" />
                            <Quote>{ testimonials[2] }</Quote>
                        </div>
                        <Title>&mdash; John & Karren Witherspoon</Title>
                    </Testimonial>
                </_Carousel>
            </div>

        )
    }
}

const Header = styled.h1`
    position: relative;
    z-index: 1;
    background: white;
    padding: 0 20px;
    display: inline-block;
    font-size: 40px;
    text-transform: uppercase;
    font-family: HelveticaNeueThin;
`
const HorizontalBar = styled.div`
    position: relative;
    text-align: center;
    margin-top: 20px;

    &:after {
        content: "";
        background: #5a5959;
        display: block;
        position: absolute;
        height: 1px;
        width: 80%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`
const DoubleQuoteIcon = styled.img`
    max-width: 55px !important;
    max-height: 55px !important;
    margin-right: 15px;
    border-radius: 50%;
    border: solid thin black !important;
    padding: 15px;
`
const Title = styled.h1`
    font-size: 14px;
`
const Quote = styled.p`
    font-size: 14px;
    font-style: italic;
    margin: 25px 0 25px 0;
`
const Testimonial = styled.div`
    padding: 70px;
    padding-top: 0px;
    color: black;
`
const _Carousel = styled(Carousel)`
    .carousel .control-next.control-arrow:before {
        border-left-color: black !important;
    }
    
    .carousel .control-prev.control-arrow:before {
        border-right-color: black !important;
    }
    
    .slide {
        background: transparent !important;
    }

    .control-dots {
        padding: 0;
        
        .dot {
            background: black !important;
        }
    }
`

export default Testimonials2
