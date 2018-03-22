import React from "react"
import styled from "styled-components"

const Logo = styled.img`
    min-width: 100px;
    height: 77%;
`

export default props => <Logo { ...props } src="/assets/images/logo.svg" />