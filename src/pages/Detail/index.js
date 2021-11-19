import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GetMovie from "../../api/GetMovie";
import "./index.css";
function Detail() {
    let { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [noData, setNoData] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [modalImage, setImage] = useState("");
    const [displayModal, setDisplayModal] = useState(false);

    const showPoster = (img) => {
        if (!displayModal) {
            setImage(img);
            setDisplayModal(true);
        } else {
            setImage("");
            setDisplayModal(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            GetMovie.getItem(id)
                .then((res) => {
                    console.log(res);
                    if (res.data.Response === "False") {
                        setNotFound(true);
                    } else {
                        setNotFound(false);
                        const newList = res.data;
                        setMovieList(newList);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1500);
    }, []);

    return (
        <>
           <div className="bg-banner">
               <br/>
                <Link to={'/'} className="btn-back"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg> Back</Link>
           </div>
           <div className="detail-card">
                <div className="row">
                    <div className="col-3">
                        <img
                            width="250"
                            src={movieList?.Poster}
                            alt=""
                            onClick={() => showPoster(movieList.Poster)}
                        />
                    </div>
                    <div className="col-8">
                        <h1 className="text-white spartan-medium mt-5 pb-2">
                            {movieList?.Title}
                        </h1>
                        <p className="text-white montserrat-regular">{movieList?.Year}</p>
                        <p className="text-white spartan-regular plot">{movieList?.Plot}</p>
                    </div>
                </div>
           </div>
           
    

            {loading ? (
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
        </>
    );
}

export default Detail;
