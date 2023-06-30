import Cart_logo from "../imgs/cart-icon.png";
import User from "../imgs/user.png";
import Shopping_cart from "../imgs/shopping-cart.png";
import Arrow_down from "../imgs/arrow-down-sign-to-navigate.png";
import Search from "../imgs/search.png";
import "./styles/navbar.scss";
import { useEffect, useRef, useState } from "react";

const popular_categories = [
    {
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
];

export const NavBar = () => {
    const [focusInput, setFocusInput] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const unfocus = () => {
            console.log({ focusInput });
            if (focusInput) {
                console.log(true);
                return inputRef.current.focus();
            } else {
                console.log(false);
                inputRef.current.blur();
            }
        };
        return unfocus();
    }, [focusInput]);

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={Cart_logo} />
                <h1>Nvt</h1>
            </div>
            <div className="navbar-item">
                <span className="-item">
                    {"Categories "}
                    <img src={Arrow_down} />
                </span>
                <span className="-item">Deals</span>
                <span className="-item">What's New</span>
                <span className="-item">Delivery</span>
            </div>
            <div className="navbar-item">
                <div
                    className="navbar-search_input-wrapper"
                    onBlur={() => {
                        setFocusInput(false);
                    }}
                >
                    <div className="search_input-wrapper">
                        <input
                            className="search_input"
                            placeholder="Search Product"
                            type="text"
                            ref={inputRef}
                            onClick={() => setFocusInput(true)}
                        />
                        <img src={Search} />
                    </div>
                    <div className="popular-categories">
                        <span className="popular-categories-title">
                            Popular Categories
                        </span>
                        <div className="popular-categories-content row-2">
                            {popular_categories.map((value, index) => {
                                return (
                                    <div
                                        className="popular-categories-item column-2"
                                        key={index}
                                        onClick={(e) => {
                                            alert("abc");
                                            e.preventDefault();
                                        }}
                                    >
                                        <img src={value.image} />
                                        <div>
                                            <span>{value.category}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="navbar-item-wrapper">
                    <div className="navbar-item-wrapper-tem">
                        <img src={Shopping_cart} />
                        <span> Cart</span>
                    </div>
                    <div className="navbar-item-wrapper-tem">
                        <img src={User} />
                        <span> Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
