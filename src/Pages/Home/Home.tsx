import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import AsideMenu from "../../components/AsideMenu";
import { FaGasPump } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { TbManualGearboxFilled } from "react-icons/tb";

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

    const textAnimation = {
        hidden: {
            x: -200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
            },
        },
    };

    const upToDown = {
        hidden: {
            y: -200,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
            },
        },
    };

    const downToUp = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
            },
        },
    };

    const rightToLeft = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
            },
        },
    };

    interface IVehicles {
        name: string;
        title: string;
        mileage: number;
        type: string;
        gear: string;
        img: string;
        price: number;
    }

    const vehicles: IVehicles[] = [
        {
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            mileage: 32.432,
            type: "Petrol",
            gear: "Automatic",
            img: "img/slider-car-1.jpg",
            price: 399,
        },
        {
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            mileage: 32.432,
            type: "Petrol",
            gear: "Automatic",
            img: "img/slider-car-2.jpg",
            price: 399
        },
        {
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            mileage: 32.432,
            type: "Petrol",
            gear: "Automatic",
            img: "img/slider-car-3.jpg",
            price: 399
        },
        {
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            mileage: 32.432,
            type: "Petrol",
            gear: "Automatic",
            img: "img/slider-car-4.jpg",
            price: 399
        }
    ];

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
                <div className="car-lists">
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
                            <div
                                className={`lifestyle-car-name ${
                                    hoveredIndex === index ? "hovered" : ""
                                }`}
                            >
                                <p>{car.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <motion.div
                className="offers-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.55 }}
            >
                <motion.div className="offers-title" variants={textAnimation}>
                    <p>We're BIG on what</p>
                    <p>matters to you</p>
                </motion.div>
                <motion.div
                    className="offers"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <motion.div
                        className="offer-card offer-1"
                        variants={upToDown}
                    >
                        <div className="offer-card-img">
                            <img src="img/offer-icon-1.svg" alt="" />
                        </div>
                        <div className="offer-card-title">
                            Special Financing Offers
                        </div>
                        <div className="offer-card-txt">
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </div>
                    </motion.div>

                    <motion.div
                        className="offer-card offer-2"
                        variants={rightToLeft}
                    >
                        <div className="offer-card-img">
                            <img src="img/offer-icon-2.svg" alt="" />
                        </div>
                        <div className="offer-card-title">
                            Trusted Car Dealership
                        </div>
                        <div className="offer-card-txt">
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </div>
                    </motion.div>

                    <motion.div
                        className="offer-card offer-3"
                        variants={downToUp}
                    >
                        <div className="offer-card-img">
                            <img src="img/offer-icon-3.svg" alt="" />
                        </div>
                        <div className="offer-card-title">
                            Transparent Pricing
                        </div>
                        <div className="offer-card-txt">
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </div>
                    </motion.div>

                    <motion.div
                        className="offer-card offer-4"
                        variants={rightToLeft}
                    >
                        <div className="offer-card-img">
                            <img src="img/offer-icon-4.svg" alt="" />
                        </div>
                        <div className="offer-card-title">
                            Expert Car Service
                        </div>
                        <div className="offer-card-txt">
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="vehicle-slider">
                <div className="vehicle-title"></div>
                <div className="vehicle-types"></div>
                <div className="vehicle-slider-track">
                    {vehicles.map((vehicle, index) => (
                        <div className="vehicle-card" key={index}>
                            <div className="vehicle-img-block">
                                <img src={vehicle.img} alt="" />
                            </div>
                            <div className="car-stats">
                                <div className="vehicle-name-block">
                                    <p>{vehicle.name}</p>
                                </div>
                                <div className="vehicle-title-block">
                                    <p>{vehicle.title}</p>
                                </div>
                                <div className="line"></div>
                                <div className="vehicle-info">
                                    <span>
                                        <p><FaGasPump /></p>
                                        <p>{vehicle.mileage} Miles</p>
                                    </span>
                                    <span>
                                        <p><IoSpeedometer /></p>
                                        <p>{vehicle.type}</p>
                                    </span>
                                    <span>
                                        <p><TbManualGearboxFilled /></p>
                                        <p>{vehicle.gear}</p>
                                    </span>
                                </div>
                                <div className="line"></div>
                                <div className="vehicle-order">
                                    <span>${vehicle.price}</span>
                                    <span><a href="#">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="vehicle-slider-btn"></div>
            </div>
        </div>
    );
};

export default Home;
