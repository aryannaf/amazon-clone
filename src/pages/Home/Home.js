import React from 'react';
import './Home.scss';
import Menu from '../../assets/images/hamburger-icon.png';
import Prime from '../../assets/images/prime-ad.jpeg';
import PrimePoster from '../../assets/images/spidermanposter.jpeg';
import TombRaider from '../../assets/images/tombraider.jpg';
import BlackPanther from '../../assets/images/blackpanther.jpg';
import StarWars from '../../assets/images/starwars.jpg';
import WonderWoman from '../../assets/images/wonderwoman.jpg';
import SpiderMan from '../../assets/images/spidermanhomecoming.jpg';
import IceAge from '../../assets/images/iceage.jpg';
import Hobbit from '../../assets/images/hobbit.jpg';
import PlanetOfApes from '../../assets/images/planetofapes.jpg';
import XMen from '../../assets/images/xmen.jpg';
import Homeland from '../../assets/images/homeland.jpg';
import JusticeLeague from '../../assets/images/justiceleague.jpg';
import JohnWick from '../../assets/images/johnwick.jpg';
import Westworld from '../../assets/images/westworld.jpg';
import GuardiansGalaxy from '../../assets/images/guardiansofgalaxy.jpg';
import Flashdance from '../../assets/images/flashdance.jpg';
import Deadpool from '../../assets/images/deadpool.jpg';
import XBox from '../../assets/images/xbox.jpg';
import Xenoble from '../../assets/images/xenoble.jpg';
import VR from '../../assets/images/vrheadset.jpg';
import NintendoSwitch from '../../assets/images/nintendoswitch.jpg';
import Hogwarts from '../../assets/images/hogwarts.jpg';
import Mariokart from '../../assets/images/mariokart.jpg';
import SwitchSports from '../../assets/images/switchsports.jpg';
import Pokemon from '../../assets/images/pokemon.jpg';
import Zelda from '../../assets/images/zelda.jpg';
import MarioParty from '../../assets/images/marioparty.jpg';
import Minecraft from '../../assets/images/minecraft.jpg';
import AnimalCrossing from '../../assets/images/animalcrossing.jpg';
import Xbox2 from '../../assets/images/xbox2.jpg';
import Info from '../../assets/images/info-16.png';


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
      <div className="home__banner">
        <img className="home__poster" src={PrimePoster} alt="SpiderMan No Way Home" />
      </div>
      <div className="home__movies">
        <div className="home__movies-wrapper">
          <div className="home__movies__heading">
            <h4 className="home__movies__title">Blockbuster Blu-ray</h4>
            <p className="home__movies__see-more">See more</p>
          </div>
          <div className="home__movies__carousel">
            <img className="home__movie" src={TombRaider} alt="tomb raider" />
            <img className="home__movie" src={BlackPanther} alt="black panther" />
            <img className="home__movie" src={StarWars} alt="star wars" />
            <img className="home__movie" src={WonderWoman} alt="wonder woman" />
            <img className="home__movie" src={SpiderMan} alt="spiderman homecoming" />
            <img className="home__movie" src={IceAge} alt="ice age" />
            <img className="home__movie" src={Hobbit} alt="hobbit" />
            <img className="home__movie" src={PlanetOfApes} alt="rise of the planet of the apes" />
            <img className="home__movie" src={XMen} alt="x-men" />
            <img className="home__movie" src={Homeland} alt="homeland" />
            <img className="home__movie" src={JusticeLeague} alt="justice league" />
            <img className="home__movie" src={JohnWick} alt="john wick 2" />
            <img className="home__movie" src={Westworld} alt="westworld" />
            <img className="home__movie" src={GuardiansGalaxy} alt="guardians of the galaxy vol. 2" />
            <img className="home__movie" src={Flashdance} alt="flashdance" />
            <img className="home__movie" src={Deadpool} alt="deadpool" />
          </div>
        </div>
      </div>
      <section className="home__tertiary-categories">
        <div className="home__tertiary-categories__category--cluster">
          <h4 className="home__category__heading">Latest in Tech</h4>
          <div className="home__category__cluster-items">
            <div className="home__category__cluster-item">
              <div className="home__category__cluster-image home__category__cluster-image--dji"></div>
              <p className="home__category__cluster-description">DJI Mini Pro</p>
            </div>
            <div className="home__category__cluster-item">
              <div className="home__category__cluster-image home__category__cluster-image--psstore"></div>
              <p className="home__category__cluster-description">PlayStation Store Gift Card</p>
            </div>
            <div className="home__category__cluster-item">
              <div className="home__category__cluster-image home__category__cluster-image--fujifilm"></div>
              <p className="home__category__cluster-description">Fujifilm Instax Mini Link 2</p>
            </div>
            <div className="home__category__cluster-item">
              <div className="home__category__cluster-image home__category__cluster-image--djirs"></div>
              <p className="home__category__cluster-description">DJI RS 3</p>
            </div>
          </div>
          <p className="home__category__learn-more">See All</p>
        </div>
        <div className="home__tertiary-categories__category">
          <h4 className="home__category__heading">New Music</h4>
          <div className="home__category__image--full home__category__image__music"></div>
          <p className="home__category__learn-more">Learn More</p>
        </div>
        <div className="home__tertiary-categories__category">
          <h4 className="home__category__heading">New Movie: "Gold"</h4>
          <div className="home__category__image--full home__category__image__movie"></div>
          <p className="home__category__learn-more">Learn More</p>
        </div>
        <div className="home__tertiary-categories__category">
          <h4 className="home__category__heading">New Video Games</h4>
          <div className="home__category__image--full home__category__image__games"></div>
          <p className="home__category__learn-more">Learn More</p>
        </div>
      </section>
      <section className="home__bottom-category__container">
        <div className="home__games-category">
          <h4 className="home__games-category__title">Most wished for in Video Games</h4>
          <div className="home__games__carousel">
            <img className="home__game" src={XBox} alt="xbox" />
            <img className="home__game" src={VR} alt="vr headset" />
            <img className="home__game" src={Xenoble} alt="xenoblade 3" />
            <img className="home__game" src={NintendoSwitch} alt="nintendo switch" />
            <img className="home__game" src={Hogwarts} alt="hogwarts" />
            <img className="home__game" src={Mariokart} alt="mario kart" />
            <img className="home__game" src={SwitchSports} alt="nintendo switch sports" />
            <img className="home__game" src={Pokemon} alt="pokemon" />
            <img className="home__game" src={Zelda} alt="zelda" />
            <img className="home__game" src={MarioParty} alt="mario party" />
            <img className="home__game" src={Minecraft} alt="minecraft" />
            <img className="home__game" src={AnimalCrossing} alt="animal crossing" />
            <img className="home__game" src={Xbox2} alt="xbox" />
          </div>
        </div>
        <div className="home__bottom-category__ad-container">
          <div className="home__bottom-category__ad"></div>
          <div className="home__bottom-category__sponsored-container">
            <p className="home__bottom-category__sponsored">Sponsored</p>
            <img className="home__bottom-category__sponsored-icon" src={Info} alt="information"/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home