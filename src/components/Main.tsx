import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Product from "../Pages/Product/Product";
import PageLoader from "./PageLoader";
import Shop from "../Pages/Shop/Shop";
import Pricing from "../Pages/Pricing/Pricing";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const Home = React.lazy(() => import("../Pages/Home/Home"));

const Main: React.FunctionComponent = () => {
    return (
        <main className="main">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/pricing"
                        element={<Pricing />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route path="/blog" element={<Blog />} />
                    <Route
                        path="/signIn"
                        element={<SignIn />}
                    />
                    <Route
                        path="/signUp"
                        element={<SignUp />}
                    />
                </Routes>
            </Suspense>
        </main>
    );
};

export default Main;
