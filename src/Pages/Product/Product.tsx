import React from "react";
import "./Product.css"
import { MdKeyboardArrowDown } from "react-icons/md";

const Product: React.FunctionComponent = () => {
    interface IProductVehicles {
        id: number;
        type: string;
        name: string;
        title: string;
        millage: number;
        gasType: string;
        gear: string;
        price: number;
        img: string;
    }

    const productVehicles: IProductVehicles[] = [
        {
            id: 1,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 2,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 3,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 4,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 5,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 6,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 7,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 8,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 9,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
        {
            id: 10,
            type: "suv",
            name: "Mercedes-Benz, C Class",
            title: "2023 C300e AMG Line Night Ed Premium",
            millage: 72925,
            gasType: "Petrol",
            gear: "Automatic",
            price: 399,
            img: "",
        },
    ];

    return (
        <div className="product-page">
            <div className="product-page-title">
                New and Used Cars For Sale
            </div>
            <div className="product-page-filter-list">

                <div className="product-page-filter">
                    <div className="product-page-filter-wrapper">

                        <div className="filter-location-input filter-input-block">
                            <span className="location-span filter-input-block-span">Location</span>
                            <div className="filter-location-placeholder filter-input-block-placeholder">
                                <span>New-York</span>
                                <span><MdKeyboardArrowDown /></span>
                            </div>
                        </div>

                        <div className="filter-search-zip-inputs-block">
                            <div className="filter-search-input filter-input-block">
                                <span className="location-span search-span">Search Within</span>
                                <div className="filter-search-placeholder filter-input-block-placeholder">
                                    <span>200 Miles</span>
                                    <span><MdKeyboardArrowDown /></span>
                                </div>
                            </div>
                            <div className="filter-zip-input filter-input-block">
                                <span className="filter-input-block-span">Zip Code</span>
                                <div className="filter-zip-placeholder filter-input-block-placeholder">
                                    <span>02111</span>
                                    <span><MdKeyboardArrowDown /></span>
                                </div>
                            </div>
                        </div>

                        <div className="filter-condition-input filter-input-block">
                            <span className="filter-input-block-span">Condition</span>
                            <div className="filter-condition-placeholder filter-input-block-placeholder">
                                <span>New And Used</span>
                                <span><MdKeyboardArrowDown /></span>
                            </div>
                        </div>

                        <hr />

                        <div className="filter-car-type">
                            <span>Type</span>
                            <ul>
                                <li><input type="checkbox" /> SUV</li>
                                <li><input type="checkbox" /> Sedan</li>
                                <li><input type="checkbox" /> Hatchback</li>
                                <li><input type="checkbox" /> Coupe</li>
                                <li><input type="checkbox" /> Convertible</li>
                            </ul>
                        </div>

                        <hr />

                        <div className="filter-price-block">
                            <div className="filter-price-title">
                                Price
                            </div>
                            <div className="price-cells">
                                <div className="min-price">
                                    <span>Min. Price</span>
                                    <div>$5000</div>
                                </div>
                                <div className="max-price">
                                    <span>Max. Price</span>
                                    <div>$7000</div>
                                </div>
                            </div>
                            <div className="price-range">
                                <input type="range" />
                            </div>
                        </div>

                        <hr />

                        <div className="filter-gear-type filter-car-type">
                            <span>Transmission</span>
                            <ul>
                                <li><input type="checkbox" /> Diesel</li>
                                <li><input type="checkbox" /> Diesel</li>
                                <li><input type="checkbox" /> Diesel</li>
                            </ul>
                        </div>

                        <hr />

                        <div className="filter-fuel-type filter-car-type">
                            <span>Fuel Type</span>
                            <ul>
                                <li><input type="checkbox" /> Diesel</li>
                                <li><input type="checkbox" /> Diesel</li>
                                <li><input type="checkbox" /> Diesel</li>
                                <li><input type="checkbox" /> Diesel</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="product-page-cars">

                </div>
            </div>
        </div>
    );
};

export default Product;
