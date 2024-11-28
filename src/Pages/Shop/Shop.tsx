import React from "react";
import "./Shop.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Shop: React.FunctionComponent = () => {
    interface IShopItems {
        id: number;
        img: string;
        stars: number;
        desc: string;
        price: number;
    }

    const shopItems: IShopItems[] = [
        {
            id: 1,
            img: "img/shop-item-1.png",
            stars: 3,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 2,
            img: "img/shop-item-2.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 3,
            img: "img/shop-item-3.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 4,
            img: "img/shop-item-4.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 5,
            img: "img/shop-item-5.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 6,
            img: "img/shop-item-6.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 7,
            img: "img/shop-item-7.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 8,
            img: "img/shop-item-8.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
        {
            id: 9,
            img: "img/shop-item-9.png",
            stars: 5,
            desc: "12v Compact Battery Jump Starter",
            price: 399,
        },
    ];

    return (
        <div className="shop-page">
            <div className="shop-page-title">Shop List</div>

            <div className="shop-page-filter-product">
                <div className="shop-page-filter-block">
                    <div className="shop-page-filter-block-wrapper">
                        <div className="shop-categories-list">
                            <span>Categories</span>
                            <ul>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                                <li>
                                    <input type="checkbox" /> Accessories
                                </li>
                            </ul>
                        </div>

                        <div className="shop-filter-line"></div>

                        <div className="shop-price-block">
                            <div className="shop-price-title">Price</div>
                            <div className="shop-min-max-price-block">
                                <div className="shop-min-price-block">
                                    <span className="price-title">Min Price</span>
                                    <span>100</span>
                                </div>
                                <div className="shop-min-price-block">
                                    <span className="price-title">Max Price</span>
                                    <span>100</span>
                                </div>
                            </div>
                            <div className="shop-price-range">
                                <input type="range" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-page-product-block">

                    <div className="shop-page-product-block-wrapper">

                        <div className="shop-page-product-top">
                            <div className="shop-product-count">
                                Showing 1 to 16 of 1559 vehicles
                            </div>
                            <div className="shop-product-sort-block">
                                <span className="sort-title">Best Match</span> <span className="sort-btn">Any Makes <IoIosArrowDown /></span>
                            </div>
                        </div>

                        <div className="shop-page-product-bottom">

                            {shopItems.map((item) => (
                                <div className="shop-item" key={item.id}>
                                    <div className="shop-item-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="shop-item-stars">
                                        {Array.from({ length: item.stars }, (_, i) => (
                                            <span key={i}><FaStar /></span> 
                                        ))}
                                    </div>
                                    <div className="shop-item-desc">
                                        {item.desc}
                                    </div>
                                    <div className="shop-item-price">
                                        ${item.price}
                                    </div>
                                    <div className="but-btn">
                                        <span><IoCartOutline /></span> Add To Cart
                                    </div>
                                </div>
                            ))}


                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Shop;
