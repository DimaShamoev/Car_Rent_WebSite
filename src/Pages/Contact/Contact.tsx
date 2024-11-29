import React from "react";
import './Contact.css'
import { GrLocation } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FunctionComponent = () => {

    const leftToRight = {
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1
            }
        }
    }

    const rightToLeft = {
        hidden: {
            x: 300,
            opacity: 0
        },
        visible: {
            x: 0,
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
            className="contact-page"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
        >
            <motion.div
                className="contact-tile"
                variants={leftToRight}
            >
                Contact Us
            </motion.div>

            <motion.div
                className="contact-map"
                variants={downToUp}
            >
                <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?q=1%20Grafton%20Street,%20Dublin,%20Ireland&t=p&z=14&output=embed"
                    title="Google Map of Grafton Street, Dublin"
                    allowFullScreen
                >
                </iframe>

            </motion.div>

            <motion.div
                className="get-in-touch-info-block"
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.3}}
            >
                <motion.div
                    className="get-in-touch-block"
                    variants={leftToRight}
                >
                    <div className="get-in-touch-title">Get In Touch</div>
                    <div className="get-in-touch-desc">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </div>
                    <div className="user-name-surname">
                        <div className="user-name user-input">
                            <span>First Name</span>
                            <input type="text" placeholder="Enter First Name" />
                        </div>
                        <div className="user-surname user-input">
                            <span>Last Name</span>
                            <input type="text" placeholder="Enter Last Name" />
                        </div>
                    </div>
                    <div className="user-email-phone">
                        <div className="user-email user-input">
                            <span>Email</span>
                            <input type="text" placeholder="Enter Email" />
                        </div>
                        <div className="user-phone user-input">
                            <span>Phone</span>
                            <input type="text" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="message-block user-input">
                        <span>Comment</span>
                        <textarea placeholder="Enter Your Message"></textarea>
                    </div>
                    <div className="send-btn">
                        <button>Send Message</button>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-info-block"
                    variants={rightToLeft}
                >
                    <div className="contact-title">Contact details</div>
                    <div className="contact-info-desc">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </div>
                    <div className="company-info-block">
                        <div className="company-list-item">
                            <div className="company-info-icon"><GrLocation /></div>
                            <div className="company-info">
                                <p>Address</p>
                                <p>
                                    329 Queensberry Street, North Melbourne
                                    VIC3051, Australia.
                                </p>
                            </div>
                        </div>
                        <div className="company-list-item">
                            <div className="company-info-icon"><IoMailOutline /></div>
                            <div className="company-info">
                                <p>Email</p>
                                <p>
                                    Branch@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="company-list-item">
                            <div className="company-info-icon"><LuPhoneCall /></div>
                            <div className="company-info">
                                <p>Phone</p>
                                <p>
                                    +987 654 321 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="company-social-media">
                        <p>Follow Us</p>
                        <ul>
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="services-block"
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.3}}
            >
                <motion.div
                    className="services-title"
                    variants={leftToRight}
                >
                    Our Offices
                </motion.div>

                <motion.div
                    className="service-branch-list"
                    variants={downToUp}
                >

                    <div className="service-branch">
                        <div className="branch-city-name">San Francisco</div>
                        <div className="branch-city-info">
                            329 Queensberry Street, North Melbourne VIC3051,
                            Australia.
                        </div>
                        <div className="brach-contacts">
                            <div className="branch-mail"><span><IoMailOutline /></span> branch@gmail.com</div>
                            <div className="branch-phone"><span><LuPhoneCall /></span> +987 654 321 000</div>
                        </div>
                    </div>

                    <div className="service-branch">
                        <div className="branch-city-name">San Francisco</div>
                        <div className="branch-city-info">
                            329 Queensberry Street, North Melbourne VIC3051,
                            Australia.
                        </div>
                        <div className="brach-contacts">
                            <div className="branch-mail"><span><IoMailOutline /></span> branch@gmail.com</div>
                            <div className="branch-phone"><span><LuPhoneCall /></span> +987 654 321 000</div>
                        </div>
                    </div>

                    <div className="service-branch">
                        <div className="branch-city-name">San Francisco</div>
                        <div className="branch-city-info">
                            329 Queensberry Street, North Melbourne VIC3051,
                            Australia.
                        </div>
                        <div className="brach-contacts">
                            <div className="branch-mail"><span><IoMailOutline /></span> branch@gmail.com</div>
                            <div className="branch-phone"><span><LuPhoneCall /></span> +987 654 321 000</div>
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
