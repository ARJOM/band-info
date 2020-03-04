import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [band, setBand] = useState(false)

  let getBand = async (banda) => {
    let result = await axios.get("https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + banda);
    setBand(result.data['artists'][0]);
  };

  useEffect(() => {
    getBand("The Beatles");
  }, []);

  const banda =
      <div>
        <p>Resultado da sua busca</p>
        <p>Artista: {band['strArtist']}</p>
        <p>Biografia: {band['strBiographyPT']}</p>
        <p>País: {band['strCountry']}</p>
      </div>;

  return (
    <div className="App">
      {banda}
    </div>
  );
}

export default App;
