import { NavBar } from "../components/navbar";
import "./styles/products.scss";

const products_banner = {
    image: "https://wallpapercave.com/wp/wp5789610.jpg",
    title: "Grab Upto 50% Off On Selected Headphone",
};

export const Products = () => {
    return (
        <div className="products-container">
            <NavBar />
            <div className="product-banner-wrapper">
                <img src={products_banner.image} />
                <div className="product-banner-content">
                    <span>{products_banner.title}</span>
                    <div>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="product-categories"></div>
        </div>
    );
};
