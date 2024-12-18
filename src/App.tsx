import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import AsideMenu from "./components/AsideMenu";

const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <Header />
                    <Overlay />
                    <AsideMenu />
                    <Main />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;