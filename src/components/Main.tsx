import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Product from "../Pages/Product/Product";

const Home = React.lazy(() => import("../Pages/Home/Home"));

const Main: React.FunctionComponent = () => {
    return (
        <main className="main">
            <Suspense fallback={<div>Add Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/shop" element={<div>Add Shop Page</div>} />
                    <Route
                        path="/pricing"
                        element={<div>Add Pricing Page</div>}
                    />
                    <Route
                        path="/contact"
                        element={<div>Add Contact Page</div>}
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
