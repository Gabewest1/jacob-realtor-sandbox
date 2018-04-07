import React from "react"
import styled from "styled-components"
import { parseString } from "xml2js"

export default class ZillowListings extends React.Component {
    state = { data: null }
    componentDidMount() {
        // fetch("http://cors-anywhere.herokuapp.com/www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1gc8lpuqfwr_1brbp&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA")
        //     .then(res => {
        //         console.log(res.responseText)
        //         res.text()
        //     })
        //     .then(json => {
        //         console.log(json)
        //         this.setState({ data: json })
        //     })
        //     .catch(err => console.log(err))

        const reqListener = ({ target }) => {
            console.log(target);
            let xmlAsString = target.responseText
            
            parseString(xmlAsString, (err, data) => {
                console.log(data)
                this.setState({ data: JSON.stringify(data) })
            })
        }
        
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "http://cors-anywhere.herokuapp.com/www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1gc8lpuqfwr_1brbp&address=loquat&citystatezip=Seattle%2C+WA");
        // oReq.open("GET", "http://cors-anywhere.herokuapp.com/www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz1gc8lpuqfwr_1brbp&screenname=Jacob7960");
        // oReq.open("GET", "http://cors-anywhere.herokuapp.com/www.zillow.com/webservice/GetDeepComps.htm?zws-id=X1-ZWz1gc8lpuqfwr_1brbp&zpid=48749425&count=5");
        oReq.send();
    }
    render() {
        return (
            <ZillowListingsView>{ this.state.data }</ZillowListingsView>
        )
    }
}

const ZillowListingsView = styled.div`
    background: red;
    min-height: 100px;
`
// console.log(ZillowListingsView.prototype)


// // ZillowListingsView.prototype = Object.create(React.Component)

// // () => {
// //     console.log("AYYYYYY bBY i MOUNTed :S")
// // }

// export default ZillowListingsView
