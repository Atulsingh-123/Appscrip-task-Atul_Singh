import React, { useEffect, useState } from 'react';


const Footer: React.FC = () => {
    const [isMettMuseOpen, setIsMettMuseOpen] = useState(false);
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
    const [isFollowUsOpen, setIsFollowUsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h2 className="footer-title">BE THE FIRST TO KNOW</h2>
                        <p className='spacing'>Sign up for updates from mettā muse.</p>
                        <form className="subscribe-form">
                            <input
                                type="email"
                                placeholder="Enter your e-mail..."
                                className="subscribe-input"
                            />
                            <button type="submit" className="subscribe-button">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                    <div className="footer-col">
                        <h2 className="footer-title">CONTACT US</h2>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                    
                        <h2 className="footer-title">CURRENCY</h2>
                       <div className='currency'>
                       <img src="US.png" alt="USA" />
                       <span>*</span>
                       <p>USD</p>
                       </div>
                        <p className="currency-info">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>
            <hr className="footer-divider" />

            <div className='container'>
                <div className="footer-second">
                    <div className="footer-col-second">
                        <h2
                            className="footer-title cursor-pointer"
                            onClick={() => setIsMettMuseOpen(!isMettMuseOpen)}
                        >
                            mettā muse
                        </h2>
                        {(isMettMuseOpen || isDesktop) && (
                            <ul className="footer-list">
                                <li>About Us</li>
                                <li>Stories</li>
                                <li>Artisans</li>
                                <li>Boutiques</li>
                                <li>Contact Us</li>
                                <li>EU Compliances Docs</li>
                            </ul>
                        )}
                    </div>

                    <div className="footer-col-second">
                        <h2
                            className="footer-title cursor-pointer"
                            onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                        >
                            QUICK LINKS
                        </h2>
                        {(isQuickLinksOpen || isDesktop) && (
                            <ul className="footer-list">
                                <li>Orders & Shipping</li>
                                <li>Join/Login as a Seller</li>
                                <li>Payment & Pricing</li>
                                <li>Return & Refunds</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        )}
                    </div>

                    <div className="footer-col-second">
                        <h2
                            className="footer-title cursor-pointer"
                            onClick={() => setIsFollowUsOpen(!isFollowUsOpen)}
                        >
                            FOLLOW US
                        </h2>
                        {(isFollowUsOpen || isDesktop) && (
                            <>
                                <div className="social-icons">
                                    <div className="social-icon">
                                        <a href="#"><img src="insta.png" alt="Instagram" /></a>
                                    </div>
                                    <div className="social-icon">
                                        <a href="#"><img src="linkedInn.png" alt="LinkedIn" /></a>
                                    </div>
                                </div>
                                <h2 className="footer-title">mettā muse ACCEPTS</h2>
                                <div className="payment-icons">
                                    <img src="Gpay.png" alt="Gpay" />
                                    <img src="p.png" alt="Mastercard" />
                                    <img src="amex.png" alt="Amex" />
                                    <img src="ipay.png" alt="Apple Pay" />
                                    <img src="Opay.png" alt="Opay" />
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
