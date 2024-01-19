import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from "./Banner";
import Nav from './Nav';
function App() {
  return (
    <div className="App">
     
            <Nav />
            <Banner />
            <Row
              title="Netflix Originals"
              fetchUrl={requests.fetchNetflixoriginals}
              isLargeRow={true}
            />
            <Row title="Trending Now " fetchUrl={requests.fetchTrending} />
            <Row title="Action movies " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy movies " fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror " fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance movies " fetchUrl={requests.fetchRomanceMovies} />
      
    </div>
  );
}

export default App;