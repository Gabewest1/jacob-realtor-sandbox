import React from "react"
import styled from "styled-components"

import { testimonials } from "../../constants"

class Testimonials1 extends React.Component {
    render() {
        return (
            <Container>
                <Testimonial>
                    <Image src="/assets/images/testimonial1.jpg" />
                    <Quote>
                        <Text style={{ fontSize: "14px" }}>{ testimonials[0] }</Text>
                        <Title>&mdash; John & Karren Witherspoon</Title>
                    </Quote>
                </Testimonial>

                <Testimonial>
                    <Quote>
                        <Text style={{ fontSize: "14px" }}>{ testimonials[1] }</Text>
                        <Title>&mdash; John & Karren Witherspoon</Title>
                    </Quote>
                    <Image src="/assets/images/testimonial2.jpg" />
                </Testimonial>

                <Testimonial>
                    <Image src="/assets/images/testimonial3.jpg" />
                    <Quote>
                        <Text style={{ fontSize: "14px" }}>{ testimonials[2] }</Text>                
                        <Title>&mdash; John & Karren Witherspoon</Title>
                    </Quote>
                </Testimonial>
            </Container>
        )
    }
}

const Text = styled.blockquote`
    line-height: 30px;
`
const Image = styled.div`
    border-radius: 40px;
    width: 300px;
    width: 90%;
    min-height: 400px;
    background: url(${({ src }) => src}) no-repeat;
    background-size: cover;
    background-position: top center;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 530px;
    }
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
    float: right;
` 
const Quote = styled.div`
    padding: 0 15px;
    @media (min-width: 768px) {
        width: 50%;
    }
`
const Testimonial = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const Container = styled.div`
    margin-top: 50px;
    padding: 15px;

    > * {
        margin-bottom: 60px;
    }

    > *:last-child {
        margin-bottom: 0;
    }
`

export default Testimonials1
