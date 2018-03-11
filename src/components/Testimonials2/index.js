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
                            "Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan. Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa. Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non."
                        </Text>
                    </Quote>
                </Testimonial>

                <Testimonial>
                    <Image src="/assets/images/testimonial2.jpg" />
                    <Quote>
                        <Title>John & Karren Witherspoon</Title>
                        <Text>
                            "Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan. Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa. Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non."
                        </Text>
                    </Quote>
                </Testimonial>

                <Testimonial>
                    <Image src="/assets/images/testimonial3.jpg" />
                    <Quote>
                        <Title>John & Karren Witherspoon</Title>
                        <Text>
                            "Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan. Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa. Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non."
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
