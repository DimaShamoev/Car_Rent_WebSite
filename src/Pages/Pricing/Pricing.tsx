import React from "react";

const Pricing: React.FunctionComponent = () => {
    interface IPricingOffers {
        id: number;
        price: number;
        name: string;
        desc: string;
        offers: Record<string, string>;
    }

    const PricingOffers: IPricingOffers[] = [
        {
            id: 1,
            price: 29,
            name: "Basic Plan",
            desc: "Offers Description",
            offers: {
                offer_1: "listing 1",
                offer_2: "30 Days Visibility",
                offer_3: "Highlighted in Search Results",
                offer_4: "4 Revisions",
                offer_5: "9 days Delivery Time",
                offer_6: "Products Support",
            },
        },
        {
            id: 2,
            price: 49,
            name: "Standard Plan",
            desc: "Offers Description",
            offers: {
                offer_1: "listing 1",
                offer_2: "30 Days Visibility",
                offer_3: "Highlighted in Search Results",
                offer_4: "4 Revisions",
                offer_5: "9 days Delivery Time",
                offer_6: "Products Support",
            },
        },
        {
            id: 3,
            price: 89,
            name: "Extended Plan",
            desc: "Offers Description",
            offers: {
                offer_1: "listing 1",
                offer_2: "30 Days Visibility",
                offer_3: "Highlighted in Search Results",
                offer_4: "4 Revisions",
                offer_5: "9 days Delivery Time",
                offer_6: "Products Support",
            },
        },
        {
            id: 4,
            price: 129,
            name: "Enterprise Plan",
            desc: "Offers Description",
            offers: {
                offer_1: "listing 1",
                offer_2: "30 Days Visibility",
                offer_3: "Highlighted in Search Results",
                offer_4: "4 Revisions",
                offer_5: "9 days Delivery Time",
                offer_6: "Products Support",
            },
        },
    ];

    return (
        <div className="pricing-page">
            <div className="pricing-title">Membership Plans</div>
            <div className="pricing-offers">
                {PricingOffers.map((offer) => (
                    <div className="offer-block" key={offer.id}>
                        <p>${offer.price}</p>
                        <p>{offer.name}</p>
                        <p>{offer.desc}</p>
                        <p>{offer.offers.offer_1}</p>
                        <p>{offer.offers.offer_2}</p>
                        <p>{offer.offers.offer_3}</p>
                        <p>{offer.offers.offer_4}</p>
                        <p>{offer.offers.offer_5}</p>
                        <p>{offer.offers.offer_6}</p>
                        <p>----------------</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
