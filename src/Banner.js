import React, {useState, useEffect} from 'react'
import axios from './axios'
import {isMobile} from 'react-device-detect';
import requests from './requests'
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);
    const [descriptionCount, setDescriptionCount] = useState([150]);
    const [movieList, setMovieList] = useState([]);

    function refreshBanner() {
        console.log("Got Click event from Header")
        // So refresh just looks at the existing movieList
        // Doesnt do another axios call to the API
        //console.log("MovieList", movieList)
        const randmovie = Math.floor(Math.random() * movieList.length);
        console.log("Random", randmovie)
        setMovie(movieList[randmovie])
        console.log("New Movie", movieList[randmovie])
    }
 
    useEffect(() => {

        const interval = setInterval(() => {
            console.log('This will run every 10 seconds!');
            refreshBanner()
          }, 6000);

        async function fetchData() {

            const request = await axios.get(requests.fetchNetFlixOriginals);
            //console.log("Banner: ", request.data.results)

            // Only Fetch the Movie List Once - so only one call to the api when app loads.
            // Store the list in with this setMovieList 
            // And reference with 'movieList' if you need it again/
            // Could also add some other function to reload/update / to reload the whole list
           
            setMovieList(request.data.results);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );

            if (isMobile) {
                setDescriptionCount('75')
                // alert("I am a mobile device - setting word count to " + descriptionCount)
                console.log('Mobile Device')
            } else {
               // alert("I'm not a mobile device - setting word count to " + descriptionCount)
               setDescriptionCount('150')
               console.log('Browser Device')
            }
            
            console.log('Description Length Set to: ', descriptionCount)

            return request;
        }

        fetchData()

        return () => clearInterval(interval);

    }, [descriptionCount]);

    // console.log("Random Banner Movie", movie)

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
        onClick={ refreshBanner }
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                {/*<button className="banner_button" onClick={ refreshPage }>Next</button>*/}
                </div>
                <br></br>
                <h1 className="banner_descriptiom">
                    {truncate(movie?.overview,descriptionCount)}
                </h1>
                
            </div>

            <div className="banner--fadeBottom"></div>

            {" "}

        </header>
    )
}

export default Banner