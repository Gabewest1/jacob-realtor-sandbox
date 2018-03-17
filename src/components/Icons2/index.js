import React from "react"
import styled from "styled-components"

export default class Icons extends React.Component {
    render() {
        const color = "rgba(0 , 78, 129, .7)"

        return (
            <IconsView { ...this.props }>
                <Wrapper src="https://d3sw26zf198lpl.cloudfront.net/2017/10/03/59d395b7ca196.jpg">
                    <TintedOverlay color={ color } />
                    <Image src="https://d3sw26zf198lpl.cloudfront.net/2017/10/03/59d395bd55558.png" />
                    <Title>Find Your Dream Home</Title>
                    <Description>
                        GET STARTED
                    </Description>
                </Wrapper>

                <Wrapper src="https://d3sw26zf198lpl.cloudfront.net/2017/10/03/59d395b8a11d4.jpg">
                    <TintedOverlay color={ color } />
                    <Image src="https://d3sw26zf198lpl.cloudfront.net/2017/10/03/59d395be65148.png" />
                    <Title>List Your Home</Title>
                    <Description>
                        GET STARTED
                    </Description>
                </Wrapper>

                <Wrapper src="https://d3sw26zf198lpl.cloudfront.net/2017/10/03/59d395b9a886f.jpg">
                    <TintedOverlay color={ color } />
                    <Image 
                        src="https://d3sw26zf198lpl.cloudfront.net/2017/10/03/59d395c0f216a.png"
                        style={{ maxWidth: 60 }} />
                    <Title>Buy Your Home</Title>
                    <Description>
                        GET STARTED
                    </Description>
                </Wrapper>
            </IconsView>
        )
    }
}

const Image = styled.img`
    cursor: pointer;
    width: 100%;
    max-width: 75px;
`
const Title = styled.h1`
    margin: 10px 0 3px 0;
    font-weight: 100;
    font-size: 26px;
    cursor: pointer;
`
const Description = styled.p`
    margin: 0;
`
const TintedOverlay = styled.div`
    height: 10%;
    width: 100%;
    background: ${({ color }) => color };
    transition: all .4s ease-in-out;
    position: absolute !important;
    bottom: 0;
    z-index: 0;
`
const Wrapper = styled.div`
    background: url(${({ src }) => src}) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 250px;
    width: 250px;
    cursor: pointer;
    position: relative;

    &:hover ${ TintedOverlay } {
        height: 100%;
    }

    > * {
        position: relative;
    }
`
const IconsView = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    text-transform: uppercase;

    @media (min-width: 480px) {
        flex-direction: row;
        justify-content: space-between;

        > * {
            flex-basis: 33%;
        }
    }
`