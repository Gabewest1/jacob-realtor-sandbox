import React from "react"
import styled from "styled-components"

import { testimonials } from "../../constants"

class Testimonials2 extends React.Component {
    render() {
        return (
            <Container>

                <SatisfiedCustomers>Satisfied Customers</SatisfiedCustomers>

                <Testimonials>
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
                </Testimonials>
            </Container>
        )
    }
}

const SatisfiedCustomers = styled.h1`
    text-align: center;
    margin: 15px 0 10px 0;
    letter-spacing: 5px;
    font-weight: 100;
    // font-size: 58px;

    // font-family: 'Dancing Script', cursive;
    // font-family: 'Great Vibes', cursive;
    // font-family: 'Playball', cursive;
`
const Title = styled.h1`
    font-size: 14px;
`
const Quote = styled.blockquote`
    font-size: 14px;
    line-height: 24px;
    font-style: italic;
`
const Testimonial = styled.div`
    
`
const Testimonials = styled.div`
    > * {
        margin-bottom: 60px;
    }

    > *:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 820px) {
        display: flex;
        justify-content: space-around;
        > * {
            width: 30%;
        }
    }
`

const Container = styled.div`
    padding: 15px;
`

export default Testimonials2
