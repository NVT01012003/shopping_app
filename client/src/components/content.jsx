import { Card } from "./product_card";
import { Brand_Card } from "./brand_card";
import { SaleOff_Card } from "./saleoff_card";
import { Trending_Product_Card } from "./trending_product_card";
import { Store_Card } from "./store_card";
import Card_Credit from "../imgs/card_credit.png";
import { Service_Help_Card } from "./service_help_card";

// update later (get from database)
const categories = [
    {
        name: "art",
        item: "https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: "books",
        item: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        name: "education",
        item: "https://images.pexels.com/photos/5088009/pexels-photo-5088009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        name: "art",
        item: "https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: "books",
        item: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        name: "education",
        item: "https://images.pexels.com/photos/5088009/pexels-photo-5088009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        name: "art",
        item: "https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: "books",
        item: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        name: "education",
        item: "https://images.pexels.com/photos/5088009/pexels-photo-5088009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
];
const today_deals = [
    {
        name: "HomePad mini",
        image: "https://smarthomekit.vn/wp-content/uploads/2021/01/apple-homepod-mini-white-1.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "HomePad mini",
        image: "https://smarthomekit.vn/wp-content/uploads/2021/01/apple-homepod-mini-white-1.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "HomePad mini",
        image: "https://smarthomekit.vn/wp-content/uploads/2021/01/apple-homepod-mini-white-1.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "HomePad mini",
        image: "https://smarthomekit.vn/wp-content/uploads/2021/01/apple-homepod-mini-white-1.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "HomePad mini",
        image: "https://smarthomekit.vn/wp-content/uploads/2021/01/apple-homepod-mini-white-1.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "HomePad mini",
        image: "https://smarthomekit.vn/wp-content/uploads/2021/01/apple-homepod-mini-white-1.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "HomePad mini",
        image: "https://smarthomekit.vn/wp-content/uploads/2021/01/apple-homepod-mini-white-1.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
];
const brands = [
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
    {
        name: "99Designs",
        desc: "Delivery with 24 hours",
        brand: "https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782",
    },
];
const big_sales = [
    {
        save: 100,
        desc: "Explore Our Furniture & Home Furnishing Range",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
    },
    {
        save: 100,
        desc: "Explore Our Furniture & Home Furnishing Range",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
    },
    {
        save: 100,
        desc: "Explore Our Furniture & Home Furnishing Range",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
    },
    {
        save: 100,
        desc: "Explore Our Furniture & Home Furnishing Range",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
    },
];
const weekly_products = [
    {
        name: "Origin65A keyboard kit",
        image: "https://static.wixstatic.com/media/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Origin65A keyboard kit",
        image: "https://static.wixstatic.com/media/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Origin65A keyboard kit",
        image: "https://static.wixstatic.com/media/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Origin65A keyboard kit",
        image: "https://static.wixstatic.com/media/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Origin65A keyboard kit",
        image: "https://static.wixstatic.com/media/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Origin65A keyboard kit",
        image: "https://static.wixstatic.com/media/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Origin65A keyboard kit",
        image: "https://static.wixstatic.com/media/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8efda8_5d42e2b55fe64aa8a81fc1c56c84c196~mv2.jpg",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
];
const cashback_brand = {
    brand: Card_Credit,
    title: "Get 5% Cash Back",
    desc: "on Nvt.vn",
};
const most_selling_products = [
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
    {
        name: "Keyboard kit",
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        min_price: 99,
        rating: 4.5,
        number_rated: 100,
        sold: 88,
    },
];
const trending_products = [
    {
        image: "https://images.unsplash.com/photo-1619992518071-8645fd575807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Furniture Village",
        desc: "Delivery with in 24 hours",
    },
    {
        image: "https://images.unsplash.com/photo-1619992518071-8645fd575807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Furniture Village",
        desc: "Delivery with in 24 hours",
    },
];
const best_selling_store = [
    {
        title: "Apple",
        logo: "https://img.freepik.com/free-icon/mac-os_318-10374.jpg?size=626&ext=jpg&ga=GA1.2.870552875.1687313920&semt=ais",
        image: "https://images.unsplash.com/photo-1516375195448-0b545d6a2c5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hY2Jvb2slMjBhbmQlMjBpcGhvbmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        desc: "Mobile & Gadgets",
        bookmark: "🔖 Delivery with in 24 hours",
    },
    {
        title: "Apple",
        logo: "https://img.freepik.com/free-icon/mac-os_318-10374.jpg?size=626&ext=jpg&ga=GA1.2.870552875.1687313920&semt=ais",
        image: "https://images.unsplash.com/photo-1516375195448-0b545d6a2c5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hY2Jvb2slMjBhbmQlMjBpcGhvbmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        desc: "Mobile & Gadgets",
        bookmark: "🔖 Delivery with in 24 hours",
    },
    {
        title: "Apple",
        logo: "https://img.freepik.com/free-icon/mac-os_318-10374.jpg?size=626&ext=jpg&ga=GA1.2.870552875.1687313920&semt=ais",
        image: "https://images.unsplash.com/photo-1516375195448-0b545d6a2c5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hY2Jvb2slMjBhbmQlMjBpcGhvbmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        desc: "Mobile & Gadgets",
        bookmark: "🔖 Delivery with in 24 hours",
    },
    {
        title: "Apple",
        logo: "https://img.freepik.com/free-icon/mac-os_318-10374.jpg?size=626&ext=jpg&ga=GA1.2.870552875.1687313920&semt=ais",
        image: "https://images.unsplash.com/photo-1516375195448-0b545d6a2c5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hY2Jvb2slMjBhbmQlMjBpcGhvbmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        desc: "Mobile & Gadgets",
        bookmark: "🔖 Delivery with in 24 hours",
    },
];
const services_to_help = [
    {
        title: "Frequently Asked Questions",
        desc: "updates on safe Shopping in our Stores",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "Online Payment Process",
        desc: "updates on safe Shopping in our Stores",
        image: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyaXBlJTIwcGF5bWVudCUyMGd1aWRlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "Home Delivery Options",
        desc: "updates on safe Shopping in our Stores",
        image: "https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbGl2ZXJ5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
];

export const Content = () => {
    return (
        <div className="content-container">
            <div className="content-category-wrapper title_content-wrapper">
                <span className="title">Shop Our Top Categories</span>
                <div className="content-category scrollbar-custom row-6">
                    {categories.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className="content-category_item-wrapper column-6"
                            >
                                <span>{value.name}</span>
                                <img
                                    className="content-category_item"
                                    alt={value.name}
                                    src={value.item}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="products-wrapper title_content-wrapper">
                <span className="title">Todays Best Deals For You!</span>
                <div className="products scrollbar-custom row-4">
                    {today_deals.map((value, index) => {
                        return (
                            <Card product={value} index={index} column={4} />
                        );
                    })}
                </div>
            </div>
            <div className="content-brands-wrapper title_content-wrapper">
                <span className="title">Choose By Brand</span>
                <div className="content-brands row-4">
                    {brands.map((value, index) => (
                        <Brand_Card brand={value} index={index} column={4} />
                    ))}
                </div>
            </div>
            <div className="content-big_sales-wrapper title_content-wrapper">
                <span className="title">Get Up To 70% Off</span>
                <div className="content-big_sales row-4">
                    {big_sales.map((value, index) => (
                        <SaleOff_Card sale={value} index={index} column={4} />
                    ))}
                </div>
            </div>
            <div className="products-wrapper title_content-wrapper">
                <span className="title">Weekly Popular Products</span>
                <div className="products scrollbar-custom row-4">
                    {weekly_products.map((value, index) => {
                        return (
                            <Card product={value} index={index} column={4} />
                        );
                    })}
                </div>
            </div>
            <div className="brand-wrapper">
                <div className="brand-content_wrapper">
                    <h1 className="brand-content-title">
                        {cashback_brand.title}
                    </h1>
                    <span className="brand-content-desc">
                        {cashback_brand.desc}
                    </span>
                    <div>
                        <button className="brand-content-btn">
                            Learn More
                        </button>
                    </div>
                </div>
                <img className="brand-image" src={cashback_brand.brand} />
            </div>
            <div className="products-wrapper title_content-wrapper">
                <span className="title">Most Selling Products</span>
                <div className="products scrollbar-custom row-4">
                    {most_selling_products.map((value, index) => {
                        return (
                            <Card product={value} index={index} column={4} />
                        );
                    })}
                </div>
            </div>
            <div className="trending_products-wrapper title_content-wrapper">
                <span className="title">Trending Products For You</span>
                <div className="trending_products row-2">
                    {trending_products.map((value, index) => {
                        return (
                            <Trending_Product_Card
                                item={value}
                                index={index}
                                column={2}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="best_selling_stores-wrapper title_content-wrapper">
                <span className="title">Best Selling Store</span>
                <div className="best_selling_stores row-4">
                    {best_selling_store.map((value, index) => {
                        return (
                            <Store_Card item={value} index={index} column={4} />
                        );
                    })}
                </div>
            </div>
            <div className="services_to_help-wrapper title_content-wrapper">
                <span className="title">Services To Help You Shop</span>
                <div className="services_to_help row-3">
                    {services_to_help.map((value, index) => {
                        return (
                            <Service_Help_Card
                                item={value}
                                index={index}
                                column={3}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
