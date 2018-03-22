import React from "react"
import styled from "styled-components"

const Logo = styled.img`
    width: 110px;
`

export default props => <Logo { ...props } src="/assets/images/logo.svg" />