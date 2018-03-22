import React from "react"
import styled from "styled-components"

import RemaxLogo from "../RemaxLogo"

class Navbar1 extends React.Component {
    render() {
        return (
            <Navbar>
                <Background color="white">
                    <Top>
                        <div>
                            <RemaxLogo />
                        </div>
                        <ContactInfo>
                            <Button style={{ position: "relative", left: -15 }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Icon src="/assets/images/phone-icon.svg" />
                                </div>
                                <Number>512-669-9592</Number>
                            </Button>
                            <Button>
                                <div style={{ display: "flex", alignItems: "center", marginRight: 4 }}>
                                    <Icon src="/assets/images/email-icon.svg" />
                                </div>
                                <Email>jacob.west@yahoo.com</Email>
                            </Button>
                        </ContactInfo>
                    </Top>
                </Background>
                <Background color="#da202c">
                    <Bottom>
                        <List>
                            <ListItem>
                                Property Search
                            </ListItem>
                            <ListItem>
                                Buyers
                            </ListItem>
                            <ListItem>
                                Sellers
                            </ListItem>
                            <ListItem>
                                About
                            </ListItem>
                            <ListItem>
                                Contact
                            </ListItem>
                        </List>
                    </Bottom>
                </Background>
            </Navbar>
        )
    }
}

const Background = styled.div`
    background: ${({ color }) => color};
    padding: 0 15px;
`
const Icon = styled.img`
    max-width: 20px;
    width: 100%;
    margin-right: 5px;
`
const ContactInfo = styled.div`
    display: flex;
    align-items: center;    
`
const Number = styled.span`
    margin-right: 15px;
`
const Email = styled.span``
const Button = styled.div`
    display: flex;
    align-items: center;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
const Bottom = styled.div`
    padding: 15px 0;
    color: white;
`
const Navbar = styled.nav`
    background: white;
    position: fixed;
    top: 0;
    z-index:1;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    padding-bottom: 0;
    transition: background .3s ease-in-out;
    
    ${ Top }, ${ Bottom } {
        max-width: 1024px;
        margin: 0 auto;
    
        li, span, ${ Button }, img {
            cursor: pointer;
        }
    }
`
const ListItem = styled.li`
    text-align: center;

    &:hover {
        color: #014d9a;
    }
`
const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    > * {
        margin-right: 40px;
    }

    > *:last-child {
        margin-right: 0;
    }

    @media (max-width: 767px) {
        display: none;
    }
`

export default Navbar1
