import React from "react"
import styled from "styled-components"

export default class Icons extends React.Component {
    render() {
        return (
            <IconsView>
                <Wrapper>
                    <Image src="/assets/images/search-icon.svg" />
                    <Title>Find Your Dream Home</Title>
                    <Description>
                        Ready to buy your dream home?  I will analyze the data you provide and get back to you with a range of properties matching your search criteria.
                    </Description>
                </Wrapper>

                <Wrapper>
                    <Image src="/assets/images/money-icon.svg" />
                    <Title>Your Home's Value</Title>
                    <Description>
                        I will provide you with comparable sale information for your neighborhood and a range of approximate values for your home.
                    </Description>
                </Wrapper>

                <Wrapper>
                    <Image src="/assets/images/pencil-icon.svg" />
                    <Title>List Your Home</Title>
                    <Description>
                        Ready to sell?  If you are interested in listing your property for sale, complete some preliminary information to get the process started.
                    </Description>
                </Wrapper>
            </IconsView>
        )
    }
}

const Image = styled.img`
    cursor: pointer;
    width: 100%;
    max-width: 110px;
`
const Title = styled.h1`
    margin: 5px;
    font-weight: 100;
    color: #004e95;
    cursor: pointer;
`
const Description = styled.p`
    margin: 0;
`
const Wrapper = styled.div`
    text-align: center;
`
const IconsView = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 480px) {
        flex-direction: row;
        justify-content: space-around;

        > * {
            flex-basis: 30%;
        }
    }
`