import React from "react"
import styled from "styled-components"

export default class Icons extends React.Component {
    render() {
        return (
            <IconsView { ...this.props }>
                <Wrapper>
                    <SearchIcon />
                    <Title>Find Your Dream Home</Title>
                    <Description>
                        Ready to buy your dream home?  I will analyze the data you provide and get back to you with a range of properties matching your search criteria.
                    </Description>
                </Wrapper>

                <Wrapper>
                    <MoneyIcon />
                    <Title>List Your Home</Title>
                    <Description>
                        Ready to sell?  If you are interested in listing your property for sale, complete some preliminary information to get the process started.
                    </Description>
                </Wrapper>

                <Wrapper>
                    <PencilIcon />
                    <Title>Price Your Home</Title>
                    <Description>
                        I will provide you with comparable sale information for your neighborhood and a range of approximate values for your home.
                    </Description>
                </Wrapper>
            </IconsView>
        )
    }
}

const Image = styled.img`
    cursor: pointer;
    width: 100%;
    max-width: 110px;
`
const Title = styled.h1`
    margin: 5px;
    font-weight: 100;
    cursor: pointer;
`
const Description = styled.p`
    margin: 0;
`
const Wrapper = styled.div`
    text-align: center;
`
const IconsView = styled.div`
    display: flex;
    flex-direction: column;

    svg {
        cursor: pointer;
        width: 100%;
        max-width: 110px;
        fill: #333;
        stroke: #333
    }

    ${ SearchIcon } {
        fill: none;
    }

    @media (min-width: 480px) {
        flex-direction: row;
        justify-content: space-around;

        > * {
            flex-basis: 30%;
        }
    }
`
const SearchIcon = props => (
    <svg { ...props }
       width="110"
       height="110"
       version="1.1"
       style={{ fill: "none", strokeWidth: 6 }}
       id="svg5062" >
      <path
         d="m 47.458321,63.182088 a 33.904776,34.021386 0 1 1 0.443196,0.44475 L 10.229538,101.42837 M 30.395139,75.41201 6.0191482,99.871824 11.780747,105.65324 36.15673,81.193441"
         id="path5060" />
    </svg>
    

)

const PencilIcon = props => (
<svg { ...props }
   version="1.1"
   id="Capa_1"
   x="0px"
   y="0px"
   width="110"
   height="110"
   viewBox="0 0 110 110" >
  <g
     id="g5768"
     transform="translate(0,-306.56601)"><g
       id="g5763"
       transform="matrix(0.26406311,0,0,0.26406311,1.330291,306.87905)"><path
         d="m 189.706,33.474 133.065,61.978 c 1.83,0.853 4.023,0.052 4.877,-1.777 l 12.333,-26.481 c 0.854,-1.828 0.053,-4.023 -1.775,-4.875 L 205.138,0.341 c -1.83,-0.852 -4.025,-0.052 -4.877,1.778 l -12.333,26.479 c -0.853,1.83 -0.052,4.025 1.778,4.876 z"
         id="path5757" /><path
         d="m 212.617,341.084 104.688,-224.77 c 0.854,-1.83 0.053,-4.024 -1.776,-4.877 L 182.464,49.461 c -1.83,-0.853 -4.025,-0.053 -4.877,1.777 L 72.898,276.008 c -0.854,1.83 -1.182,4.938 -0.729,6.904 l 26.386,115.203 c 0.449,1.967 3.289,2.822 5.085,1.901 l 104.163,-53.933 c 1.794,-0.919 3.964,-3.169 4.814,-4.999 z m -38.814,-0.071 c -1.767,0.979 -4.681,2.529 -6.478,3.449 0,0 -29.139,14.943 -39.939,20.483 -5.418,2.777 -16.37,-1.618 -17.73,-7.553 -2.754,-12.028 -10.201,-44.544 -10.201,-44.544 -0.451,-1.967 -1.139,-5.195 -1.528,-7.178 0,0 -1.517,-7.715 -1.218,-8.356 0.301,-0.646 7.176,2.13 7.176,2.13 1.872,0.756 4.898,2.068 6.729,2.922 l 57.557,26.809 c 1.829,0.854 4.785,2.324 6.567,3.271 0,0 6.547,3.478 6.247,4.122 -0.3,0.644 -7.182,4.445 -7.182,4.445 z"
         id="path5759" /><path
         d="M 337.601,399.679 H 150.896 c -3.85,0 -7,3.148 -7,7 v 2.888 c 0,3.85 3.15,7 7,7 H 337.6 c 3.852,0 7,-3.15 7,-7 v -2.888 c 10e-4,-3.852 -3.15,-7 -6.999,-7 z"
         id="path5761" /></g></g><g
     id="g5770"
     transform="translate(0,-306.56601)" /><g
     id="g5772"
     transform="translate(0,-306.56601)" /><g
     id="g5774"
     transform="translate(0,-306.56601)" /><g
     id="g5776"
     transform="translate(0,-306.56601)" /><g
     id="g5778"
     transform="translate(0,-306.56601)" /><g
     id="g5780"
     transform="translate(0,-306.56601)" /><g
     id="g5782"
     transform="translate(0,-306.56601)" /><g
     id="g5784"
     transform="translate(0,-306.56601)" /><g
     id="g5786"
     transform="translate(0,-306.56601)" /><g
     id="g5788"
     transform="translate(0,-306.56601)" /><g
     id="g5790"
     transform="translate(0,-306.56601)" /><g
     id="g5792"
     transform="translate(0,-306.56601)" /><g
     id="g5794"
     transform="translate(0,-306.56601)" /><g
     id="g5796"
     transform="translate(0,-306.56601)" /><g
     id="g5798"
     transform="translate(0,-306.56601)" /></svg>
)

