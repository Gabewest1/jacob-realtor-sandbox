import React from "react"
import styled from "styled-components"

import RemaxLogo from "../RemaxLogo"

class Navbar1 extends React.Component {
    constructor() {
        super()
        this.state = {
            isBelowTheFold: false
        }
    }
    render() {
        return (
            <Navbar isBelowTheFold={ this.state.isBelowTheFold }>
                
                <RemaxLogo />
                <div style={{ marginLeft: 15 }}>
                    <Information>
                        Jacob West, 512-669-9649
                    </Information>
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
    componentDidMount() {
        window.addEventListener("scroll", this._updateIsBelowTheFold)
    }
    _updateIsBelowTheFold = (e) => {
        const isBelowTheFold = window.scrollY > window.innerHeight
        console.log("AYYYY", isBelowTheFold)

        this.setState({ isBelowTheFold })
    }
}

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index:1;
    background: ${({ isBelowTheFold }) => isBelowTheFold ? "white" : "transparent"};
    color: ${({ isBelowTheFold }) => isBelowTheFold ? "inherit" : "white"};
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    transition: background .3s ease-in-out;

    * {
        cursor: pointer;
    }
    li {
        color: ${({ isBelowTheFold }) => isBelowTheFold ? "inherit" : "white"};    
    }
`
const Information = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
    font-style: italic;
    font-size: 12px;
    text-align: end;
    cursor: default;
`
const ListItem = styled.li`
    text-align: center;

    &:hover {
        color: #d81d28;
    }
`
const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
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
