import React from "react"
import styled from "styled-components"

import RemaxLogo from "../RemaxLogo"

class Navbar1 extends React.Component {
    render() {
        return (
            <Navbar>
                
                <RemaxLogo />
                <div style={{ marginLeft: 15 }}>
                    <Information>
                        Jacob West, 512-669-9592
                    </Information>
                    <List>
                        <ListItem>
                            Property Search
                        </ListItem>
                        <ListItem>
                            Sell
                        </ListItem>
                        <ListItem>
                            Buy
                        </ListItem>
                        <ListItem>
                            About Us
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

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index:1;
    background: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;

    * {
        cursor: pointer;
    }
`
const Information = styled.p`
    margin-top: 0;
    margin-bottom: 8px;
    font-style: italic;
    font-size: 12px;
    text-align: end;
    cursor: default;
`
const ListItem = styled.li`
    text-align: center;
    color: #004e95;

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
