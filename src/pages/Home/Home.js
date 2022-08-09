import React from 'react';
import './Home.scss';
import Menu from '../../assets/images/hamburger-icon.png';
import Prime from '../../assets/images/prime-ad.jpeg';

function Home() {
  return (
    <main className="home">
      <nav className="home__nav">
        <img className="home__nav__menu-icon" src={Menu} alt="hamburger menu" />
        <p className="home__nav__heading--bold">All</p>
        <p className="home__nav__heading">Best Sellers</p>
        <p className="home__nav__heading">New Releases</p>
        <p className="home__nav__heading home__nav__heading--mobile-hidden">Customer Service</p>
        <p className="home__nav__heading home__nav__heading--mobile-hidden">Sell</p>
        <p className="home__nav__featured">Prime | <span className="home__nav__featured--bold">Movies and TV Shows</span></p>
      </nav>
      <section className="home__hero">
        <div className="home__title-container">
          <div className="home__title-wrapper">
            <h1 className="home__hero-title">Summer Deals</h1>
          </div>
        </div>
        <div className="home__categories">
          <div className="home__category">
            <h4 className="home__category__heading">Gaming Accessories</h4>
            <div className="home__category__image home__category__image__gaming"></div>
            <p className="home__category__learn-more">Learn More</p>
          </div>
          <div className="home__category">
            <h4 className="home__category__heading">Computers & Accessories</h4>
            <div className="home__category__image home__category__image__computers"></div>
            <p className="home__category__learn-more">Learn More</p>
          </div>
          <div className="home__category">
            <h4 className="home__category__heading">Summer Deals</h4>
            <div className="home__category__image home__category__image__summer"></div>
            <p className="home__category__learn-more">Learn More</p>
          </div>
          <div className="home__extra">
            <div className="home__extra__account">
              <h4 className="home__extra__account__heading">Sign in for your best experience</h4>
              <button className="home__extra__account__sign-in">Sign in Securely</button>
            </div>
            <img className="home__extra__prime" src={Prime} alt="prime video paper girls poster" />
          </div>
        </div>
      </section>
      <div className="home__categories home__categories--secondary">
          <div className="home__category">
            <h4 className="home__category__heading">Furniture</h4>
            <div className="home__category__image home__category__image__furniture"></div>
            <p className="home__category__learn-more">Learn More</p>
          </div>
          <div className="home__category">
            <h4 className="home__category__heading">Sports & Outdoors</h4>
            <div className="home__category__image home__category__image__sports"></div>
            <p className="home__category__learn-more">Learn More</p>
          </div>
          <div className="home__category">
            <h4 className="home__category__heading">Shop Kitchen</h4>
            <div className="home__category__image home__category__image__kitchen"></div>
            <p className="home__category__learn-more">Learn More</p>
          </div>
          <div className="home__category home__category--last">
            <h4 className="home__category__heading">School Essentials</h4>
            <div className="home__category__image home__category__image__school"></div>
            <p className="home__category__learn-more">Learn More</p>
          </div>
        </div>
    </main>
  )
}

export default Home