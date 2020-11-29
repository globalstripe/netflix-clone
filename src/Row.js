import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl, isLargeRow}) {
    
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState([]);


    // A snippet of code that runs under a specific conditional variable
    useEffect(() => {
        // if we leave [] blank ... run once when the row loads and do not run again
        // it is a dependancy on  movies changing or not.

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
            // console.log(request)
        }
        fetchData();

        setTrailerUrl('')

    }, [fetchUrl]);
 
    //console.table(movies)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log("HandleClick: ", movie)
        if (trailerUrl) {
            setTrailerUrl('');
            //console.log('setting Trailer URL to empty')
            //alert('setting Trailer URL to empty')
        } else {
            movieTrailer(movie?.title || "")
            .then((url) => {
                // console.log('URL is:', url)
                const urlParams = new URLSearchParams(new URL(url).search);
                //  ust get the ?v= querystring value!
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log("MovieTrailerERR", error));
        }

    };

    return (
        <div className="row">
            <br></br>
            <h2>{title}</h2>
            <br></br>

            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path 
                    }`} alt={movie.name}/>
                ))}
            
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row


