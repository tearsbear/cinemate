import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import GetMovie from '../../api/GetMovie';
import './index.css';
function Detail() {
    let { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [noData, setNoData] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [modalImage, setImage] = useState('');
    const [displayModal, setDisplayModal] = useState(false);


    const showPoster = (img) => {
        if (!displayModal) {
            setImage(img)
            setDisplayModal(true)
        } else {
            setImage('')
            setDisplayModal(false)
        }
    }

    useEffect(() => {
     setLoading(true);
        setTimeout(() => {
            GetMovie.getItem(id)
                .then((res) => {
                    console.log(res)
                    if (res.data.Response === "False") {
                        setNotFound(true);
                    } else {
                        setNotFound(false);
                        const newList = res.data.Search;
                        setMovieList(newList);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 1500);
    }, []);

    return (
        <>
            <h1>id: {id}</h1>
            {movieList.map((item, index) =>
            (
                <div className="movie-card" key={index}>
                    <div className="row">
                        <div className="col-2">
                            <img width="150" src={item?.Poster} alt="" onClick={() => showPoster(item.Poster)} />
                        </div>
                        <div className="col-8">
                            <h1 className="text-white spartan-medium mt-5 pb-2">{item?.Title}</h1>
                            <p className="text-white montserrat-regular">
                                {item?.Year}
                            </p>
                        </div>
                    </div>

                </div>
            ))}

            {loading ? <div className="text-center text-white pb-5">loading data ...</div> : ""}

        </>
    );
}

export default Detail;
