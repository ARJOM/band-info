import React, {Fragment, useState, useEffect, useCallback} from 'react';
import './App.css';
import axios from "axios"
import Search from "../Search/Search";

function App() {
  const [band, setBand] = useState(false)

  let getBand = async (banda) => {
    let result = await axios.get("https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + banda);
    try{
        setBand(result.data['artists'][0]);
    } catch (e) {
        setBand(false)
    }
  };

  useEffect(() => {
    getBand();
  }, []);

    const handleSearch = useCallback(
        async event => {
            event.preventDefault();
            const { bandS } = event.target.elements;
            alert(bandS.value);
            getBand(bandS.value);
        },
        []
    );

  const banda =
      <div>
        <p>Resultado da sua busca</p>
        <p>Artista: {band['strArtist']}</p>
        <p>Biografia: {band['strBiographyPT']}</p>
        <p>Localização: {band['strCountry']}</p>
      </div>;

  if (band===false){
      return (
          <Fragment>
              <Search function={handleSearch}/>
              <div className="App">
                  <p>Nada a ser mostrado</p>
              </div>
          </Fragment>

      )
  }
  return (
      <Fragment>
          <Search function={handleSearch}/>
          <div className="App">
              {banda}
          </div>
      </Fragment>

  );
}

export default App;
