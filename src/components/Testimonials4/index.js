import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

class Testimonials2 extends React.Component {
    render() {
        return (
            <_Carousel autoPlay infiniteLoop>
                <Testimonial>
                    <Quote>
                        "Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan. Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa. Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non."
                    </Quote>
                    <Title>&mdash; John & Karren Witherspoon</Title>
                </Testimonial>

                <Testimonial>
                    <Quote>
                        "Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan. Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa. Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non."
                    </Quote>
                    <Title>&mdash; John & Karren Witherspoon</Title>
                </Testimonial>

                <Testimonial>
                    <Quote>
                        "Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan. Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa. Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non."                    
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
