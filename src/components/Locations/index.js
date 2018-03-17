import React from "react"
import styled from "styled-components"

export default class Locations extends React.Component {
    render() {
        return (
            <LocationsView { ...this.props }>
                <List color={ this.props.color }>
                    <Location><a href="#">Austin</a></Location>
                    <Location><a href="#">Round Rock</a></Location>
                    <Location><a href="#">Pflugerville</a></Location>
                    <Location><a href="#">Georgetown</a></Location>
                    <Location><a href="#">Hutto</a></Location>
                </List>
            </LocationsView>
        )
    }
}

const LocationsView = styled.div`
    background-color: ${({ color }) => color};
    color: black;
`
const List = styled.ul`
    background-color: ${({ color }) => color};
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 25px 0;
    margin: 0;

    li {
        border-right: solid 3px #5a5959;
    }

    li:last-child {
        border-right: none;
    }
`
const Location = styled.li`
    font-size: 20px;
    font-weight: 700;
    flex-grow: 1;
    text-align: center;

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: #919191;
        }
    }

`
