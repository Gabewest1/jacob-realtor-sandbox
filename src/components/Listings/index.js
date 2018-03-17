import React from "react"
import styled from "styled-components"

export default class Listings extends React.Component {
    render() {
        return (
            <ListingsView>
                <Header>Listings</Header>
                <List>
                    <ListItem>
                        <Image src="/assets/images/home1.jpg" />
                        <div>
                            <Address>2214 Waterway Bnd Austin, Tx 78728</Address>
                            <Price>$209,000</Price>
                        </div>
                    </ListItem>
                    <ListItem>
                        <Image src="/assets/images/home2.jpg" />
                        <Address>9716 Spanish Wells Dr Austin, TX 78717</Address>
                        <Price>$515,000</Price>
                    </ListItem>
                    <ListItem>
                        <Image src="/assets/images/home3.jpg" />
                        <div>
                            <Address>2214 Waterway Bnd Austin, Tx 78728</Address>
                            <Price>$515,000</Price>
                        </div>
                    </ListItem>
                    <ListItem>
                        <Image src="/assets/images/home2.jpg" />
                        <Address>1702 Rock Creek Dr Round Rock, TX 78681</Address>
                        <Price>$322,000</Price>
                    </ListItem>
                    <ListItem>
                        <Image src="/assets/images/home3.jpg" />
                        <div>
                            <Address>2214 Waterway Bnd Austin, Tx 78728</Address>
                            <Price>$515,000</Price>
                        </div>
                    </ListItem>
                    <ListItem>
                        <Image src="/assets/images/home1.jpg" />
                        <Address>11509 Hereford St Manor, TX 78653</Address>
                        <Price>$175,000</Price>
                    </ListItem>
                </List>
            </ListingsView>
        )
    }
}

const ListingsView = styled.div`
    padding: 30px 0;
`
const Header = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    font-size: 40px;
`
const Image = styled.div`
    background: url(${({ src }) => src});
    background-size: cover;
    max-width: 100%;
    height: 200px
    display: block;
`
const Address = styled.h1`
    font-size: 14px;
    display: inline-block;
    padding-right: 11px;
    border-right: solid 1px black;
    margin-right: 11px;
`
const Price = styled.span`
    font-size: 12px;
    font-weight: 100;
`
const ListItem = styled.li`
    margin-bottom: 50px;
`
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    padding: 0;

    > * {
        flex-basis: 30%;
    }
`