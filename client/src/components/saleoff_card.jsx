export const SaleOff_Card = ({ sale, index, column }) => {
    return (
        <div className={`saleoff_card-wrapper column-${column}`} key={index}>
            <div className="saleoff_card-save_desc-wrapper">
                <span className="saleoff_card-save">
                    Save
                    <span>
                        $<span>{sale.save}</span>
                    </span>
                </span>
                <span className="saleoff_card-desc">{sale.desc}</span>
            </div>
            <div className="saleoff_card-image-wrapper">
                <img className="saleoff_card-image" src={sale.image} />
            </div>
        </div>
    );
};
