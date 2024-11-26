import React from "react";

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
                    <div className="filter-location-input">
                        
                    </div>
                </div>

                <div className="product-page-cars"></div>
            </div>
        </div>
    );
};

export default Product;
