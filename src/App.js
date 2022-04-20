import React, { useState, useEffect } from "react";
import "./App.css";

import Image from './components/Image.js'
import axios from 'axios'

import { API_KEY } from './constants'

function App() {

  const [imageUrl, setImageUrl] = useState('');

  console.log(API_KEY);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res);
        setImageUrl(res.data.hdurl);
        })
      .catch(err => {
        console.error(err);
        })
    }, []);

  return (
    <div className="App">
      <Image src={imageUrl} />
    </div>
  );
}

export default App;
