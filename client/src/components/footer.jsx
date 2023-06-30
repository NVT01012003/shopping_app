import Cart_logo from "../imgs/cart-icon.png";
import Gift from "../imgs/gift-box.png";
import Briefcase from "../imgs/briefcase.png";
import Question_mark from "../imgs/question-mark.png";
import "./styles/footer.scss";

const desc = `Maximum deals. Maximum fun. Shop our biggest sale of the year! 
Download AliExpress for unbeatable deals🌟, millions of quality items📱, exciting new games🎮& surprising giveaways🎁!`;
const accepted_payments = [
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
        name: "stripe",
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
        name: "stripe",
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
        name: "stripe",
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
        name: "stripe",
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
        name: "stripe",
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
        name: "stripe",
    },
];
const department = [
    {
        name: "Fashion",
        link: "/categories/fashion",
    },
    {
        name: "Education Product",
        link: "/categories/fashion",
    },
    {
        name: "Fronzen Food",
        link: "/categories/fashion",
    },
    {
        name: "Beverages",
        link: "/categories/fashion",
    },
    {
        name: "Organic Grocery",
        link: "/categories/fashion",
    },
    {
        name: "Office Supplies",
        link: "/categories/fashion",
    },
    {
        name: "Beauty Products",
        link: "/categories/fashion",
    },
    {
        name: "Books",
        link: "/categories/fashion",
    },
    {
        name: "Electronics & Gadget",
        link: "/categories/fashion",
    },
    {
        name: "Travel Accesories",
        link: "/categories/fashion",
    },
    {
        name: "Fitness",
        link: "/categories/fashion",
    },
    {
        name: "Sneakers",
        link: "/categories/fashion",
    },
    {
        name: "Toys",
        link: "/categories/fashion",
    },
    {
        name: "Furniture",
        link: "/categories/fashion",
    },
];
const about_us = [
    {
        name: "About Nvt",
        link: "/about_us",
    },
    {
        name: "Careers",
        link: "/about_us",
    },
    {
        name: "News & Blog",
        link: "/about_us",
    },
    {
        name: "Help",
        link: "/about_us",
    },
    {
        name: "Press Center",
        link: "/about_us",
    },
    {
        name: "Shop By Location",
        link: "/about_us",
    },
    {
        name: "Nvt Brands",
        link: "/about_us",
    },
    {
        name: "AFfiliate & Partners",
        link: "/about_us",
    },
    {
        name: "Ideas & Guides",
        link: "/about_us",
    },
];
const services = [
    {
        name: "Gift Card",
        link: "/services/gift_card",
    },
    {
        name: "Mobile App",
        link: "/services/gift_card",
    },
    {
        name: "Shipping & Delivery",
        link: "/services/gift_card",
    },
    {
        name: "Order Pickup",
        link: "/services/gift_card",
    },
    {
        name: "Account Sigup",
        link: "/services/gift_card",
    },
];
const help = [
    {
        name: "Nvt Help",
        link: "/help",
    },
    {
        name: "Returns",
        link: "/help",
    },
    {
        name: "Track Orders",
        link: "/help",
    },
    {
        name: "Contact Us",
        link: "/help",
    },
    {
        name: "Feedback",
        link: "/help",
    },
    {
        name: "Security & Fraud",
        link: "/help",
    },
];

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper row-3">
                <div className="footer-item_1 column-3">
                    <div className="footer-item_1-logo">
                        <img src={Cart_logo} />
                        <h1>Nvt</h1>
                    </div>
                    <span className="footer-item_1-desc">{desc}</span>
                    <div className="footer-item_1-accepted_payments">
                        <span>Accepted Payments</span>
                        <div className="accepted_payments-logo">
                            {accepted_payments.map((value, index) => (
                                <img
                                    src={value.logo}
                                    alt={value.name}
                                    className="logo"
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-item_2 column-3">
                    <div className="footer-item_2-wrapper row-2">
                        <div className="footer-item column-2">
                            <h3>Department</h3>
                            <div className="item-wrapper">
                                {department.map((value, index) => (
                                    <span key={index}>{value.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="footer-item column-2">
                            <h3>About Us</h3>
                            <div className="item-wrapper">
                                {about_us.map((value, index) => (
                                    <span key={index}>{value.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item_3 column-3">
                    <div className="footer-item_3-wrapper row-2">
                        <div className="footer-item column-2">
                            <h3>Services</h3>
                            <div className="item-wrapper">
                                {services.map((value, index) => (
                                    <span key={index}>{value.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="footer-item column-2">
                            <h3>Help</h3>
                            <div className="item-wrapper">
                                {help.map((value, index) => (
                                    <span key={index}>{value.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-item">
                    <span>
                        <img src={Briefcase} />
                        Become Seller
                    </span>
                    <span>
                        <img src={Gift} />
                        Gift Card
                    </span>
                    <span>
                        <img src={Question_mark} />
                        Help Center
                    </span>
                </div>
                <div className="footer-bottom-item">
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="footer-bottom-item">
                    <span>All Right reserved by Musemind | 2023</span>
                </div>
            </div>
        </div>
    );
};
