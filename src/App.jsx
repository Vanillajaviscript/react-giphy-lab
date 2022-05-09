import './App.css';
import React, {useState} from "react";
import Button from "./components/Button";
import GiphyDisplay from "./components/GiphyDisplay";

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
      <Button getGiphy={getGiphy}/>
      <GiphyDisplay  gif={gif}/>
    </div>
  );
}

export default App;
