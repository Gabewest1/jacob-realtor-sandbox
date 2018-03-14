import React from "react"
import styled from "styled-components"

class About1 extends React.Component {
    render() {
        const padding = "38px"

        return (
            <Container>
                <Row>
                    <Box style={{ padding, boxSizing: "border-box", width: "106%", background: "#004e95" }}>
                        <Title>Jacob West Realty in Austin Tx</Title>

                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings
                            cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non.
                        </Description>
                        <Wrapper>
                            <Link hoverColor="#004e95">Learn More About My Team</Link>
                        </Wrapper>
                    </Box>
                    <Box>
                        <Image src="/assets/images/lil_jacky_half.png" />
                    </Box>
                </Row>
                <Row>
                    <Box>
                        <Image src="/assets/images/home2.jpg" />
                    </Box>
                    <Box style={{ padding, boxSizing: "border-box" }}>
                        <Title>I'm Committed to YOU!</Title>

                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings
                            cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non.
                        </Description>
                        <Wrapper>
                            <Link hoverColor="#d81d28">Work With Me</Link>
                        </Wrapper>
                    </Box>
                </Row>
            </Container>
        )
    }
}

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
`
const Title = styled.h1`
    margin: 0;
    font-weight: 500;
` 
const Description = styled.p`
    font-size: 14px;
    line-height: 24px;
    margin: 24px 0;
`
const Box = styled.div`
    width: 50%;
`
const Row = styled.div`
    display: flex;
`
const Link = styled.a`
    display: block;
    border-radius: 30px;
    padding: 10px 15px;
    text-decoration: none;
    transition: all .2s linear;
    margin-top: 15px;
    min-width: 177px;
    text-align: center;
    cursor: pointer;
    background: white;
    color: ${({ hoverColor }) => hoverColor};
    border: solid 2px transparent;
    font-weight: bold;
    
    &:hover {
        color: white;
        background: transparent;
        border: solid 2px white;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Container = styled.div`
    background: #d81d28;
    color: white; 
`

export default About1
