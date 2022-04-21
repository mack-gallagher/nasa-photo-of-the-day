import React, { useState, useEffect } from "react";
import "./App.css";

import Image from './components/Image.js'
import Caption from './components/Caption.js'
import axios from 'axios'

import { API_KEY } from './constants'

function App() {

  const [imageData, setImageData] = useState('');

  const updateImage = (opt) => { 
     axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${opt}`)
      .then(res => {
        console.log(res);
        if (res.data.media_type==='image') {setImageData(res.data);}
        else updateImage(`&date=2012-03-14`);
        })
      .catch(err => {
        console.error(err);
        })
          }


  useEffect(() => {
      updateImage();
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
