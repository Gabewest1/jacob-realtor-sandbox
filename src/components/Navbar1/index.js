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
    position: fixed;
    top: 0;
    z-index:1;
    background: white;
    width: 100%;
`
const Information = styled.p`
    margin-top: 0;
    margin-bottom: 5px;
    font-style: italic;
`
const ListItem = styled.li`

`
const List = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    > * {
        margin-right: 15px;
    }

    > *:last-child {
        margin-right: 0;
    }

    @media (max-width: 767px) {
        display: none;
    }
`

export default Navbar1