const MoneyIcon = props => (
<svg { ...props }
   version="1.1"
   id="Capa_1"
   x="0px"
   y="0px"
   width="110"
   height="110"
   viewBox="0 0 110 110"><g
     id="g5125"

     transform="matrix(0.22669421,0,0,0.22669421,0.96173072,8.4467426e-4)"><g
       id="g5123"
  ><path
         d="m 212.282,257.789 v 30.322 c 0,12.209 8.352,14.99 15.164,15.168 h 15.164 v -60.653 h -15.164 c -6.812,0.177 -15.164,2.963 -15.164,15.163 z"
         id="path5117"
     /><path
         d="m 272.931,394.255 h 15.178 c 6.818,-0.178 15.168,-2.964 15.168,-15.164 v -30.326 c 0,-12.2 -8.35,-14.986 -15.168,-15.163 h -15.178 z"
         id="path5119"
     /><path
         d="m 327.209,151.65 h 6.39 c 16.76,0 30.331,-13.567 30.331,-30.329 0,-15.576 -11.91,-27.953 -27.073,-29.673 l 23.872,-47.742 c 7.462,-14.984 1.419,-33.167 -13.567,-40.69 -14.981,-7.46 -33.169,-1.421 -40.688,13.567 l -4.271,8.468 C 299.72,11.035 287.875,0.021 272.931,0.021 c -16.745,0 -30.326,13.591 -30.326,30.322 0,-16.731 -13.577,-30.322 -30.322,-30.322 -14.944,0 -26.789,11.015 -29.288,25.23 l -4.238,-8.468 C 171.25,1.827 153.095,-4.305 138.067,3.216 123.081,10.739 117.009,28.922 124.5,43.906 l 23.873,47.742 c -15.149,1.72 -27.067,14.097 -27.067,29.673 0,16.762 13.562,30.329 30.324,30.329 h 6.382 C 82.894996,206.438 30.329,322.554 30.329,396.299 c 0,99.185 95.034,88.609 212.28,88.609 117.228,0 212.296,10.575 212.296,-88.609 0,-73.745 -52.593,-189.861 -127.696,-244.649 z m -39.101,151.629 c 18.309,0 45.49,12.111 45.49,45.485 v 30.326 c 0,33.375 -27.186,45.485 -45.49,45.485 H 272.93 v 15.168 c 0,8.35 -6.809,15.164 -15.158,15.164 -8.349,0 -15.163,-6.814 -15.163,-15.164 v -15.168 h -45.49 c -8.352,0 -15.164,-6.809 -15.164,-15.158 0,-8.354 6.812,-15.163 15.164,-15.163 h 45.49 v -60.653 h -15.166 c -18.3,0 -45.488,-12.111 -45.488,-45.49 v -30.322 c 0,-33.376 27.188,-45.49 45.488,-45.49 h 15.166 v -15.161 c 0,-8.352 6.813,-15.166 15.163,-15.166 8.35,0 15.158,6.813 15.158,15.166 v 15.161 h 45.509 c 8.35,0 15.159,6.814 15.159,15.164 0,8.352 -6.81,15.164 -15.159,15.164 H 272.93 v 60.653 h 15.178 z"
         id="path5121"
     /></g></g><g
     id="g5127"
     transform="translate(0,-375.23401)" /><g
     id="g5129"
     transform="translate(0,-375.23401)" /><g
     id="g5131"
     transform="translate(0,-375.23401)" /><g
     id="g5133"
     transform="translate(0,-375.23401)" /><g
     id="g5135"
     transform="translate(0,-375.23401)" /><g
     id="g5137"
     transform="translate(0,-375.23401)" /><g
     id="g5139"
     transform="translate(0,-375.23401)" /><g
     id="g5141"
     transform="translate(0,-375.23401)" /><g
     id="g5143"
     transform="translate(0,-375.23401)" /><g
     id="g5145"
     transform="translate(0,-375.23401)" /><g
     id="g5147"
     transform="translate(0,-375.23401)" /><g
     id="g5149"
     transform="translate(0,-375.23401)" /><g
     id="g5151"
     transform="translate(0,-375.23401)" /><g
     id="g5153"
     transform="translate(0,-375.23401)" /><g
     id="g5155"
     transform="translate(0,-375.23401)" /></svg>
)