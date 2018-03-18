import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

import { testimonials } from "../../constants"

class Testimonials2 extends React.Component {
    render() {
        const testimonialsWithoutQuotation = testimonials.map(testimonial => testimonial.substring(1, testimonial.length-1))

        return (
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

        )
    }
}

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
    margin: 36px 0 25px 0;
`
const Testimonial = styled.div`
    padding: 70px;
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

    .control-dots .dot {
        background: black !important;
    }
`

export default Testimonials2
