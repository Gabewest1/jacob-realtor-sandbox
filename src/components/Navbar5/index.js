import React from "react"
import styled from "styled-components"

import RemaxLogo2 from "../RemaxLogo2"

class Navbar1 extends React.Component {
    constructor() {
        super()

        this.state = {
            isBelowTheFold: false,
            belowTheFoldPosition: window.innerHeight - (window.innerHeight * .3)
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this._handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this._handleScroll)
    }
    _handleScroll = () => {
        const { isBelowTheFold, belowTheFoldPosition } = this.state

        if (isBelowTheFold) {
            const didReturnAboveTheFold = window.scrollY < belowTheFoldPosition

            if (didReturnAboveTheFold) {
                this.setState({ isBelowTheFold: false })
            }
        } else {
            const didScrollBelowTheFold = window.scrollY > belowTheFoldPosition

            if (didScrollBelowTheFold) {
                this.setState({ isBelowTheFold: true })
            }
        }
    }
    render() {
        const { isBelowTheFold } = this.state

        return (
            <Navbar isBelowTheFold={ isBelowTheFold }>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <RemaxLogo2 />
                </div>
                <div>
                    <ContactInfo>
                        <Button style={{ position: "relative", left: -15 }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Icon src="/assets/images/phone-icon.svg" />
                            </div>
                            <Number>512-669-9649</Number>
                        </Button>
                        <Button>
                            <div style={{ display: "flex", alignItems: "center", marginRight: 4 }}>
                                <Icon src="/assets/images/email-icon.svg" />
                            </div>
                            <Email>jacob.west@yahoo.com</Email>
                        </Button>
                    </ContactInfo>
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
                </div>
            </Navbar>
        )
    }
}

const Icon = styled.img`
    max-width: 20px;
    width: 100%;
    margin-right: 5px;
`
const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;  
`
const Number = styled.span`
    margin-right: 15px;
`
const Email = styled.span``
const Button = styled.div`
    display: flex;
    align-items: center;
    color: white;
`
const Navbar = styled.nav`
    background: ${({ isBelowTheFold }) => isBelowTheFold ? "#313131" : "transparent"};
    position: fixed;
    top: 0;
    z-index:1;
    width: 100%;
    box-sizing: border-box;
    transition: background .3s ease-in-out;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
`
const ListItem = styled.li`
    text-align: center;
    color: white;
    cursor: pointer;

    &:hover {
        color: #a2a2a2;
    }
`
const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
