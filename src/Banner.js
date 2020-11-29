import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(requests.fetchNetFlixOriginals);
            //console.log("Banner: ", request.data.results)

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            
            return request;
        }

        fetchData()

    }, []);

    console.log("Random Banner Movie", movie)

    // Truncate the descriptipon (or anything to n characters  and add ...)
    function truncate(str,n) {
            return str?.length > n ? str.substr(0,n -1) + " ..." : str ;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`
            ,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_descriptiom">
                    {truncate(movie?.overview,80)}
                </h1>
                <div className="banner--fadeBottom"></div>
            </div>


            {" "}

        </header>
    )
}

export default Banner