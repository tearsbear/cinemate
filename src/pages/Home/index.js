import React, { useState, useEffect } from "react";
import "./index.css";
import ListMovie from "../../api/ListMovie";
import Navbar from "../../components/Navbar/index";
import Banner from "../../components/Banner/index";
import MovieItem from "../../components/MovieItem/index";

function Home() {
    const [movieName, setMovieName] = useState("batman");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [noData, setNoData] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [modalImage, setImage] = useState("");
    const [displayModal, setDisplayModal] = useState(false);

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (!noData) {
                loadMovieList(movieName, page);
            }
        }
    };

    const showPoster = (img) => {
        if (!displayModal) {
            setImage(img);
            setDisplayModal(true);
        } else {
            setImage("");
            setDisplayModal(false);
        }
    };

    const loadMovieList = (name, page) => {
        setLoading(true);
        setTimeout(() => {
            ListMovie.getList(name, page)
                .then((res) => {
                    console.log(res);
                    if (res.data.Response === "False") {
                        setNotFound(true);
                    } else {
                        setNotFound(false);
                        const newPage = page + 1;
                        const newList = movieList.concat(res.data.Search);
                        setMovieList(newList);
                        setPage(newPage);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1500);
    };

    const searchMovie = (movname) => {
        setLoading(true);
        setMovieName(movname);
        setTimeout(() => {
            ListMovie.getList(movname, page)
                .then((res) => {
                    if (res.data.Response === "False") {
                        setNotFound(true);
                    } else {
                        setNotFound(false);
                        const newPage = page + 1;
                        const newList = res.data.Search;
                        setMovieList(newList);
                        setPage(newPage);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1500);
    };

    useEffect(() => {
        loadMovieList(movieName, page);
    }, []);

    return (
        <div>
            <Navbar />
            <Banner />

            <div className="search">
                <input
                    placeholder="Search movie ...."
                    onChange={(e) => searchMovie(e.target.value)}
                />
            </div>

            <div className="movie-list">
                <h1 className="text-white spartan-medium">List Movie</h1>
                {notFound ? (
                    <div className="mt-4 text-white pb-5">no movie found ...</div>
                ) : (
                    ""
                )}

                {!notFound &&
                    movieList.map((item, index) => (
                        <MovieItem
                            key={index}
                            item={item}
                            onClick={() => showPoster(item.Poster)}
                        />
                    ))}
            </div>
            {!notFound && loading ? (
                <div className="text-center text-white pb-5">loading data ...</div>
            ) : (
                ""
            )}

            {displayModal && (
                <div className="modalImg">
                    <span class="close" onClick={() => showPoster()}>
                        &times;
                    </span>
                    <img src={modalImage} alt="" />
                </div>
            )}
        </div>
    );
}

export default Home;
