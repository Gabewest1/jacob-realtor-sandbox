import React from "react"
import styled from "styled-components"

class About2 extends React.Component {
    render() {
        return (
            <Container>
                <Title>Jacob West</Title>
                <Description>
                    Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                    Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                    Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                    fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings
                    cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non.
               </Description>
            </Container>
        )
    }
}

const Image = styled.img`

`
const Title = styled.h1`
    text-align: center;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        height: 1px;
        width: 40%;
        transform: translateX(-50%);
        background: black;
    }
`
const Description = styled.p`
    text-align: center;
    position: relative;
    max-width: 80%;
    margin: 0 auto;

    &:after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 50%;
        height: 1px;
        width: 67%;
        transform: translateX(-50%);
        background: black;
    }
`
const Link = styled.a`

`
const Container = styled.div`

`
export default About2
