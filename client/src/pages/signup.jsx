import { useState } from "react";
import { Link } from "react-router-dom";
import { auth_instance } from "../configs/axiosConfig";
import "./styles/form.scss";

export const SignUp = () => {
    const [email_phoneNumber, setEmail_PhoneNumber] = useState("");
    const [user_name, setUser_name] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassowrd, setRepeatPassword] = useState("");
    const [error, setError] = useState(null);
    const regex_email =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regex_phoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const regexPassword =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$.%^&*])[a-zA-Z0-9!@.#$%^&*]{4,10}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            error &&
            !error.email_phoneNumber &&
            !error.password &&
            !error.repeatPassowrd &&
            !error.user_name
        ) {
            const data = await auth_instance.post("/register", {
                email: email_phoneNumber.match(regex_email)
                    ? email_phoneNumber
                    : null,
                phone_number: email_phoneNumber.match(regex_phoneNumber)
                    ? email_phoneNumber
                    : null,
                user_name,
                password,
                confirm: repeatPassowrd,
            });
            console.log(data);
            /// update later
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="left-item">
                    <div className="wrapper">
                        <span>➤ Welcome my </span>
                        <span className="black-text">shopping cart.</span>
                        <span className="desc">
                            Register now to start shopping with my app 😍
                        </span>
                    </div>
                </div>
                <div className="right-item">
                    <div className="form-container">
                        <h1 className="Logo">Nvt</h1>
                        <div className="title">
                            <span className="title-desc">
                                Enter your information to register.
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
                                className="label-user_name"
                                htmlFor="user_name"
                            >
                                <span>User name</span>
                                <span className="form-error">
                                    {error && error.user_name}
                                </span>
                            </label>
                            <input
                                name="user_name"
                                type="text"
                                value={user_name}
                                onChange={(e) => setUser_name(e.target.value)}
                                onBlur={(e) => {
                                    if (e.target.value.length > 5)
                                        return setError({
                                            ...error,
                                            user_name: null,
                                        });
                                    else
                                        setError({
                                            ...error,
                                            user_name:
                                                "User name must be length > 4",
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
                            <label
                                className="label-password_repeat"
                                htmlFor="password_repeat"
                            >
                                <span>Repeat password</span>
                                <span className="form-error">
                                    {error && error.repeatPassowrd}
                                </span>
                            </label>
                            <input
                                name="password_repeat"
                                type="password"
                                value={repeatPassowrd}
                                onChange={(e) =>
                                    setRepeatPassword(e.target.value)
                                }
                                onBlur={(e) => {
                                    if (e.target.value == password) {
                                        return setError({
                                            ...error,
                                            repeatPassowrd: null,
                                        });
                                    } else
                                        setError({
                                            ...error,
                                            repeatPassowrd:
                                                "Repeat password is not same.",
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
                        <span className="register-link">
                            Already have an account?
                            <span>
                                <Link to="/login"> Login.</Link>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
