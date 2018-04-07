import React from "react"
import styled from "styled-components"

export default class About5 extends React.Component {
    render() {
        return (
            <About5View>

                <Title>Meet Jacob West</Title>
                <Bar>
                    <BallWrapper>
                        <Ball />
                    </BallWrapper>
                </Bar>
                
                <Image src="/assets/images/lil_jacky_half.png" />

                <div>
                    <div style={{ height: 90, float: "right" }} />
                    <Testimonails>
                        <span>"</span>jacob was nothing short of remarkable when helping me find my home in Austin. He was polite, respectful, and professional throughout the entire process. My favorite thing about Jacob was his communication skills, I don’t think I ever even heard his voicemail! He always answered the phone and responded quickly to all texts and emails. He always made sure I had plenty of options and helped me find something that was just right for me. I would highly recommend Jacob to be your next realtor because he is patient and will help you find not just a house, but a home.<span>"</span>
                            <br />
                            <h1 style={{ marginBottom: 0, position: "relative", left: 170, fontSize: 16, fontStyle: "initial" }}>&mdash; John & Karren Witherspoon</h1>
                    </Testimonails>
                    <div>
                        <Description>
                            Lorem, ipsum dolor sit amet
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur, nostrum explicabo praesentium doloribus harum veniam vel dicta, quod labore suscipit deleniti. Omnis soluta quis ipsum natus iusto vel labore!
                            consectetur adipisicing elit. Dolores consequuntur, nostrum explicabo praesentium doloribus harum veniam vel dicta, quod labore suscipit deleniti. Omnis soluta quis ipsum natus iusto vel labore!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur, nostrum explicabo praesentium doloribus harum veniam vel dicta, quod labore suscipit deleniti. Omnis soluta quis ipsum natus iusto vel labore!

                        </Description>
                        <ReadMore><a href="#">Click here</a> to learn more about me!</ReadMore>
                    </div>
                </div>
            </About5View>
        )
    }
}

const About5View = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BallWrapper = styled.div`
    position: absolute;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #efefef;
    border-radius: 50%;
`
const Ball = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: black;
`
const Bar = styled.div`
    position: relative;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;

    &:before {
        content: "";
        position: absolute;
        border: solid 1px black;
        width: 70vw;
        max-width: 656px;
        top: 50%;
        transform: translateY(-50%);
    }
    
`
const Image = styled.img`
    width: 200px;
    display: block;
`
const Title = styled.h1`
    margin: 0;
    text-transform: uppercase;
    font-size: 44px;
    font-family: avertacyLight;
`
const Description = styled.div`
    max-width: 768px;
    margin-top: 30px;
`
const Border = styled.div`
    border-right: solid 5px #5a5959;
    padding: 0 15px;
    margin-right: 15px;
`
const ReadMore = styled.div`
    margin-top: 15px;

    a {
        color: #004e95;
    }
`
const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Testimonails = styled.div`
    width: 400px;
    float: right;
    clear: right;
    background: #333;
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
    color: white;
    font-style: italic;
    font-size: 13px;

    span {
        font-family: helveticaneue;
    }
`
