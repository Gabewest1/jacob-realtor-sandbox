import React from "react"
import styled from "styled-components"

import RemaxLogo from "../RemaxLogo"

class Navbar1 extends React.Component {
    render() {
        return (
            <Navbar>
                <RemaxLogo />
                
                <div>
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
`
const Information = styled.p`

`
const ListItem = styled.li`

`
const List = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;

    @media (max-width: 767px) {
        display: none;
    }
`

export default Navbar1
