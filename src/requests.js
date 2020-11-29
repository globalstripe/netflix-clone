// requests.js
// Convention only use "R" equest if this is
// a component .. if its a reqular file/function
// User Lowercase

const API_KEY = "1b1c3a17bdc49283dd634b6645f1608d";

const requests = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetFlixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=213`,
fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceoMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
