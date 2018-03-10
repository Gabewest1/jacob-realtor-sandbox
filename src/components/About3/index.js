import React from "react"
import styled from "styled-components"

class About2 extends React.Component {
    render() {
        return (
            <Container>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Wrapper>
                        <Title>Ready for the Next Step?</Title>
                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub.
                        </Description>

                        <Description>
                            Lorem ipsum dolor amet polaroid vice eiusmod iceland snackwave, 8-bit migas yuccie proident small batch seitan.
                            Shoreditch hoodie cloud bread master cleanse ipsum consequat williamsburg pabst butcher vaporware quinoa.
                            Crucifix banjo health goth voluptate pok pok salvia XOXO. Coloring book tacos incididunt, migas palo santo actually poutine mlkshk
                            fam magna selfies aliqua asymmetrical sed gastropub.
                        </Description>
                    </Wrapper>
                    <Image src="/assets/images/lil_jacky.jpg" />
                </div>

                <Button>Learn More About My Team</Button>
            </Container>
        )
    }
}

const Image = styled.img`
    max-height: 100%;
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
    margin: 0 auto 20px auto;
    line-height: 24px;
`
const Link = styled.a`

`
const Wrapper = styled.div`
    width: 50%;
    margin-right: 30px;
`
const Button = styled.button`
    width: 100%;
    padding: 20px 13px;
    background: #004d9e;
    border: none;
    transition: background .2s linear;
    color: white;
    margin-top: 15px;

    &:hover {
        background: #dc1c2c;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    max-width: 968px;
    margin: 0 auto;

    // @media (min-width: 768px) {
    //     flex-direction: row;
    // }
`
export default About2
