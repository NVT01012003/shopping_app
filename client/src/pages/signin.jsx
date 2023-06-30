import "./styles/form.scss";
import Google from "../imgs/google.png";
import Facebook from "../imgs/facebook.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth_instance } from "../configs/axiosConfig";
import { auth_api } from "../configs/apis";

export const SignIn = () => {
    const [email_phoneNumber, setEmail_PhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const regex_email =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regex_phoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const regexPassword =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$.%^&*])[a-zA-Z0-9!@.#$%^&*]{4,10}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error && !error.email_phoneNumber && !error.password) {
            const data = await auth_instance.post("/login", {
                email: email_phoneNumber.match(regex_email)
                    ? email_phoneNumber
                    : null,
                phone_number: email_phoneNumber.match(regex_phoneNumber)
                    ? email_phoneNumber
                    : null,
                password,
            });
            console.log(data);
            /// update later
        }
    };

    const handleGoogleAuth = async (e) => {
        e.preventDefault();
        window.location.assign(`${auth_api.auth}/google`);
        /// update later
    };

    const handleFacebookAuth = async (e) => {
        e.preventDefault();
        window.location.assign(`${auth_api.auth}/facebook`);
        /// update later
    };
    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="left-item">
                    <div className="wrapper">
                        <span>➤ Online </span>
                        <span className="black-text">shopping cart.</span>
                        <span className="desc">Easy shopping at home 🤩</span>
                    </div>
                </div>
                <div className="right-item">
                    <div className="form-container">
                        <h1 className="Logo">Nvt</h1>
                        <div className="title">
                            <span className="item">Hey, hello 👋</span>
                            <span className="title-desc">
                                Enter the infomation you entered while
                                registering.
                            </span>
                        </div>
                        <form className="form">
                            <label
                                className="label-email_phoneNumber"
                                htmlFor="email_phoneNumber"
                            >
                                <span>Email / Phone Number</span>
                                <span className="form-error">
                                    {error && error.email_phoneNumber}
                                </span>
                            </label>
                            <input
                                name="email_phoneNumber"
                                type="text"
                                value={email_phoneNumber}
                                onChange={(e) =>
                                    setEmail_PhoneNumber(e.target.value)
                                }
                                onBlur={(e) => {
                                    if (
                                        e.target.value.match(regex_email) ||
                                        e.target.value.match(regex_phoneNumber)
                                    )
                                        return setError({
                                            ...error,
                                            email_phoneNumber: null,
                                        });
                                    else
                                        setError({
                                            ...error,
                                            email_phoneNumber: "*Invalid.",
                                        });
                                }}
                            />
                            <label
                                className="label-password"
                                htmlFor="password"
                            >
                                <span>Password</span>
                                <span className="form-error">
                                    {error && error.password}
                                </span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={(e) => {
                                    const validate_pass = e.target.value;
                                    if (validate_pass.length < 4)
                                        return setError({
                                            ...error,
                                            password:
                                                "Password must be length > 3.",
                                        });
                                    else if (validate_pass.length > 10)
                                        return setError({
                                            ...error,
                                            password:
                                                "Password must be length < 11.",
                                        });
                                    else if (
                                        !validate_pass.match(regexPassword)
                                    )
                                        return setError({
                                            ...error,
                                            password:
                                                "Password must contain letter, number and 1 special character.",
                                        });
                                    else
                                        return setError({
                                            ...error,
                                            password: null,
                                        });
                                }}
                            />
                            <button
                                className="btn-submit"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </form>
                        <span className="or">Or</span>
                        <button
                            className="oauth-google"
                            onClick={handleGoogleAuth}
                        >
                            <img src={Google} />
                            <span>Sign in with google</span>
                        </button>
                        <button
                            className="oauth-facebook"
                            onClick={handleFacebookAuth}
                        >
                            <img src={Facebook} />
                            <span>Sign in with facebook</span>
                        </button>
                        <span className="register-link">
                            Don't have a account?
                            <span>
                                <Link to="/"> Register now.</Link>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
