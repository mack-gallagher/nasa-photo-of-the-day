import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const StyledInfoBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledCaption = styled.p`
  width: 100%;
  border: 1px solid ${props => props.theme.accentColor};
  border-radius: 10px;
  font-family: ${props => props.theme.defaultFont};
  background-color: ${props => props.theme.black};
  padding: 3%;
`
const StyledTitle = styled.h4`
  width: 100%;
  border: 1px solid ${props => props.theme.accentColor};
  border-radius: 10px;
  font-family: ${props => props.theme.defaultFont};
  background-color: ${props => props.theme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.defaultFont};
  font-size: 1.5rem;
  line-height: 3rem;
  height: 3rem;
  padding: 3%;
`

function Caption(props) {
  const { title, explanation } = props;

  return (
    <StyledInfoBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledCaption>{explanation}</StyledCaption>
    </StyledInfoBox>
  )

}

export default Caption
