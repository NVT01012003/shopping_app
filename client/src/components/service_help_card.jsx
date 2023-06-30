export const Service_Help_Card = ({ item, index, column }) => {
    return (
        <div
            className={`service_help_card-wrapper column-${column}`}
            key={index}
        >
            <div className="service_help_card-content">
                <h2>{item.title}</h2>
                <span>{item.desc}</span>
            </div>
            <img className="service_help_card-img" src={item.image} />
        </div>
    );
};
