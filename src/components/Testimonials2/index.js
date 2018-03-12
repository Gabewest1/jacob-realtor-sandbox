import React from "react"
import styled from "styled-components"

class Testimonials2 extends React.Component {
    render() {
        return (
            <Container>
                <Testimonial>
                    <Image src="/assets/images/testimonial1.jpg" />
                    <Quote>
                        <Title>John & Karren Witherspoon</Title>
                        <Text>
                            "Jacob was nothing short of remarkable when helping me find my home in Austin. He was polite, respectful, and professional throughout the entire process. My favorite thing about Jacob was his communication skills, I don’t think I ever even heard his voicemail! He always answered the phone and   responded quickly to all texts and emails. He always made sure I had plenty of options and helped me find something that was just right for me. I would highly recommend Jacob to be your next realtor because he is patient and will help you find not just a house, but a home."
                        </Text>
                    </Quote>
                </Testimonial>

                <Testimonial>
                    <Image src="/assets/images/testimonial2.jpg" />
                    <Quote>
                        <Title>John & Karren Witherspoon</Title>
                        <Text>
                            "Could not have asked for a better home renting experience. Jacob helped us for weeks trying to find the perfect home for our needs. Never once impatient and always had the best attitude, he got us into our house in less than 2 days!!!! I never knew the renting could be so easy but with Jacob on   your side, the whole process is a breeze! Would definitely recommend anyone give him a call for their leasing or home buying needs!"
                        </Text>
                    </Quote>
                </Testimonial>

                <Testimonial>
                    <Image src="/assets/images/testimonial3.jpg" />
                    <Quote>
                        <Title>John & Karren Witherspoon</Title>
                        <Text>
                            "Jacob has been extremely helpful in helping me find a new home! As a young, first time owner it’s been difficult in figuring out where to live and something within my budget. He updated me on the market and as been nothing but a reliable agent. I’m excited to keep working with him and appreciate   his hard work along with his background knowledge."
                        </Text>                    
                    </Quote>
                </Testimonial>
            </Container>
        )
    }
}

const Text = styled.blockquote`
    font-size: 14px;
    line-height: 26px;
`
const Image = styled.div`
    width: 300px;
    width: 90%;
    min-height: 300px;
    background: url(${({ src }) => src}) no-repeat;
    background-size: cover;
    background-position: top center;
    margin: 0 auto;
    border-radius: 40px;

    @media (min-width: 768px) {
        width: 600px;
    }
`
const Title = styled.h2`
    font-weight: 100;
    font-style: italic;
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

export default Testimonials2
