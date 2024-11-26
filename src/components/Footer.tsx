import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Footer: React.FunctionComponent = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-lists">
                    <div className="footer-list footer-list-1">
                        <ul>
                            <li>Useful Links</li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Finance</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list footer-list-2">
                        <ul>
                            <li>Quick Links</li>
                            <li>
                                <a href="#">Get in Touch</a>
                            </li>
                            <li>
                                <a href="#">Help center</a>
                            </li>
                            <li>
                                <a href="#">Live chat</a>
                            </li>
                            <li>
                                <a href="#">How it works</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list footer-list-3">
                        <ul>
                            <li>Our Brands</li>
                            <li>
                                <a href="#">Aston Martin</a>
                            </li>
                            <li>
                                <a href="#">Audi</a>
                            </li>
                            <li>
                                <a href="#">Bentley</a>
                            </li>
                            <li>
                                <a href="#">BMW</a>
                            </li>
                            <li>
                                <a href="#">Bugatti</a>
                            </li>
                            <li>
                                <a href="#">Ferrari</a>
                            </li>
                            <li>
                                <a href="#">Jaguar</a>
                            </li>
                            <li>
                                <a href="#">Lamborghini</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list footer-list-4">
                        <ul>
                            <li>Vehicles Type</li>
                            <li>
                                <a href="#">Pickup</a>
                            </li>
                            <li>
                                <a href="#">Coup</a>
                            </li>
                            <li>
                                <a href="#">Family MPV</a>
                            </li>
                            <li>
                                <a href="#">Sedan</a>
                            </li>
                            <li>
                                <a href="#">SUVs</a>
                            </li>
                            <li>
                                <a href="#">Sport Coupe</a>
                            </li>
                            <li>
                                <a href="#">Convertible</a>
                            </li>
                            <li>
                                <a href="#">Wagon</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list footer-list-5">
                        <ul>
                            <li>Useful Links</li>
                            <li>
                                Monday - Friday: 09:00AM - 09:00 PMSaturday:
                                09:00AM - 07:00PM Sunday: Closed
                            </li>
                        </ul>
                        <div className="footer-contact-btn">
                            <span>Connect With Us</span>
                            <div className="social-media">
                                <span><TiSocialFacebook /></span>
                                <span><FaTwitter /></span>
                                <span><FaInstagram /></span>
                                <span><FaLinkedinIn /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copy-rights">
                    © 2024 Boxcars.com. All rights reserved.
                </div>
                <div className="footer-terms-privacy">
                    <span><a href="#">Terms & Conditions</a></span>
                    <span><a href="#">Privacy Notice</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
