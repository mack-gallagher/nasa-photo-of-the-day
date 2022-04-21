import React, { useState, useEffect } from 'react'

function Caption(props) {
  const { title, explanation } = props;

  return (
    <div className='caption'>
      <h4>{title}</h4>
      <p>{explanation}</p>
    </div>
  )

}

export default Caption
