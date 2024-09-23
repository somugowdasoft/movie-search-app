import { useNavigate } from 'react-router-dom';

const Favourite = ({ favourite, removeFromFavourite }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="text-center text-white">
                {favourite.length === 0 ? (
                    <>
                        <p className="text-xl uppercase">No movies in favourite</p>
                        <button
                            onClick={() => navigate(-1)} // navigate back to the previous page
                            className=" border text-white p-2 mt-4 rounded"
                        >
                            Go Back
                        </button>
                    </>
                ) : (
                    <div>
                        {favourite.map(movie => (
                            <div className="mb-8 w-80 text-center rounded-md overflow-hidden" key={movie.imdbID}>
                                <img src={movie.Poster} alt={movie.Title} className="w-full h-96" />
                                <div className="bg-primary-color py-4">
                                    <h1 className="text-2xl">{movie.Title}</h1>
                                    <h3 className="text-2xl">{movie.Year}</h3>
                                    <p className="text-xl bg-slate-600">{movie.Type}</p>
                                    <button onClick={() => removeFromFavourite(movie.imdbID)} className="text-white border rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4 mt-4"> Remove </button>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={() => navigate(-1)} // navigate back to the previous page
                            className=" border text-white p-2 mt-4 rounded"
                        >
                            Go Back
                        </button>

                    </div>
                )}
            </div>
        </>
    )


}

export default Favourite