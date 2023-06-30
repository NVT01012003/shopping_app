import Rating from "../imgs/star.png";
import "./styles/product_card.scss";

export const Card = ({ product, index, column }) => {
    const price_s = `${product.min_price.toFixed(2)}`;
    const natural_part = price_s.split(".")[0];
    const decimal_part = price_s.split(".")[1];
    return (
        <div key={index} className={`product_card column-${column}`}>
            <img className="product_card-image" src={product.image} />
            <span className="product_card-name text-line_limit-1">
                {product.name}
            </span>
            <div className="product_card-rating">
                <img src={Rating} />
                <img src={Rating} />
                <img src={Rating} />
                <img src={Rating} />
                <img src={Rating} />
                <span>{`(${product.number_rated})`}</span>
            </div>
            <span className="product_card-price">
                $<span>{natural_part}</span>.{decimal_part}
            </span>
        </div>
    );
};
