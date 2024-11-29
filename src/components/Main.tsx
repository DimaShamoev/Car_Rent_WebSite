import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Product from "../Pages/Product/Product";
import PageLoader from "./PageLoader";
import Shop from "../Pages/Shop/Shop";
import Pricing from "../Pages/Pricing/Pricing";
import Contact from "../Pages/Contact/Contact";

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
                    <Route path="/blog" element={<div>Add Blog Page</div>} />
                    <Route
                        path="/signIn"
                        element={<div>Add Sign In Page</div>}
                    />
                    <Route
                        path="/signUp"
                        element={<div>Add Sign Up Page</div>}
                    />
                </Routes>
            </Suspense>
        </main>
    );
};

export default Main;
