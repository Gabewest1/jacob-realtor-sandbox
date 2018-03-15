import React from "react"
import styled from "styled-components"

class MLASearchForm2 extends React.Component {
    render() {
        return (
            <Form { ...this.props }>
                <TextWrapper>
                    <MLAText>Find Your Next Home</MLAText>
                </TextWrapper>

                <Container>

                    <QueryInput />

                    <Option>
                        <Title>Price</Title>
                        <Options>
                            <Field>
                                <label htmlFor="">Mix Price</label>                        
                                <Input />
                            </Field>
                            <Field>
                                <label htmlFor="">Max Price</label>
                                <Input />
                            </Field>
                        </Options>
                    </Option>
                    <Option>
                        <Title>Type</Title>
                        <Options>
                            <input type="checkbox" value="All Properties" />
                            <input type="checkbox" value="Lot" />
                            <input type="checkbox" value="Farms & Acreage" />
                            <input type="checkbox" value="Commercial Lease" />
                            <input type="checkbox" value="Residential" />
                            <input type="checkbox" value="Rental" />
                            <input type="checkbox" value="Commercial Sale" />
                            <input type="checkbox" value="Multi-family" />
                        </Options>
                    </Option>
                    <Option>
                        <Title>Rooms</Title>
                        <Options>
                            <Field>
                                <label htmlFor="">Beds</label>                        
                                <Input />
                            </Field>
                            <Field>
                                <label htmlFor="">Bath</label>
                                <Input />
                            </Field>
                        </Options>
                    </Option>
                    <SearchButton>Search</SearchButton>
                </Container>
            </Form>
        )
    }
}

const borderColor = `solid thin lightgray`

const Triangle = `
    &:before {
        content: "";
        position: absolute;
        right: 10px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        
        border-top: 6px solid white;
    }
`
const Input = styled.input`

`
const TextWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    width: 20%;

    &:hover p {
        transform: translateY(-100%);
    }
`
const MLAText = styled.p`
    align-items: center;
    color: white;
    height: 100%;
    display: flex;
    margin: 0;
    font-weight: 100;
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    translate: transformY(0%);  
    transition: all .2s linear;
    padding-left: 15px;
    white-space: nowrap;
`
const Title = styled.p`
    ${ Triangle }

    display: flex;
    align-items: center;
    margin: 0;
    height: 100%;
    background: black;
    background: rgb(236, 236, 236);
    border-right: ${ borderColor };
    border-left: ${ borderColor };
    padding: 0 37px 0 12px;
    position: relative;
`
const QueryInput = styled.input`
    padding: 0 10px;
    border: none;
    flex-grow: 1;
    font-size: 15px;
`
const Option = styled.div`

`
const Options = styled.ul`
    background: white;
    display: ${({ isActive }) => isActive ? "flex" : "none" };
    flex-wrap: wrap;
    padding: 0;
    width: 154px;
    padding: 0 10px;
    position: absolute;
`
const SearchButton = styled.button`
    border: none;
    border-right: ${ borderColor };
    width: 20%;
    background: white !important;
    font-weight: 900;
    color: black;
`
const Field = styled.div`

`
const Container = styled.div`
    border: ${ borderColor };
    display: flex;
    align-items: center;
    height: 46px;

    &:hover ${ MLAText } {
        transform: translateY(-100%);
    }

    > * {
        height: 100%;
    }
`
const Form = styled.form`
    background: transparent;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    
    @media (max-width: 854px) {
        padding-bottom: 61px;

        ${ Container } {
            flex-wrap: wrap;
            
            > * {
                width: 25%;
            }
        }
        ${ SearchButton } {
            padding: 0;
        }
        ${ QueryInput } {
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        ${ Container } {
            flex-wrap: wrap;
            
            ${ Option } {
                width: 33%;
            }
            
            ${ SearchButton } {
                padding: 0;
                width: 100%;
            }
        }
    }
`
export default MLASearchForm2
