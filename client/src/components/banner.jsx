import { useState } from "react";
import Next from "../imgs/right-arrow.png";
import Back from "../imgs/left-arrow.png";

const banner_list = [
    {
        banner: "https://wallpapercave.com/wp/wp6148032.jpg",
        name: "banner 1",
    },
    {
        banner: "https://wallpapercave.com/wp/wp9433709.jpg",
        name: "banner 2",
    },
];

export const Banner = () => {
    const [banner, setBanner] = useState(0);
    const slider = (banner_index) => {
        if (banner_index < banner_list.length - 1) return banner_index + 1;
        else return 0;
    };
    const banner_back = (banner_index) => {
        if (banner_index == 0) return banner_list.length - 1;
        else return banner_index - 1;
    };

    return (
        <div className="banner-container">
            <div
                className="banner-arrow arrow-back"
                onClick={() => setBanner((pre) => banner_back(pre))}
            >
                <img src={Back} />
            </div>
            <img
                className="banner-item"
                alt={banner_list[banner].name}
                src={banner_list[banner].banner}
            />
            <img
                className="banner-item"
                alt={banner_list[slider(banner)].name}
                src={banner_list[slider(banner)].banner}
            />
            <div
                className="banner-arrow arrow-next"
                onClick={() => setBanner((pre) => slider(pre))}
            >
                <img src={Next} />
            </div>
        </div>
    );
};
