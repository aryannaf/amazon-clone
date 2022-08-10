import React from 'react';
import './Footer.scss';
import Up from '../../assets/images/up-arrow.png';
import Logo from '../../assets/images/everest.png';
import Home from '../../pages/Home/Home';
import { NavLink } from 'react-router-dom';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <footer className="footer">
            <div className="footer__top" onClick={scrollToTop}>
                <img className="footer__top__arrow" src={Up} alt="up arrow" />
                <p className="footer__top__text">TOP OF PAGE</p>
            </div>
            <section className="footer__links--mobile">
                <div className="footer__links__section">
                    <p className="footer__link">Everest.com</p>
                    <p className="footer__link">Your Lists</p>
                    <p className="footer__link">Find a Gift</p>
                    <p className="footer__link">Browsing History</p>
                    <p className="footer__link">Returns</p>
                </div>
                <div className="footer__links__section">
                    <p className="footer__link">Your Orders</p>
                    <p className="footer__link">Gift Cards & Registry</p>
                    <p className="footer__link">Your Account</p>
                    <p className="footer__link">Sell products on Everest</p>
                    <p className="footer__link">Customer Service</p>
                </div>
            </section>
            <section className="footer__links--desktop">
                <div className="footer__links__section">
                    <h5 className="footer__links__heading">Get to Know Us</h5>
                    <p className="footer__link">Careers</p>
                    <p className="footer__link">Everest and Our Planet</p>
                    <p className="footer__link">Investor Relations</p>
                    <p className="footer__link">Press Releases</p>
                    <p className="footer__link">Everest Science</p>
                </div>
                <div className="footer__links__section">
                    <h5 className="footer__links__heading">Make Money with Us</h5>
                    <p className="footer__link">Sell on Everest</p>
                    <p className="footer__link">Everest Associates</p>
                    <p className="footer__link">Sell on Everest Handmade</p>
                    <p className="footer__link">Advertise Your Products</p>
                    <p className="footer__link">Independently Publish with Us</p>
                    <p className="footer__link">Host an Everest Hub</p>
                </div>
                <div className="footer__links__section">
                    <h5 className="footer__links__heading">Everest Payment Products</h5>
                    <p className="footer__link">Everest.com Rewards Mastercard</p>
                    <p className="footer__link">Shop with Points</p>
                    <p className="footer__link">Reload Your Balance</p>
                    <p className="footer__link">Everest Currency Converter</p>
                    <p className="footer__link">Gift Cards</p>
                    <p className="footer__link">Everest Cash</p>
                </div>
                <div className="footer__links__section">
                    <h5 className="footer__links__heading">Let Us Help You</h5>
                    <p className="footer__link">COVID-19 and Everest</p>
                    <p className="footer__link">Shipping Rates & Policies</p>
                    <p className="footer__link">Everest Prime</p>
                    <p className="footer__link">Returns Are Easy</p>
                    <p className="footer__link">Manage your Content and Devices</p>
                    <p className="footer__link">Customer Service</p>
                </div>
            </section>
            <div className="footer__logo-container">
                <NavLink to={Home} className="footer__logo-link">
                    <img className="footer__logo" src={Logo} alt="everest logo" />
                </NavLink>
            </div>
            <div className="footer__container--mobile">
                <p className="footer__sign-in">Already a customer? Sign In</p>
            </div>
            <div className="footer__container--desktop">
                <div className="footer__link-group">
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Everest Music</p>
                        <p className="footer__link__description">Stream millions of songs</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Book Depository</p>
                        <p className="footer__link__description">Books With Free Delivery Worldwide</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Warehouse Deals</p>
                        <p className="footer__link__description">Open-Box Discounts</p>
                    </div>
                </div>
                <div className="footer__link-group">
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Everest Advertising</p>
                        <p className="footer__link__description">Find, attract, and engage customers</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Goodreads</p>
                        <p className="footer__link__description">Book reviews & recommendations</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Whole Foods Market</p>
                        <p className="footer__link__description">We Believe in Real Food</p>
                    </div>
                </div>
                <div className="footer__link-group">
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Everest Business</p>
                        <p className="footer__link__description">Everything for your business</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">IMDb</p>
                        <p className="footer__link__description">Movies, TV & Celebrities</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Everest Renewed</p>
                        <p className="footer__link__description">Like-new products you can trust</p>
                    </div>
                </div>
                <div className="footer__link-group">
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Everest Drive</p>
                        <p className="footer__link__description">Cloud storage from Everest</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Everest Photos</p>
                        <p className="footer__link__description">Unlimited Photo Storage Free With Prime</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Blink</p>
                        <p className="footer__link__description">Smart Security for Every Home</p>
                    </div>
                </div>
                <div className="footer__link-group">
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Everest Web Services</p>
                        <p className="footer__link__description">Scalable Cloud Computing Services</p>
                    </div>
                    <div className="footer__link__item">
                        <p className="footer__link__heading">Shopbop</p>
                        <p className="footer__link__description">Designer Fashion Brands</p>
                    </div>
                </div>
            </div>
            <div className="footer__container">
                <div className="footer__terms">
                    <div className="footer__terms__link-container">
                        <p className="footer__terms__link">Conditions of Use</p>
                        <p className="footer__terms__link">Privacy Notice</p>
                        <p className="footer__terms__link">Interest-Based Ads</p>
                    </div>
                    <p className="footer__terms__link footer__terms__copyright">&copy; 1996-2022, Everest.com, Inc. or its affiliates</p>
                </div>
                <div className="footer__disclaimer">
                    <p className="footer__disclaimer__notes">Disclaimer: this application is, in part, an Amazon.com clone intended for educational purposes.</p>
                    <p className="footer__disclaimer__notes">Respective content is property of Amazon.com.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer