import React from "react"
import styled from "styled-components"

export default class Locations extends React.Component {
    render() {
        return (
            <LocationsView { ...this.props }>
                <List>
                    <Location><a href="#">Round Rock</a></Location>
                    <Location><a href="#">Pflugerville</a></Location>
                    <Location><a href="#">Georgetown</a></Location>
                    <Location><a href="#">Hutto</a></Location>
                    <Location><a href="#">Austin</a></Location>
                </List>
            </LocationsView>
        )
    }
}

const LocationsView = styled.div`
    background-color: ${({ color }) => color};
    color: #d32031;
`
const List = styled.ul`
    background-color: ${({ color }) => color};
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 25px 0;
    margin: 0;
`
const Location = styled.li`
    font-size: 20px;
    font-weight: 700;

    a {
        color: inherit;
        text-decoration: none;
    }
`
