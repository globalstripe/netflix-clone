// TMDB API 1b1c3a17bdc49283dd634b6645f1608d
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
import Profile from './Profile'
import Footer from './Footer'
import BrowserLocation from './getlocation'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AnimateOnChange } from 'react-animation'

function App() {

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="App">
      <Router>
      <Switch>     

      <Route path="/BrowserLocation">
        <BrowserLocation />
      </Route>  
      
      <Route path="/">
      
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
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Footer></Footer>
      </Route>
      


      <Route path="/profile" >
            <Profile quote='99 Red Balloons' />
            <Footer></Footer>
      </Route>

        </Switch>
      </Router>
      
     
    </div>

  );
}

export default App;
