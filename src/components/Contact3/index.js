import React from "react"
import styled from "styled-components"

export default class Contact extends React.Component {
    render() {
        return (
            <ContactView>
                <TintedOverlay />
                
                <Header>Let's Talk Real Estate!</Header>
                <SubHeader>Please use the form below to schedule a call.</SubHeader>
                <Form>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <FieldView placeholder="First Name" name="first" />
                        <FieldView placeholder="Last Name" name="last" />
                        <FieldView placeholder="Phone Number" name="phone" />
                        <FieldView placeholder="Email" name="email" />
                    </div>
                    <Message placeholder="What you'd like to say" />
                
                    <SubmitButton>Send Message</SubmitButton>
                </Form>

            </ContactView>
        )
    }
}

const TintedOverlay = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.4);
    position: absolute !important;
    left: 0;
    top: 0;
`
const Header = styled.h1`
    font-size: 46px;
    margin-bottom: 13px;
`
const SubHeader = styled.p`
    margin-top: 0;
    margin-bottom: 35px;
    font-size: 16px;
`
const Message = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    border-radius: 7px;
    border: none;
    padding: 5px 0 0 7px;
    min-height: 100px;
    margin-bottom: 20px;
`
const SubmitButton = styled.button`
    width: 100%;
    margin: 0 auto;
    display: block;
    background: #bb2330;
    border: solid thin white;;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 100;
    border-radius: 7px;
    cursor: pointer;
    outline: none;
    transition: all .2s ease-in-out;

    &:hover {
        background: #850513;
    }
`
const Input = styled.input`

`
const Field = styled.div`
    width: 49%;
    margin-bottom: 20px;
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: 20px;

    input {
        width: 100%;
        margin: 0;
        box-sizing: border-box;    
        border-radius: 7px;
        border: none;
        padding-left: 8px;
        height: 42px;
    }
`
const Form = styled.div`
    width: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const ContactView = styled.div`
    background: url(/assets/images/hero3.jpg);
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 30px 0
    color: white;

    > * {
        position: relative;
    }
`
const FieldView = props => (
    <Field { ...props }>
        <input { ...props } />
    </Field>
)