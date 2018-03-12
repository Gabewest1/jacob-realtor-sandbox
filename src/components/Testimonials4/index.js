import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

import { testimonials } from "../../constants"

class Testimonials2 extends React.Component {
    render() {
        return (
            <_Carousel autoPlay infiniteLoop>
                <Testimonial>
                    <Quote>{ testimonials[0] }</Quote>
                    <Title>&mdash; John & Karren Witherspoon</Title>
                </Testimonial>

                <Testimonial>
                <Quote>{ testimonials[1] }</Quote>
                    <Title>&mdash; John & Karren Witherspoon</Title>
                </Testimonial>

                <Testimonial>
                <Quote>{ testimonials[2] }</Quote>
                    <Title>&mdash; John & Karren Witherspoon</Title>
                </Testimonial>
            </_Carousel>

        )
    }
}

const Title = styled.h1`
    font-size: 14px;
`
const Quote = styled.p`
    font-size: 14px;
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
        background: white !important;
    }
`

export default Testimonials2
