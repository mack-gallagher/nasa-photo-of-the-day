import React, { useState, useEffect } from "react";
import "./App.css";

import Image from './components/Image.js'
import Caption from './components/Caption.js'
import axios from 'axios'

import { API_KEY } from './constants'

function App() {

  const [imageData, setImageData] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res);
        setImageData(res.data);
        })
      .catch(err => {
        console.error(err);
        })
    }, []);

  console.log(imageData.hdurl);

  return (
    <div className="App">
      <Image src={imageData.hdurl} />
      <Caption title={imageData.title} explanation={imageData.explanation} />
    </div>
  );
}

export default App;
