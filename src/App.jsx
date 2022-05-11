import './App.css';
import React, {useState} from "react";
import Button from "./components/button/Button";
import GiphyDisplay from "./components/giphydisplay/GiphyDisplay";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const API_KEY = "YSrALZnb7d42Hl4gg7oWCJ8vzXFZqjJW";
  const [gif, setGif] = useState(null);

  const getGiphy = () => {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`, {
      method: "get",
  })
    .then((response) => {return response.json()})
    .then((data) => {setGif(data)})}

  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <GiphyDisplay  gif={gif}/>
          <Button getGiphy={getGiphy}/>
      </div>
    </div>
  );
}

export default App;
