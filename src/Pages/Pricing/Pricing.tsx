import React from "react";
import "./Pricing.css"
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

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
            desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
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
            desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
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
            desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
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
            desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
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

    const [cardHoverActive, setCardHoverActive] = React.useState<number | null>(null)

    const handleActiveHover = (index: number) => {
        setCardHoverActive(index)
    }

    const handleDeactiveHover = () => {
        setCardHoverActive(null)
    }

    const upToDown = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1
            }
        }
    }

    const downToUp = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1
            }
        }
    }

    return (
        <motion.div
            className="pricing-page"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
        >
            <motion.div
                className="pricing-title"
                variants={upToDown}
            >
                Membership Plans
            </motion.div>

            <motion.div
                className="pricing-offers"
                variants={downToUp}
            >
                {PricingOffers.map((offer) => (
                    <div 
                        className={`offer-block ${cardHoverActive === offer.id ? 'card-active' : ''}`}
                        key={offer.id}
                        onMouseEnter={() => handleActiveHover(offer.id)}
                        onMouseLeave={handleDeactiveHover}
                    >
                        <div className="price-block">
                            <p>${offer.price}</p> / Monthly
                        </div>

                        <div className="offer-type">
                            {offer.name}
                        </div>

                        <div className="offer-desc">
                            {offer.desc}
                        </div>

                        <div className="offer-advantages-list">
                            <ul>
                                <li><span><FaCheck /></span> {offer.offers.offer_1}</li>
                                <li><span><FaCheck /></span> {offer.offers.offer_2}</li>
                                <li><span><FaCheck /></span> {offer.offers.offer_3}</li>
                                <li><span><FaCheck /></span> {offer.offers.offer_4}</li>
                                <li><span><FaCheck /></span> {offer.offers.offer_5}</li>
                                <li><span><FaCheck /></span> {offer.offers.offer_6}</li>
                            </ul>
                        </div>

                        <div className={`offer-buy-btn ${cardHoverActive === offer.id ? 'hovered' : ''}`}>
                            <button>
                                Buy Now
                            </button>
                        </div>
                        
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Pricing;
