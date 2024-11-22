import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Overlay from "./components/Overlay";

const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <Header />
                    <Overlay />
                    <Main />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;


// ToDos
// 1 Add Pages
// 2 Add Load

// Link https://creativelayers.net/themes/boxcar-html/index-10.html#