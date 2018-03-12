import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

class Testimonials2 extends React.Component {
    render() {
        return (
            <_Carousel autoPlay infiniteLoop>
                <Testimonial>
                    <Quote>
                        "Jacob was nothing short of remarkable when helping me find my home in Austin. He was polite, respectful, and professional throughout the entire process. My favorite thing about Jacob was his communication skills, I don’t think I ever even heard his voicemail! He always answered the phone and   responded quickly to all texts and emails. He always made sure I had plenty of options and helped me find something that was just right for me. I would highly recommend Jacob to be your next realtor because he is patient and will help you find not just a house, but a home."
                    </Quote>
                    <Title>&mdash; John & Karren Witherspoon</Title>
                </Testimonial>

                <Testimonial>
                    <Quote>
                        "Could not have asked for a better home renting experience. Jacob helped us for weeks trying to find the perfect home for our needs. Never once impatient and always had the best attitude, he got us into our house in less than 2 days!!!! I never knew the renting could be so easy but with Jacob on   your side, the whole process is a breeze! Would definitely recommend anyone give him a call for their leasing or home buying needs!"
                    </Quote>
                    <Title>&mdash; John & Karren Witherspoon</Title>
                </Testimonial>

                <Testimonial>
                    <Quote>
                        "Jacob has been extremely helpful in helping me find a new home! As a young, first time owner it’s been difficult in figuring out where to live and something within my budget. He updated me on the market and as been nothing but a reliable agent. I’m excited to keep working with him and appreciate   his hard work along with his background knowledge."
                    </Quote>
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
    background: white;
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
`

export default Testimonials2
