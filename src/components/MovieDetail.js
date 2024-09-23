import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieDetails } from "../services/omdbApi"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = ({ favourite, addToFavourite }) => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null); // store fetched moviedetaile
    const [error, setError] = useState(null); // handle error when fetched data

    const navigate = useNavigate();

    // fetch the moviedetaile from API
    useEffect(() => {
        const MovieDetail = async () => {
            try {
                const data = await MovieDetails(id);
                setMovie(data)
            } catch (error) {
                setError('Failed to fetch movie details');
            }
        }
        MovieDetail()
    }, [id]);

    const isFavourite = favourite.some(fav => fav.imdbID === movie.imdbID);

    // condition if data loading
    if (!movie)
        return <h1 className='text-xl font-bold text-center p-4 text-white'>Movie is loading please wait...</h1>
    // condition if error
    if (error)
        return <h1 className='text-2xl font-bold text-red-700'>Error: {error}</h1>;


    return (
        <div className="text-white flex p-4">
            <img src={movie.Poster} alt={movie.Title} className="mr-8" />
            <div className="mt-4 ms-4">
                <h1 className="text-4xl">{movie.Title}</h1>
                <h3 className="text-2xl mt-4">Year : <span className="text-gray-300">{movie.Year}</span></h3>
                <p className="text-lg mt-4">Genre : <span className="text-gray-300">{movie.Genre}</span></p>
                <p className="text-lg mt-4">Plot : <span className="text-gray-300">{movie.Plot}</span></p>
                <p className="text-lg mt-4">Ratings : {movie.Ratings.map(rate => (
                    <span key={rate.Source} className="text-gray-300"> {rate.Source} : {rate.Value} , </span>
                ))}</p>
                <p className="text-lg mt-4">Cast : <span className="text-gray-300">{movie.Actors}</span></p>
                <p className="text-lg mt-4">Add To Favourite : <button onClick={() => addToFavourite(movie)} className={`font-bold py-2 px-4 rounded ${isFavourite ? 'text-yellow-500' : 'text-white'} text-white`}> <FontAwesomeIcon icon={faStar} /></button></p>

                <button
                    onClick={() => navigate(-1)} // navigate back to the previous page
                    className=" border text-white p-2 mt-4 rounded"
                >
                    Go Back
                </button>
            </div>


        </div>
    )
}

export default MovieDetail