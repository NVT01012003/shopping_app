export const Store_Card = ({ item, index, column }) => {
    return (
        <div className={`store_card-wrapper column-${column}`} key={index}>
            <img className="store_card-img" src={item.image} />
            <div className="store_card-content-wrapper">
                <h4>{item.title}</h4>
                <span className="store_card-desc">{item.desc}</span>
                <span>{item.bookmark}</span>
            </div>
            <div className="store_card-logo-wrapper">
                <img className="store_card-logo" src={item.logo} />
            </div>
        </div>
    );
};
