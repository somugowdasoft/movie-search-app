import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {

    // if movie not found
    if(movies.length === 0)
    {
        return <h1 className="text-xl text-center font-bold text-red-700 uppercase">"Not found the movie please Search again"</h1>;
    }

    return (
        <div className="text-white flex flex-wrap gap-10">
            {movies.map(movie => (
                <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                    <div className="mb-8 w-80 text-center transform transition duration-500 hover:scale-90 rounded-md overflow-hidden">
                        <img src={movie.Poster} alt={movie.Title} className="w-full h-96 " />
                        <div className="bg-primary-color py-4">
                            <h1 className="text-2xl">{movie.Title}</h1>
                            <h3 className="text-2xl">{movie.Year}</h3>
                            <p className="text-xl bg-slate-600">{movie.Type}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MovieList