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
                    <FieldView placeholder="First Name" name="first" />
                    <FieldView placeholder="Last Name" name="last" />
                    <FieldView placeholder="Phone Number" name="phone" />
                    <FieldView placeholder="Email" name="email" />
                    
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
`
const Message = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    border-radius: 7px;
    border: none;
    height: 88px;
    padding: 5px 0 0 7px;
`
const SubmitButton = styled.button`
    width: 54%;
    margin: 0 auto;
    display: block;
    background: #d42235;
    border: solid thin white;;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-family: lato;
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
    width: ${({ name }) => name === "email" ? "100%" : "49%"};
    display: inline-block;

    label {
        transform: translateX(100%);
        display: inline-block;
    }

    input, textarea {
        width: 100%;
        margin: 0;
        box-sizing: border-box;    
        border-radius: 7px;
        border: none;
        height: 42px;
        padding-left: 8px;
    }
`
const Form = styled.div`
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > * {
        margin-bottom: 30px;
    }

`
const ContactView = styled.div`
    background: url(/assets/images/inside_house.jpg);
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
    <Field>
        <input { ...props } />
    </Field>
)