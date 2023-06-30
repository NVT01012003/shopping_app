export const Trending_Product_Card = ({ item, index, column }) => {
    return (
        <div
            className={`trending_product_card-wrapper column-${column}`}
            key={index}
        >
            <img className="trending_product_card-img" src={item.image} />
            <div className="trending_product_card-content">
                <h3>{item.title}</h3>
                <span>{item.desc}</span>
                <div>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
};
