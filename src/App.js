// TMDB API 1b1c3a17bdc49283dd634b6645f1608d

import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />  
      <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetFlixOriginals} 
      isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horrow Movies" fetchUrl={requests.fetchHorroMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
   
    </div>
  );
}

export default App;
