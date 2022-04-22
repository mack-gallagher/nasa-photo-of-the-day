import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    transition: ease 0.2s;
    width: 80%;
    margin: 10% auto;
    border: 1px solid ${props => props.theme.accentColor};
    border-radius: 10px;
    
    :hover {
      transform: scale(1.2);
    }
`

function Image(props) {

  const { src } = props;

  return (
    <div className="image">
      <StyledImage src={src} />
    </div>
    )

}

export default Image
