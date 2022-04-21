import React, { useState, useEffect } from 'react'

function Image(props) {

  const { src } = props;

  return (
    <div className="image">
      <img src={src} />
    </div>
    )

}

export default Image
