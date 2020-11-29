// requests.js
// Convention only use "R" equest if this is
// a component .. if its a reqular file/function
// User Lowercase
// 30.44 in the video!
// https://www.youtube.com/watch?v=XtMThy8QKqU

const API_KEY = "1b1c3a17bdc49283dd634b6645f1608d";

const requests = {
fetchNetFlixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
