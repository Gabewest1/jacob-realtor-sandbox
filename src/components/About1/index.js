import React from "react"
import styled from "styled-components"

class About1 extends React.Component {
    render() {
        const padding = "0 20px 20px 20px"

        return (
            <Container>
                <Row>
                    <Box style={{ padding, boxSizing: "border-box" }}>
                        <Title>Lorem Title Ipsum</Title>

                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings
                            cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non.
                        </Description>
                        <Wrapper>
                            <Link>Learn More</Link>
                        </Wrapper>
                    </Box>
                    <Box>
                        <Image src="/assets/images/home1.jpg" />
                    </Box>
                </Row>
                <Row>
                    <Box>
                        <Image src="/assets/images/home2.jpg" />
                    </Box>
                    <Box style={{ padding, boxSizing: "border-box" }}>
                        <Title>Lorem Title Ipsum</Title>

                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings
                            cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non.
                        </Description>
                        <Wrapper>
                            <Link>Learn More</Link>
                        </Wrapper>
                    </Box>
                </Row>
            </Container>
        )
    }
}

const Image = styled.img`
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    margin: 0;
    font-weight: 500;
    margin-bottom: 10px;
` 
const Description = styled.p`
    font-size: 14px;
    line-height: 24px;
    margin: 0;
`
const Box = styled.div`
    width: 50%;
`
const Row = styled.div`
    display: flex;
    max-width: 968px;
    margin: 0 auto;
`
const Link = styled.a`
    display: inline-block;
    color: black;
    border: solid 2px black;
    border-radius: 30px;
    padding: 8px 35px;
    text-decoration: none;
    transition: all .2s linear;
    cursor: pointer;
    margin-top: 15px;
    
    &:hover {
        background: white;
        color: black;
        border-color: black;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Container = styled.div`
    background: #efefef;
    padding: 30px 0;   
`

export default About1
