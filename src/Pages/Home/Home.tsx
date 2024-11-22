import React, { useState } from "react";
import "./Home.css";
import AsideMenu from "../../components/AsideMenu";

const Home: React.FunctionComponent = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        usedCars: false,
        brands: false,
        models: false,
        price: false,
    });

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleOpenMenu = (menu: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const handleMouseOn = (index: number) => {
        setHoveredIndex(index);
    };
    
    const handleMouseOff = () => {
        setHoveredIndex(null);
    };

    interface ICarsProps {
        name: string;
        path: string;
    }

    const cars: ICarsProps[] = [
        {
            name: "Sedan",
            path: "img/life-style-car-1.png",
        },
        {
            name: "Coupe",
            path: "img/life-style-car-2.png",
        },
        {
            name: "Suv",
            path: "img/life-style-car-3.png",
        },
        {
            name: "Truck",
            path: "img/life-style-car-4.png",
        },
        {
            name: "HRV",
            path: "/public/img/life-style-car-5.png",
        },
        {
            name: "Minivan",
            path: "img/life-style-car-6.png",
        },
    ];

    const [count, setCount] = useState<number>(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
        setCount((prev) => prev + 1); // Update the state every 100ms
        }, 5000);

        return () => {
            if (count === 300) clearInterval(interval)
        }; // Cleanup on component unmount
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="home_page">
            <AsideMenu />

            <div className="home_landing">
                <div className="home_landing-txt-1">
                    Find Cars For Rent Near You
                </div>
                <div className="home_landing-txt-2">Find Your Perfect Car</div>
            </div>

            <div className="rent_car_controller">
                <div className="rent_car_controller-row">
                    <ul>
                        <li>
                            <span
                                className="rent_car_property"
                                onClick={() => handleOpenMenu("usedCars")}
                            >
                                Used Cars{" "}
                                <i
                                    className={`bx bxs-chevron-up ${
                                        openMenus.usedCars ? "rotated" : ""
                                    }`}
                                ></i>
                                <div
                                    className={`rent_car_list ${
                                        openMenus.usedCars ? "active" : ""
                                    }`}
                                >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span
                                className="rent_car_property"
                                onClick={() => handleOpenMenu("brands")}
                            >
                                Brands{" "}
                                <i
                                    className={`bx bxs-chevron-up ${
                                        openMenus.brands ? "rotated" : ""
                                    }`}
                                ></i>
                                <div
                                    className={`rent_car_list ${
                                        openMenus.brands ? "active" : ""
                                    }`}
                                >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span
                                className="rent_car_property"
                                onClick={() => handleOpenMenu("models")}
                            >
                                Models{" "}
                                <i
                                    className={`bx bxs-chevron-up ${
                                        openMenus.models ? "rotated" : ""
                                    }`}
                                ></i>
                                <div
                                    className={`rent_car_list ${
                                        openMenus.models ? "active" : ""
                                    }`}
                                >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span
                                className="rent_car_property"
                                onClick={() => handleOpenMenu("price")}
                            >
                                Price{" "}
                                <i
                                    className={`bx bxs-chevron-up ${
                                        openMenus.price ? "rotated" : ""
                                    }`}
                                ></i>
                                <div
                                    className={`rent_car_list ${
                                        openMenus.price ? "active" : ""
                                    }`}
                                >
                                    <span>prop1</span>
                                    <span>prop2</span>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span className="search-btn">
                                Search <i className="bx bx-search-alt-2"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lifestyle-cars-list">
                <div className="car-list-title">
                    A Vehicle For Every Lifestyle
                </div>
                <div
                    className="car-lists"
                >
                    {cars.map((car, index) => (
                        <div
                            key={index}
                            className="lifestyle-car"
                            onMouseEnter={() => handleMouseOn(index)}
                            onMouseLeave={handleMouseOff}
                        >
                            <div className="lifestyle-car-img">
                                <img src={car.path} alt="" />
                            </div>
                            <div className={`lifestyle-car-name ${ hoveredIndex === index ? 'hovered' : '' }`}>
                                <p>{car.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {count}
        </div>
    );
};

export default Home;
