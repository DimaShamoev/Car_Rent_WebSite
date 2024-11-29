import React from "react";

const Contact: React.FunctionComponent = () => {
    return (
        <div className="contact-page">
            <div className="contact-tile">Contact Us</div>
            <div className="contact-map">
                <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
            </div>
            <div className="get-in-touch-info-block">
                <div className="get-in-touch-block">
                    <div className="get-in-touch-title">Get In Touch</div>
                    <div className="get-in-touch-desc">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </div>
                    <div className="user-name-surname">
                        <div className="user-name">
                            <span>First Name</span>
                        </div>
                        <div className="user-surname">
                            <span>Last Name</span>
                        </div>
                    </div>
                    <div className="user-email-phone">
                        <div className="user-email">
                            <span>Email</span>
                        </div>
                        <div className="user-phone">
                            <span>Phone</span>
                        </div>
                    </div>
                    <div className="message-block">
                        <span>Comment</span>
                        <textarea></textarea>
                    </div>
                </div>
                <div className="contact-info-block">
                    <div className="contact-title">Contact details</div>
                    <div className="contact-info-desc">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </div>
                    <div className="company-info">
                        <div className="company-list-item">
                            <div className="company-info-icon"></div>
                            <div className="company-info">
                                <p>Address</p>
                                <p>
                                    329 Queensberry Street, North Melbourne
                                    VIC3051, Australia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="company-social-media">
                        <p>Follow Us</p>
                        <ul>
                            <li>f</li>
                            <li>t</li>
                            <li>ig</li>
                            <li>In</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services-block">
                <div className="services-title">Our Offices</div>
                <div className="service-branch">
                    <div className="branch-city-name">San Francisco</div>
                    <div className="branch-city-info">
                        329 Queensberry Street, North Melbourne VIC3051,
                        Australia.
                    </div>
                    <div className="brach-contacts">
                        <div className="branch-mail">branch@gmail.com</div>
                        <div className="branch-phone">+987 654 321 000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
