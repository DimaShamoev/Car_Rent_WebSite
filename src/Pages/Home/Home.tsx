import React, { useState } from "react";
import "./Home.css";
import AsideMenu from "../../components/AsideMenu";

const Home: React.FunctionComponent = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        usedCars: false,
        brands: false,
        models: false,
        price: false
    });

    const handleOpenMenu = (menu: string) => {
        setOpenMenus(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    return (
        <div className="home_page">
            <AsideMenu />

            <div className="home_landing">
                <div className="home_landing-txt-1">Find Cars For Rent Near You</div>
                <div className="home_landing-txt-2">Find Your Perfect Car</div>
            </div>

            <div className="rent_car_controller">
                <div className="rent_car_controller-row">
                    <ul>
                        <li>
                            <span className="rent_car_property" onClick={() => handleOpenMenu("usedCars")}>
                                Used Cars <i className={`bx bxs-chevron-up ${openMenus.usedCars ? 'rotated' : ''}`}></i>
                                <div className={`rent_car_list ${openMenus.usedCars ? 'active' : ''}`} >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span className="rent_car_property" onClick={() => handleOpenMenu("brands")}>
                                Brands <i className={`bx bxs-chevron-up ${openMenus.brands ? 'rotated' : ''}`}></i>
                                <div className={`rent_car_list ${openMenus.brands ? 'active' : ''}`} >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span className="rent_car_property" onClick={() => handleOpenMenu("models")}>
                                Models <i className={`bx bxs-chevron-up ${openMenus.models ? 'rotated' : ''}`}></i>
                                <div className={`rent_car_list ${openMenus.models ? 'active' : ''}`} >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span className="rent_car_property" onClick={() => handleOpenMenu("price")}>
                                Price <i className={`bx bxs-chevron-up ${openMenus.price ? 'rotated' : ''}`}></i>
                                <div className={`rent_car_list ${openMenus.price     ? 'active' : ''}`} >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span className="search-btn">Search <i className="bx bx-search-alt-2"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
