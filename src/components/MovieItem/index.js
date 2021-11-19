import { Link } from "react-router-dom";

function MovieItem({ item, onClick }) {
  return (
    <div className="movie-card">
      <div className="row">
        <div className="col-2">
          <img width="150" src={item?.Poster} alt="" onClick={onClick} />
        </div>
        <div className="col-8">
          <h1 className="text-white spartan-medium mt-5 pb-2">{item?.Title}</h1>
          <p className="text-white montserrat-regular">{item?.Year}</p>

          <Link
            to={`/detail/${item?.imdbID}`}
            className="btn spartan-medium btn-view"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
