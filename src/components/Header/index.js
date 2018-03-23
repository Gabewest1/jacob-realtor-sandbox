import React from "react"
import styled from "styled-components"

import MLASearchForm4 from "../MLASearchForm4"

export default class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            activeListItem: 0
        }
    }
    render() {
        const { activeListItem } = this.state

        return (
            <HeaderView>

                <HeroImage src="/assets/images/hero2.jpg" />

                <TintedOverlay />

                <Content>
                    <HeroTitle>Sell for more, Buy for less</HeroTitle>
                    <List>
                        <ListItem active={ activeListItem === 0 }>
                            <a onClick={ this._setActiveListItem.bind(this, 0) }>
                                Find a Home
                            </a>
                        </ListItem>
                        <ListItem active={ activeListItem === 1 }>
                            <a onClick={ this._setActiveListItem.bind(this, 1) }>
                                Sell My Home
                            </a>
                        </ListItem>
                        <ListItem active={ activeListItem === 2 }>
                            <a onClick={ this._setActiveListItem.bind(this, 2) }>
                                See Home Estimate
                            </a>
                        </ListItem>
                    </List>
                    <FindHomeSection active={ activeListItem === 0 } />
                    <SellHomeSection active={ activeListItem === 1 } />
                    <EstimateHomeSection active={ activeListItem === 2 } />
                </Content>

            </HeaderView>
        )
    }
    _setActiveListItem = item => {
        this.setState({ activeListItem: item })
    }
}

const HeroImage = styled.div`
  background: url(${({ src }) => src}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: block;
  border: none;
`
const Content = styled.div`
    position: absolute;
    top: 30%;
    left: 10%;
    width: 500px;
`
const HeroTitle = styled.h1`
  white-space: nowrap;
  margin: 0 auto;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  font-size: 50px;
`
const HeaderView = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: white;
`
const TintedOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0,0,0,.8), transparent);
  position: absolute;
  left: 0;
  top: 0;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 20px;
`
const ListItem = styled.li`
    cursor: pointer;
    margin: 0;
    color: white;
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: solid 4px white;
    border-color: ${({ active }) => active ? "white" : "transparent"};
    transition: border-color .2s linear;
`
const Description = styled.div`
    position: absolute;
    opacity: ${({ active }) => active ? 1 : 0};
    transition: opacity .2s linear;    
`
const Form = styled.form`
    display: flex;
    align-items: center;
    height: 44px;
`
const Input = styled.input`
    flex-grow: 1;
    width: 100%;
    height: 100%
    box-sizing: border-box;
    padding-left: 10px;
`
const SearchButton = styled.div`
    max-height: 100%;
    width: 51px
    padding: 12px;
    box-sizing: border-box;
    fill: white;
    background: #313131;
    cursor: pointer;

    > * {
        max-width: 100%;
    }
    &:hover {
        background-color: #151515;
    }
`
const Button = styled.div`
    cursor: pointer;
    border-radius: 7px;
    background: #313131;
    padding: 10px 15px;
    border: solid thin white;

    &:hover {
        background-color: #151515;
    }
`
const SearchIcon = () => (
    <svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M23.884 21.763l-7.554-7.554a8.976 8.976 0 0 0 1.526-6.835C17.203 3.68 14.204.72 10.502.122a9.01 9.01 0 0 0-10.38 10.38c.598 3.702 3.558 6.7 7.252 7.354a8.976 8.976 0 0 0 6.835-1.526l7.554 7.554a.25.25 0 0 0 .353 0l1.768-1.768a.25.25 0 0 0 0-.353zM2 9c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"></path></g></svg>
)

const FindHomeSection = (props) => (
    <Description { ...props }>
        <Form>
            <Input placeholder="City,Address,School,Agent,ZIP" />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </Form>
        <p style={{ marginBottom: 5, marginTop: 22 }}>
            <b>Finding your home is my passion</b>
        </p>
        <p style={{ marginTop: 5 }}>
            I'm determined to find you the home of your dreams. Living in 
            Central Texas all my life makes me the most qualified to do so 
        </p>
        <Button style={{ float: "right"}}>Advanced Search</Button>        
    </Description>
)
const SellHomeSection = (props) => (
    <Description { ...props }>
        <Form>
            <Input placeholder="Enter you street address" />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </Form>
        <p style={{ marginBottom: 5, marginTop: 22 }}>
            <b>Maximizing profits, Minimizing headachs</b>
        </p>
        <p style={{ marginTop: 5 }}>
            Living in Central Texas all my life makes me the most
            qualified to do so. I'm determined to find you the home of your dreams 
        </p>
    </Description>
)
const EstimateHomeSection = (props) => (
    <Description { ...props }>
        <Form>
            <Input placeholder="Enter your street address" />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </Form>
        <p style={{ marginBottom: 5, marginTop: 22 }}><b>Get an instant, online home-value estimate</b></p>
        <p style={{ marginTop: 5 }}>
            We use data on recently sold homes in your area
            to calculate your property's current market value.
        </p>
    </Description>
)
