import React, { useState } from "react";

import banner1 from "../../assets/1.jpeg"
import banner2 from "../../assets/2.jpeg"
import banner3 from "../../assets/3.jpeg"
import banner4 from "../../assets/4.jpeg"
import './index.css';

const listBanner = [
    {
        img: banner1,
        title: 'The Eternals',
        from: 'Marvel Studios',
        info: '2021 | Action, Adventure, Sci-Fi.',
    },
    {
        img: banner2,
        title: 'Venom',
        from: 'Columbia Pictures',
        info: '2018 | Action, Adventure, Sci-Fi.',
    },
    {
        img: banner3,
        title: 'Blade Runner',
        from: 'Alcon Entertainment',
        info: '2017 | Action, Adventure, Sci-Fi.',
    },
    {
        img: banner4,
        title: 'Dune',
        from: 'Legendary Pictures',
        info: '2021 | Action, Adventure, Sci-Fi.',
    },
]

function Banner() {
    const [banner, setBanner] = useState(listBanner[0])
    return (
        <>
            <div className="banner">
                <img src={banner.img} width="100%" className="banner-movie" alt="dune" />
                <div className="banner-content">
                    <p className="text-white spartan-medium">{banner.from}</p>
                    <h1 className="text-white text-uppercase spartan-semibold">{banner.title}</h1>

                    <div className="info-chips montserrat-regular">
                        {banner.info}
                    </div>

                    <div className="popular">
                        <h4 className="text-white spartan-medium">Popular Movies</h4>

                        <div className="popular-card row">
                            <div className="col-3">
                                <img onClick={() => setBanner(listBanner[0])} width="100%" src="https://images6.alphacoders.com/103/thumb-1920-1030998.png" alt="eternals" />
                                <p className="text-white spartan-medium">The Eternals</p>
                            </div>
                            <div className="col-3">
                                <img onClick={() => setBanner(listBanner[1])} width="100%" src="https://www.teahub.io/photos/full/193-1930096_venom-2018-wallpaper-venom.png" alt="venom" />
                                <p className="text-white spartan-medium">Venom</p>
                            </div>
                            <div className="col-3">
                                <img onClick={() => setBanner(listBanner[2])} width="100%" src="https://material.asset.catchplay.com/SNY-ID-002-A1050/artworks/posters/SNY-ID-002-A1050-P544.jpg?hash=1635918334" alt="blade runner" />
                                <p className="text-white spartan-medium">Blade Runner</p>
                            </div>
                            <div className="col-3">
                                <img onClick={() => setBanner(listBanner[3])} width="100%" src="https://www.ixpap.com/images/2021/10/HD-Dune-Wallpaper-2.jpg" alt="dune" />
                                <p className="text-white spartan-medium">Dune</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
