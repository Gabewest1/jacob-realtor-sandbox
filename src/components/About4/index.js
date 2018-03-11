import React from "react"
import styled from "styled-components"

class About4 extends React.Component {
    render() {
        return (
            <Container>
                <Title>Jacob West Realty in Austin TX</Title>
                <Description>
                    Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                    Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                    Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                    fam magna selfies aliqua asymmetrical sed gastropub.
                    Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                    fam magna selfies aliqua asymmetrical sed gastropub.
                    Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                    fam magna selfies aliqua asymmetrical sed gastropub.
                </Description>
                <Wrapper>
                    <Link href="">Learn More About My Team</Link>
                </Wrapper>
            </Container>
        )
    }
}

const Title = styled.h1`

`
const Container = styled.div`
    background: #d81d28;
    color: white;
    padding: 30px;
    box-sizing: border-box;
    clear: both;
`

const Description = styled.p`
    font-size: 14px;
    line-height: 20px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Link = styled.a`
    display: block;
    color: white;
    border: solid 2px white;
    border-radius: 30px;
    padding: 10px 15px;
    text-decoration: none;
    transition: all .2s linear;
    &:hover {
        background: white;
        color: #d81d28;
        border-color: #d81d28;
    }
`

export default About4
