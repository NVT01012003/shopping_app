export const Brand_Card = ({ brand, index, column }) => {
    return (
        <div className={`brand_card-wrapper column-${column}`} key={index}>
            <img src={brand.brand} />
            <div>
                <span className="brand_card-name text-line_limit-1">
                    {brand.name}
                </span>
                <span className="brand_card-desc text-line_limit-1">
                    {brand.desc}
                </span>
            </div>
        </div>
    );
};
