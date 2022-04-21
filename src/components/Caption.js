import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const StyledCaption = styled.div`
  width: 80%;
  background-color: rgba(4,10,17,10%);
  border: 1px solid cyan;
  border-radius: 4px;
`

function Caption(props) {
  const { title, explanation } = props;

  return (
    <StyledCaption>
      <h4>{title}</h4>
      <p>{explanation}</p>
    </StyledCaption>
  )

}

export default Caption
