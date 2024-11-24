import { Link } from "react-router-dom";
import React from "react";
import useAsideAction from "../Hooks/useAsideAction";

const Header: React.FunctionComponent = () => {
    const { setAsideState } = useAsideAction();

    return (
        <header className="Header">
            <div className="logo">
                <Link to="/">
                    <img src="img/header-logo.svg" alt="" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="product">Products</Link>
                    </li>
                    <li>
                        <Link to="shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <div className="sign-in">
                <Link className="sign-in-btn" to="/signIn">
                    Sign In
                </Link>
                <Link className="sign-up-btn" to="/signUp">
                    Sign Up
                </Link>
            </div>
            <div className="expand-menu-block" onClick={setAsideState}>
                <div className="top-line"></div>
                <div className="bottom-line"></div>
            </div>
        </header>
    );
};

export default Header;
