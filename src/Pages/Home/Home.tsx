import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import AsideMenu from "../../components/AsideMenu";
import { FaCheckCircle, FaGasPump, FaRegEnvelope } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { TbManualGearboxFilled } from "react-icons/tb";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";

const Home: React.FunctionComponent = () => {
    // landing car rent options
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        usedCars: false,
        brands: false,
        models: false,
        price: false,
    });

    const handleOpenMenu = (menu: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };
    // ^ landing car rent options

    // Vehicle For LifeStyle
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            path: "img/life-style-car-5.png",
        },
        {
            name: "Minivan",
            path: "img/life-style-car-6.png",
        },
    ];
    // ^ Vehicle For LifeStyle

    // Offers
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
    // ^ Offers

    // Explore Cars Slider

    const [currentSlideIndex, SetCurrentSlideIndex] = React.useState<number>(0);

    const handleNext = () => {
        SetCurrentSlideIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
    };

    const handlePrev = () => {
        SetCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1
        );
    };

    const vehicleDownToUp = {
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
            price: 399,
        },
        {
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            mileage: 32.432,
            type: "Petrol",
            gear: "Automatic",
            img: "img/slider-car-3.jpg",
            price: 399,
        },
        {
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            mileage: 32.432,
            type: "Petrol",
            gear: "Automatic",
            img: "img/slider-car-4.jpg",
            price: 399,
        },
    ];

    // ^ Explore Cars Slider

    // Reports Slider

    interface IReportsSlides {
        id: number;
        text: string;
        img: string;
    }

    const reportsSlides: IReportsSlides[] = [
        {
            id: 1,
            text: "I'd suggest Mackle Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
            img: "img/report-1.jpg",
        },
        {
            id: 2,
            text: "I'd recommend Mackle Motors Nissan Glasgow South to anyone because the service from Patrick and the team was excellent!",
            img: "img/report-2.jpg",
        },
        {
            id: 3,
            text: "Great service from Patrick and the entire team at Mackle Motors Nissan Glasgow South—I'd definitely suggest them to a friend!",
            img: "img/report-3.jpg",
        },
    ];

    const [reportSlide, setReportSlide] = useState<number>(0);

    const handleReportSlide = (index: number) => {
        setReportSlide(index);
    };

    // ^Reports Slider

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

            <motion.div
                className="vehicle-slider"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="vehicle-title">Explore All Vehicles</div>

                <motion.div
                    className="vehicle-slider-track"
                    variants={vehicleDownToUp}
                >
                    {vehicles.map((vehicle, index) => (
                        <div
                            className="vehicle-card"
                            key={index}
                            style={{
                                transform: `translateX(-${
                                    currentSlideIndex * 369
                                }px)`,
                            }}
                        >
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
                                        <p>
                                            <FaGasPump />
                                        </p>
                                        <p>{vehicle.mileage} Miles</p>
                                    </span>
                                    <span>
                                        <p>
                                            <IoSpeedometer />
                                        </p>
                                        <p>{vehicle.type}</p>
                                    </span>
                                    <span>
                                        <p>
                                            <TbManualGearboxFilled />
                                        </p>
                                        <p>{vehicle.gear}</p>
                                    </span>
                                </div>
                                <div className="line"></div>
                                <div className="vehicle-order">
                                    <span>${vehicle.price}</span>
                                    <span>
                                        <a href="#">View Details</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className="vehicle-buttons">
                    <div className="vehicle-prev-btn vehicle-btn">
                        <button
                            onClick={handlePrev}
                            disabled={currentSlideIndex === 0}
                        >
                            <GrFormPrevious />
                        </button>
                    </div>
                    <div className="vehicle-prev-btn vehicle-btn">
                        <button
                            onClick={handleNext}
                            disabled={currentSlideIndex === vehicles.length - 1}
                        >
                            <GrFormNext />
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="cars-blog-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div className="car-blog car-blog-1" variants={downToUp}>
                    <div className="car-blog-title">
                        <p>Are You Looking</p>
                        <p>For a Car ?</p>
                    </div>
                    <div className="car-blog-txt">
                        <p>We are committed to providing our customers with</p>
                        <p>exceptional service.</p>
                    </div>
                    <div className="car-blog-bottom">
                        <div className="car-blog-btn">
                            <button>
                                Get Started <MdOutlineArrowOutward />
                            </button>
                        </div>
                        <div className="car-blog-icon">
                            <img src="img/car-blog-1.svg" alt="" />
                        </div>
                    </div>
                </motion.div>

                <motion.div className="car-blog car-blog-2" variants={upToDown}>
                    <div className="car-blog-title">
                        <p>Do You Want to</p>
                        <p>Sell a Car ?</p>
                    </div>
                    <div className="car-blog-txt">
                        <p>We are committed to providing our customers with</p>
                        <p>exceptional service.</p>
                    </div>
                    <div className="car-blog-bottom">
                        <div className="car-blog-btn">
                            <button>
                                Get Started <MdOutlineArrowOutward />
                            </button>
                        </div>
                        <div className="car-blog-icon">
                            <img src="img/car-blog-2.svg" alt="" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="car-banner-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div className="car-banner-img-side" variants={downToUp}>
                    <img src="img/banner-car1.jpg" alt="" />
                </motion.div>

                <motion.div
                    className="car-banner-txt-side-wrapper"
                    variants={downToUp}
                >
                    <div className="car-banner-txt-side">
                        <div className="car-banner-title">
                            <p>Online, in-person,</p>
                            <p>everywhere</p>
                        </div>

                        <div className="car-banner-txt">
                            Choose from thousands of vehicles from multiple
                            brands and buy online with Click & Drive, or visit
                            us at one of our dealerships today.
                        </div>

                        <div className="car-banner-btn">
                            <button>
                                Find Out More <MdOutlineArrowOutward />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="boxcar-facts-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
            >
                <motion.div
                    className="boxcar-fact boxcar-fact-1"
                    variants={upToDown}
                >
                    <p>834M</p>
                    <span>CARS FOR SALE</span>
                </motion.div>

                <motion.div
                    className="boxcar-fact boxcar-fact-1"
                    variants={downToUp}
                >
                    <p>732M</p>
                    <span>DEALER REVIEWS</span>
                </motion.div>

                <motion.div
                    className="boxcar-fact boxcar-fact-1"
                    variants={upToDown}
                >
                    <p>90M</p>
                    <span>VISITORS PER DAY</span>
                </motion.div>

                <motion.div
                    className="boxcar-fact boxcar-fact-1"
                    variants={downToUp}
                >
                    <p>236M</p>
                    <span>VERIFIED DEALERS</span>
                </motion.div>
            </motion.div>

            <motion.div
                className="reports-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div
                    className="reports-left-side"
                    variants={textAnimation}
                >
                    <div className="reports-left-side-title">
                        <p>What our</p>
                        <p>customers say</p>
                    </div>
                    <div className="reports-left-side-rate">
                        <div className="reports-rate-status">Great</div>
                        <div className="reports-rate">
                            <BiSolidStar className="reports-rate-star" />
                            <BiSolidStar className="reports-rate-star" />
                            <BiSolidStar className="reports-rate-star" />
                            <BiSolidStar className="reports-rate-star" />
                            <BiSolidStar className="reports-rate-star" />
                        </div>
                        <div className="reports-count">
                            <span>Based on 5,801 reviews</span>
                        </div>
                        <div className="rates-icon">
                            <BiSolidStar className="rate-icon-star" />
                            <span>Trustpilot</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="reports-right-side"
                    variants={rightToLeft}
                >
                    <div className="reports-right-side-top">
                        <div className="right-side-rate">
                            <span>
                                <BiSolidStar className="right-side-star" />
                                <BiSolidStar className="right-side-star" />
                                <BiSolidStar className="right-side-star" />
                                <BiSolidStar className="right-side-star" />
                                <BiSolidStar className="right-side-star" />
                            </span>
                            <span>
                                <FaCheckCircle /> Verified
                            </span>
                        </div>
                        <div className="right-side-designer-info">
                            <p>Ali Tufas</p>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className="reports-right-side-bottom">
                        <div className="reports-slider-container">
                            <div className="reports-slider-content">
                                {reportsSlides.map((slide, index) => (
                                    <div
                                        key={slide.id}
                                        className={`slide-text ${
                                            reportSlide === index
                                                ? "visible"
                                                : "hidden"
                                        }`}
                                    >
                                        {slide.text}
                                    </div>
                                ))}
                            </div>

                            <div className="reports-slider-btns">
                                {reportsSlides.map((slide, index) => (
                                    <img
                                        key={slide.id}
                                        src={slide.img}
                                        alt={`Profile ${slide.id}`}
                                        className={`reports-slider-profile-pic ${
                                            reportSlide === index
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => handleReportSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="latest-blogs-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div className="blogs-block-title" variants={upToDown}>
                    Latest Blog Posts
                </motion.div>
                <div className="blogs-list">
                    <motion.div
                        className="blog-block blog-block-1"
                        variants={downToUp}
                    >
                        <div className="blog-block-img">
                            <img src="img/blog-car-1.jpg" alt="" />
                        </div>
                        <div className="blog-block-info">
                            <div className="blog-block-author">Ali Tufas</div>

                            <div className="block-block-dot"></div>

                            <div className="blog-block-date">
                                April 20, 2023
                            </div>
                        </div>
                        <div className="blog-block-txt">
                            This Long-Awaited Technology May Finally Change the
                            World
                        </div>
                    </motion.div>

                    <motion.div
                        className="blog-block blog-block-2"
                        variants={downToUp}
                    >
                        <div className="blog-block-img">
                            <img src="img/blog-car-2.jpg" alt="" />
                        </div>
                        <div className="blog-block-info">
                            <div className="blog-block-author">Ali Tufas</div>

                            <div className="block-block-dot"></div>

                            <div className="blog-block-date">
                                April 20, 2023
                            </div>
                        </div>
                        <div className="blog-block-txt">
                            This Long-Awaited Technology May Finally Change the
                            World
                        </div>
                    </motion.div>

                    <motion.div
                        className="blog-block blog-block-3"
                        variants={downToUp}
                    >
                        <div className="blog-block-img">
                            <img src="img/blog-car-3.jpg" alt="" />
                        </div>
                        <div className="blog-block-info">
                            <div className="blog-block-author">Ali Tufas</div>

                            <div className="block-block-dot"></div>

                            <div className="blog-block-date">
                                April 20, 2023
                            </div>
                        </div>
                        <div className="blog-block-txt">
                            This Long-Awaited Technology May Finally Change the
                            World
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="premium-brands-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div
                    className="premium-brand-block-head"
                    variants={upToDown}
                >
                    <div className="premium-brand-title">
                        Explore Our Premium Brands
                    </div>
                    <div className="brands-explore-btn">
                        <a href="/product">
                            Show All Brands <MdOutlineArrowOutward />
                        </a>
                    </div>
                </motion.div>

                <motion.div className="premium-brands-list" variants={downToUp}>
                    <div className="premium-brand-block">
                        <div className="premium-brand-img">
                            <img src="img/brand-car-1.png" alt="" />
                        </div>
                        <div className="premium-brand-name">AUDI</div>
                    </div>

                    <div className="premium-brand-block">
                        <div className="premium-brand-img">
                            <img src="img/brand-car-2.png" alt="" />
                        </div>
                        <div className="premium-brand-name">BWM</div>
                    </div>

                    <div className="premium-brand-block">
                        <div className="premium-brand-img">
                            <img src="img/brand-car-3.png" alt="" />
                        </div>
                        <div className="premium-brand-name">FORD</div>
                    </div>

                    <div className="premium-brand-block">
                        <div className="premium-brand-img">
                            <img src="img/brand-car-4.png" alt="" />
                        </div>
                        <div className="premium-brand-name">Mercedes-Benz</div>
                    </div>

                    <div className="premium-brand-block">
                        <div className="premium-brand-img">
                            <img src="img/brand-car-5.png" alt="" />
                        </div>
                        <div className="premium-brand-name">PEUGEOT</div>
                    </div>

                    <div className="premium-brand-block">
                        <div className="premium-brand-img">
                            <img src="img/brand-car-6.png" alt="" />
                        </div>
                        <div className="premium-brand-name">VOLKSWAGEN</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="contact-us-block"
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
            >
                <motion.div
                    className="contact-us-img-side"
                    variants={textAnimation}
                >
                    <img src="img/contact-us-section1.jpg" alt="" />
                </motion.div>

                <motion.div
                    className="contact-us-text-side"
                    variants={rightToLeft}
                >
                    <div className="contact-us-text-side-wrapper">
                        <div className="contact-us-block-info">
                            <div className="contact-us-title">
                                Have more questions? Don't hesitate to reach us
                            </div>
                            <div className="contact-us-address">
                                <p>329 Queensberry Street, North</p>
                                <p>Melbourne VIC3051, Australia.</p>
                            </div>
                            <div className="contact-mail-phone">
                                <div className="phone-btn">
                                    <button>
                                        <GiSmartphone className="contact-icon" /> <span>+987 654 321 000</span>
                                    </button>
                                </div>
                                <div className="mail-btn">
                                    <button>
                                        <FaRegEnvelope className="contact-icon" /> <span>contact.main@mail.com</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="contact-us-btn">
                            <a href="/contact">
                                Contact Us <MdOutlineArrowOutward />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
