import React from "react"
import styled from "styled-components"

export default class About5 extends React.Component {
    render() {
        return (
            <About5View>
                <Border>
                    <Image src="/assets/images/lil_jacky_half.png" />
                </Border>
                <Content>
                    <Title>Hello, I'm Jacob West</Title>
                    <Description>
                        Lorem, ipsum dolor sit amet
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur, nostrum explicabo praesentium doloribus harum veniam vel dicta, quod labore suscipit deleniti. Omnis soluta quis ipsum natus iusto vel labore!
                         consectetur adipisicing elit. Dolores consequuntur, nostrum explicabo praesentium doloribus harum veniam vel dicta, quod labore suscipit deleniti. Omnis soluta quis ipsum natus iusto vel labore!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur, nostrum explicabo praesentium doloribus harum veniam vel dicta, quod labore suscipit deleniti. Omnis soluta quis ipsum natus iusto vel labore!
                    </Description>
                    <ReadMore><a href="#">Click here</a> to learn more about me!</ReadMore>
                </Content>
            </About5View>
        )
    }
}

const About5View = styled.div`
    display: flex;
`
const Image = styled.img`
    width: 200px;
    display: block;
`
const Title = styled.h1`
    margin-top: 0;
    font-weight: 100;
`
const Description = styled.div`
    max-width: 860px;
`
const Border = styled.div`
    border-right: solid 5px #5a5959;
    padding: 0 15px;
    margin-right: 15px;
`
const ReadMore = styled.div`
    margin-top: 15px;
    position: absolute;
    bottom: 0;

    a {
        color: #004e95;
    }
`
const Content = styled.div`
    position: relative;
`
