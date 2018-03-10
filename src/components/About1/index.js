import React from "react"
import styled from "styled-components"

class About1 extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Box>
                        <Title>Lorem Title Ipsum</Title>

                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings
                            cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non.
                        </Description>
                    </Box>
                    <Box>
                        <Image src="/assets/images/lil_jacky.jpg" />
                    </Box>
                </Row>
                <Row>
                    <Box>
                        <Image src="/assets/images/lil_jacky.jpg" />
                    </Box>
                    <Box>
                        <Title>Lorem Title Ipsum</Title>

                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub. Blue bottle authentic aliqua portland. Coloring book qui crucifix tacos leggings
                            cardigan fashion axe tilde, ethical keffiyeh officia authentic YOLO seitan laborum. Cupidatat brooklyn letterpress non.
                        </Description>
                    </Box>
                </Row>
            </Container>
        )
    }
}

const Image = styled.img`
    width: 100%;
`
const Title = styled.h1`

` 
const Description = styled.p`

`
const Box = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Row = styled.div`
    display: flex;
    max-width: 968px;
    margin: 0 auto;
`
const Container = styled.div`
    
`

export default About1
