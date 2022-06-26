

import Home from "./pages/home"
import { Routes, Route, Link } from "react-router-dom";
import "./styles/cyberia-estates.css"
import "./styles/cyberia-map.css"
import "./style.css"
import "./styles/enter-button.css"
import "./styles/explore.css"
import "./styles/explore-gen1.css"
import {showsmallestate, showmediumestate, showlargeestate, showpenthouse} from "./js/cyberia-slideshow"
import {showgunslinger, shownipopow, showergoproxy, showsigmaprime, aptnumsearch, showedenplaza} from "./js/map-locations"
import {searchgen1} from "./js/gen1search"



function App() {
  return (
   
    <div className="App">
   
  
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cyberia-estates" exact element={<Estatepage />} />
        <Route path="/cyberia-map" exact element={<Mappage />} />
        <Route path="/explore-gen1" exact element={<Exploregen1 />} />
        <Route path="/explore-gen2" exact element={<Exploregen2 />} />
      </Routes>
    </div>


  );
}

function Estatepage () {
  return(
    <>
<meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="./assets/favicon.ico" type="image/x-icon" />


  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
  <title>CyberCitizens</title>
  <header>
    <div className="logo">
      <img id="scrollTop" src="../assets/logo-name.png" alt="" />
    </div>
    <input type="checkbox" name="" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul className="nav-links">
        <li className="desktop-li">
          <a id="discord-desktop" href="https://discord.com/invite/7FcEFKcKJ7">
            <img
              id="header-image"
              src="../assets/logo-discord.svg"
              alt="discord"
            />
          </a>
        </li>
        <li>
          <a id="discord-mobile" href="https://discord.com/invite/7FcEFKcKJ7">
            Discord
          </a>
        </li>
        <li className="desktop-li">
          <a id="twitter-desktop" href="https://twitter.com/ErgoPixels">
            <img
              id="header-image"
              src="../assets/logo-twitter.svg"
              alt="twitter"
            />
          </a>
        </li>
        <li>
          <a id="twitter-mobile" href="https://twitter.com/ErgoPixels">
            Twitter
          </a>
        </li>
        <li>
          <a href="#benefits">Benefits</a>
        </li>
        <li>
          <a href="#sizes">Sizes</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
        <nav>
    <Link to="/">
Home</Link></nav>
        </li>
      </ul>

    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </header>
  <main>
    {/* fade-in image for first section*/}
    <section className="s1-estates section fade-in">
      <div className="flex-container">
        <h1>Cyberia Virtual Real-estate</h1>
      </div>
    </section>
    {/* Information/mint section*/}
    <div className="divider" />
    <section className="s2 section fade-in" id="info">
      <div className="flex-container-mint">
        <div className="container-mint container-mint-img">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/718121472?h=b9ca9cdf16"
            width="100%"
            height=""
            frameBorder={1}
            allowFullScreen=""
            id="trailer-cyberia"
          />
                
  <a id="mint-estate"><Link to="/cyberia-map">
    Locations</Link></a>
        </div>
        <div className="container-mint">
          <h2 className="cyberia-main-description">
            Cyberia Virtual real-estate is the first of many purchasable areas
            within Cyberia. We are proud to present the first ever condominiums
            for sale within Cyberia, ranging in size from small, medium, large
            and penthouse suites!
          </h2>
          <p className="cyberia-info">
            {" "}
            The exact date of release will be published shortly! Be sure to
            visit our discord and sign up for the whitelist in order to ensure
            you can mint an Apartment!
          </p>
          <p className="cyberia-info">
            {" "}
            Upon purchase, you will have access to your unfurnished condo within
            Cyberia. Inside you will find various pieces of furniture available
            to you in order to customize your condo to your liking! In the
            future these furniture pieces will cost $CYPX but for now they will
            be free for all testers! The game is still being developed, and the
            opening date will be announced soon!
          </p>
      </div>
      </div>
    </section>
    {/*benefits section*/}
    <div className="divider" />
    <section className="s3 section fade-in" id="benefits">
      <h2>Benefits</h2>
      <div className="flex-container-benefits">
        <img
          src="../assets/Cyberia/Icons/benefits-new.png"
          id="benefits-image"
        alt="all-benefits"/>
      </div>
      {/* benefits mobile section (hidden on desktop)*/}
      <div className="flex-container-benefits-mobile">
        <img
          src="../assets/Cyberia/Icons/ownership-mobile.png"
          id="benefits-image-mobile"
          alt="benefits-mobile"/>
        <img
          src="../assets/Cyberia/Icons/customization-mobile.png"
          id="benefits-image-mobile"
          alt="customization-mobile"/>
        <img
          src="../assets/Cyberia/Icons/utility-mobile.png"
          id="benefits-image-mobile"
          alt="utility-mobile"/>
        <img
          src="../assets/Cyberia/Icons/additional-benefits-mobile.png"
          id="benefits-image-mobile"
          alt="additional-mobile" />
      </div>
    </section>
    {/* apt sizes section*/}
    <div className="divider" />
    <section className="s4 section fade-in" id="sizes">
      <div className="flex-container-mint">
        <div className="container-mint container-mint-img">
          <h2 id="sizestitle">Sizes</h2>
          <button className="estate-size" onClick={showsmallestate}>
            <img id="estatebtn" src="../assets/Cyberia/button-small.png"alt="btn-small" />
          </button>
          <button className="estate-size" onClick={showmediumestate}>
            <img id="estatebtn" src="../assets/Cyberia/button-medium.png"alt="btn-med" />
          </button>
          <button className="estate-size" onClick={showlargeestate}>
            <img id="estatebtn" src="../assets/Cyberia/button-large.png"alt="btn-large" />
          </button>
          <button className="estate-size" onClick={showpenthouse}>
            <img id="estatebtn" src="../assets/Cyberia/button-penthouse.png"alt="btn-pent" />
          </button>
        </div>
        <div id="first">
          <div className="rarity-container">
            <p id="rarity">Supply:40</p>
          </div>
          <div className="flex-container" id="apartment-description">
            <img
              id="estate-imgs"
              src="../assets/Cyberia/apartment-blueprints/small-realestate.png"
              alt="small" />
          </div>
          <div className="flex-container-estate" id="apartment-description">
            <p id="apt-description"></p>
            <ul>Bathroom: 1 </ul>
            <ul>Kitchen: 1</ul>
            <ul>Living Room: 1</ul>
            <ul>Extra Room: 1</ul> <p />
          </div>
        </div>
        <div id="second">
          <div className="rarity-container">
            <p id="rarity2">Supply:24</p>
          </div>
          <div className="flex-container" id="apartment-description">
            <img
              id="estate-imgs"
              src="../assets/Cyberia/apartment-blueprints/medium-realestate.png"
              alt="medium" />
          </div>
          <div className="flex-container-estate" id="apartment-description">
            <p id="apt-description"></p>
            <ul>Bathroom: 1 </ul>
            <ul>Kitchen: 1</ul>
            <ul>Living Room: 1</ul>
            <ul>Extra Rooms: 2</ul> <p />
          </div>
        </div>
        <div id="third">
          <div className="rarity-container">
            <p id="rarity3">Supply:10</p>
          </div>
          <div className="flex-container" id="apartment-description">
            <img
              id="estate-imgs"
              src="../assets/Cyberia/apartment-blueprints/large-realestate.png"
              alt="large" />
          </div>
          <div className="flex-container-estate" id="apartment-description">
            <p id="apt-description"></p>
            <ul>Bathroom: 1 </ul>
            <ul>Kitchen: 1</ul>
            <ul>Living Room: 1</ul>
            <ul>Extra Rooms: 4</ul> <p />
          </div>
        </div>
        <div id="fourth">
          <div className="rarity-container">
            <p id="rarity4">Supply:1</p>
          </div>
          <div className="flex-container" id="apartment-description">
            <img
              id="estate-imgs"
              src="../assets/Cyberia/apartment-blueprints/penthouse-realestate.png"
              alt="penthouse"  />
          </div>
          <div className="flex-container-estate" id="apartment-description">
            <p id="apt-description"></p>
            <ul>Bathroom: 1 </ul>
            <ul>Kitchen: 1</ul>
            <ul>Living Room: 1</ul>
            <ul>Extra Roomss: 6</ul> <p />
          </div>
        </div>
      </div>
    </section>
    {/* roadmap section*/}
    <div className="divider" />
    <section className="s5 section fade-in" id="roadmap">
      <h2>Roadmap</h2>
      <div className="flex-container-benefits">
        <img src="../assets/Cyberia/roadmap-cyberia.png" id="roadmap-image" alt="roadmapimg" />
      </div>
      {/* roadmap mobile section, hidden on desktop*/}
      <div className="flex-container-benefits-mobile">
        <img
          src="../assets/Cyberia/roadmap-mobile-stage1.png"
          id="roadmap-image-mobile" alt="stage1" /> 
      
        <img
          src="../assets/Cyberia/roadmap-mobile-stage2.png"
          id="roadmap-image-mobile" alt="stage2" />
   
        <img
          src="../assets/Cyberia/roadmap-mobile-stage3.png"
          id="roadmap-image-mobile"alt="stage3" />
  
        <img
          src="../assets/Cyberia/roadmap-mobile-tbd.png" alt="stage4"
          id="roadmap-image-mobile"/>
      </div>
    </section>
    {/* faq section*/}
    <div className="divider" />
    <section className="s6 section fade-in" id="faq">
      <h2>F.A.Q</h2>
      <div className="flex-container-faq">
        <h3 className="faq-header">1.) How many NFTs are available?</h3>
        <p className="faq-answer">
          As a first drop we plan to drop an initial supply of 75 apartments!
          Although we plan to continually drop apartments as we continue
          development of Cyberia.
        </p>
        <h3 className="faq-header">2.) What is the mint price?</h3>
        <p className="faq-answer">
          For whitelisted addresses - 40 ERG, for public mint - 44 ERG
        </p>
        <h3 className="faq-header">3.) How do I mint my apartment?</h3>
        <p className="faq-answer">
          For this drop we will be using our old method, simply send X ERG to
          the indicated address and you will receive your NFT shortly!
        </p>
        <h3 className="faq-header">4.) Is there a whitelist?</h3>
        <p className="faq-answer">
          Yes, we have seen the interest by our community for a whitelist. To
          qualify for a whitelist you must hold atleast 2 CyberCitizens + verify
          your address in our discord whitelist channel! The whitelist will be
          ending June 12, 2022 at 10 PM UTC
        </p>
        <h3 className="faq-header">5.) What are CyberCitizen NFTs?</h3>
        <p className="faq-answer">
          CyberCitizens are playable NFT characters in our upcoming game, learn
          more by visiting the
          <a id="faqhome" href="../index.html#faq">
            F.A.Q
          </a>{" "}
          on our home-page!
        </p>
        <h3 className="faq-header">
          6.) What are our plans for the future of Cyberia Real-Estate
        </h3>
        <p className="faq-answer">
          What you are seeing in the clip above is just the early stage of what
          we want to accomplish. We plan to expand heavily with our plans such
          as adding NFT furniture, businesses, lands and much more! This stage
          of customization is just for early versions of the game and we would
          love to hear some feedback and opinions from the community!
        </p>
      </div>
    </section>
  </main>
  <footer>
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          className="footer-logo"
          src="../assets/logo-name.png"
          alt="ergopixels "
        />
      </div>
      <div className="svg-container">
        <a href="https://twitter.com/ErgoPixels">
          <img
            className="twitter"
            src="../assets/logo-twitter.svg"
            alt="twitter"
          />
        </a>
        <a href="https://discord.com/invite/7FcEFKcKJ7">
          <img
            className="discord"
            src="../assets/logo-discord.svg"
            alt="discord"
          />
        </a>
      </div>
      <div className="footer-text">
        CyberCitizens is an NFT project by the ERGOPixels team.
      </div>
    </div>
  </footer>

  </>
);
}

function Mappage () {
  return (
    <>



  <title>CyberCitizens</title>
  <header>
    <div className="logo">
      <img id="scrollTop" src="../assets/logo-name.png" alt="" />
    </div>
    <input type="checkbox" name="" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul className="nav-links">
        <li>
          <img src="../assets/wallet.svg" id="wallet" alt="wallet" />
        </li>
        <li className="desktop-li">
          <a id="discord-desktop" href="https://discord.com/invite/7FcEFKcKJ7">
            <img
              id="header"
              src="../assets/logo-discord.svg"
              alt="discord "
            />
          </a>
        </li>
        <li>
          <a id="discord-mobile" href="https://discord.com/invite/7FcEFKcKJ7">
            Discord
          </a>
        </li>
        <li className="desktop-li">
          <a id="twitter-desktop" href="https://twitter.com/ErgoPixels">
            <img
              id="header-image"
              src="../assets/logo-twitter.svg"
              alt="twitter "
            />
          </a>
        </li>
        <li>
          <a id="twitter-mobile" href="https://twitter.com/ErgoPixels">
            Twitter
          </a>
        </li>
        <li>
         <Link to="/cyberia-estates">Back to estates</Link>
        </li>
        <li>
         <nav><Link to ="/">Home</Link></nav>
        </li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </header>
  <main>
    <section className="locations" id="locations">
      <img
        src="../assets/Cyberia/newMap.png"
        className="allaptimgs"
        id="cyberia-map"
        alt="cyberia-map"
      />
      <img
        src="../assets/Cyberia/gunslingerpass.png"
        className="allaptimgs"
        id="showgunslinger"
        alt="apt-0"
        style={{ display: "none" }}
      />
      <img
        src="../assets/Cyberia/nipopowblock.png"
        className="allaptimgs"
        id="shownipopow"
        alt="apt-1"
        style={{ display: "none" }}
      />
      <img
        src="../assets/Cyberia/ergoproxy.png"
        className="allaptimgs"
        id="showergoproxy"
        alt="apt-1"
        style={{ display: "none" }}
      />
      <img
        src="../assets/Cyberia/eden-plaza.png"
        className="allaptimgs"
        id="showedenplaza"
        alt="apt-1"
        style={{ display: "none" }}
      />
      <img
        src="../assets/Cyberia/sigma-prime.png"
        className="allaptimgs"
        id="showsigmaprime"
        alt="apt-1"
        style={{ display: "none" }}
      />
      <input
        type="text"
        id="aptnums"
        onKeyUp={aptnumsearch}
        placeholder="Input an apartment #."
      />
      <div className="apartment-container">
        <ul id="aptUL">
          <li className="aptresults" id="results">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#0</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#1</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#2</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#3</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#4</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#5</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#6</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#7</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showedenplaza}>
                Apartment:<p className="apttext">#8</p>Location:
                <p className="apttext">Eden Plaza</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#9</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#10</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#11</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#12</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#13</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#14</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#15</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#16</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#17</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#18</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#19</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showedenplaza}>
                Apartment:<p className="apttext">#20</p>Location:
                <p className="apttext">Eden Plaza</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#21</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#22</p>Location:
                <p className="apttext">NiPoPow Block</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#23</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#24</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#25</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#26</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#27</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#28</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showedenplaza}>
                Apartment:<p className="apttext">#29</p>Location:
                <p className="apttext">Eden Plaza</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#30</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#31</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#32</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#33</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#34</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#35</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#36</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#37</p>Location:
                <p className="apttext">NiPoPow Block</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#38</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#39</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#40</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#41</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showsigmaprime}>
                Apartment:<p className="apttext">#42</p>Location:
                <p className="apttext">Sigma Prime</p>Size:
                <p className="apttext">Penthouse</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#43</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Middle</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#44</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showsigmaprime}>
                Apartment:<p className="apttext">#45</p>Location:
                <p className="apttext">Sigma Prime</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showsigmaprime}>
                Apartment:<p className="apttext">#46</p>Location:
                <p className="apttext">Sigma Prime</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#47</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showedenplaza}>
                Apartment:<p className="apttext">#48</p>Location:
                <p className="apttext">Eden Plaza</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#49</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#50</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#51</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#52</p>Location:
                <p className="apttext">NiPoPow Block</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#53</p>Location:
                <p className="apttext">NiPoPoW Block</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#54</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#55</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showsigmaprime}>
                Apartment:<p className="apttext">#56</p>Location:
                <p className="apttext">Sigma Prime</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showedenplaza}>
                Apartment:<p className="apttext">#57</p>Location:
                <p className="apttext">Eden Plaza</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#58</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#59</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#60</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#61</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showsigmaprime}>
                Apartment:<p className="apttext">#62</p>Location:
                <p className="apttext">Sigma Prime</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#63</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#64</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#65</p>Location:
                <p className="apttext">NiPoPow Block</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#66</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#67</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#68</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#69</p>Location:
                <p className="apttext">NiPoPow Block</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#70</p>Location:
                <p className="apttext">NiPoPow Block</p>Size:
                <p className="apttext">Large</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#71</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#72</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={shownipopow}>
                Apartment:<p className="apttext">#73</p>Location:
                <p className="apttext">NiPoPow Block</p>Size:
                <p className="apttext">Medium</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showgunslinger}>
                Apartment:<p className="apttext">#74</p>Location:
                <p className="apttext">Gunslinger Pass</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
          <li className="aptresults">
            <a className="apt-link">
              <button className="showapts" onClick={showergoproxy}>
                Apartment:<p className="apttext">#75</p>Location:
                <p className="apttext">Ergo Proxy</p>Size:
                <p className="apttext">Small</p>{" "}
              </button>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer>
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          className="footer-logo"
          src="../assets/logo-name.png"
          alt="ergopixels logo"
        />
      </div>
      <div className="svg-container">
        <a href="https://twitter.com/ErgoPixels">
          <img
            className="twitter"
            src="../assets/logo-twitter.svg"
            alt="twitter logo"
          />
        </a>
        <a href="https://discord.com/invite/7FcEFKcKJ7">
          <img
            className="discord"
            src="../assets/logo-discord.svg"
            alt="discord logo"
          />
        </a>
      </div>
      <div className="footer-text">
        CyberCitizens is an NFT project by the ERGOPixels team.
      </div>
    </div>
  </footer>
</>

  )
}



function Exploregen2 () {
  return (
    <>
  <header>
    <div className="logo">
      <img id="explorerToHome" src="../assets/logo-name.png" alt="" />
    </div>
    <input type="checkbox" name="" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore-gen1">GEN 1</Link>
        </li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </header>
  {/* Background Animation Start */}
  <div className="area">
    <ul className="circles">
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
  {/* Background Animation End */}
  <main>
    <div className="explore-content">
      <h2 id="explore-header" className="section-header explore-section-header">
        GEN2 Search
      </h2>
      <div className="search-container">
        <input
          type="text"
          className="token-search"
          id="searchBar"
          placeholder="Please enter your token id..."
        />
        <button id="searchButton">Search</button>
      </div>
      <div className="search-result" id="search-result" />
      <h2 id="explore-header" className="section-header explore-section-header">
        Explore Gen2
      </h2>
      {/* Modal Start */}
      <div id="explorerModal" className="modal">
        {/* Modal content */}
        <div id="explorerModal" className="modal-content">
          {/* <span class="close">&times;</span> */}
        </div>
      </div>
      {/* Modal End */}
      <div id="nft-container" />
    </div>
  </main>
  <footer>
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          className="footer-logo"
          src="../assets/logo-name.png"
          alt="ergopixels logo"
        />
      </div>
      <div className="svg-container">
        <a href="https://twitter.com/ErgoPixels">
          <img
            className="twitter"
            src="../assets/logo-twitter.svg"
            alt="twitter logo"
          />
        </a>
        <a href="https://discord.com/invite/7FcEFKcKJ7">
          <img
            className="discord"
            src="../assets/logo-discord.svg"
            alt="discord logo"
          />
        </a>
      </div>
      <div className="footer-text">
        CyberCitizens is an NFT project by the ERGOPixels team.
      </div>
    </div>

  </footer>
</>

  )
}

function Exploregen1 () {
  return ( 
<>

  <title>Explore GEN 1</title>
  <header>
    <div className="logo">
      <img id="explorerToHome" src="../assets/logo-name.png" alt="" />
    </div>
    <input type="checkbox" name="" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul className="nav-links">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#info">Info</a>
        </li>
        <li>
          <a href="#search">Search</a>
        </li>
        <li>
         <Link to="/explore-gen2">GEN 2</Link>
        </li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </header>
  <div className="area">
    <ul className="circles-gen1">
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
  <main>
    <section id="info" className="">
      <br />
      <br />
      <div className="container ">
        <h2>ErgoPixels</h2>
        <h2>Our first collection of 250 hand-drawn NFT's</h2>
        <p>
          ErgoPixels are a mix celebrities as well as imaginary creations done
          by our artist!
        </p>
        <p>
          The exact rarity numbers for all traits have never been released.
          Below you can find the rarity for skins and background color!
        </p>
      </div>
    </section>
    <h3> Background Color</h3>
    <ul className="background-container">
      <div className="gen1rarity-backgrounds">
        <h4 id="blue">
          BLUE <br /> 85.3% (213/250)
        </h4>{" "}
      </div>
      <div className="gen1rarity-backgrounds">
        <h4 id="wine">
          WINE <br /> 13.6% (34/250){" "}
        </h4>{" "}
      </div>
      <div className="gen1rarity-backgrounds">
        <h4 id="prism">
          PRISM <br /> 1.2% (3/250)
        </h4>
      </div>
    </ul>
    <h3>Skins </h3>
    <ul id="gen1ul">
      <div className="gen1skincontainer">
        <h4> Zombies </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeicc5mbqlcdpzmfd7ggjlyiu3xgg3b7azu2wqqztraztmdv7gqk6ei.ipfs.dweb.link/231.png"
          />
          <img
            className="smallimg"
            src="https://bafybeidlepluqju3w4bmj5ouqjwuewknefyicr4yfcitek2viog5kapoui.ipfs.dweb.link/214.png"
          />
          <img
            className="smallimg"
            src="https://bafybeiezimu2jcd7bwvipfocimcu3pv5geizwp6slvay74us4rpoanhlsi.ipfs.dweb.link/176.png"
          />
          <img
            className="smallimg"
            src="https://bafybeiaxvrdxohiwizcyyrk6iaqs4rrchiyf75fz6vvxam7s6o24lduuqy.ipfs.dweb.link/178.png"
          />
          <img
            className="smallimg"
            src="https://bafybeidhqbrsjtytpd7tscyglkz5pbwv54pxhjjqt6ylwihpcpliamsiwm.ipfs.dweb.link/216.png"
          />
          <img
            className="smallimg"
            src="https://bafybeicvw2227liny4kopjkg45gctjeh5bfeneetnqlbhd3nwmtaszur2a.ipfs.dweb.link/239.png"
          />
          <img
            className="smallimg"
            src="https://bafybeidirwigkejw52jcuykgk6ekszrkbgkenveek2osxy3pn2csu7ighq.ipfs.dweb.link/247.png"
          />
          <img
            className="smallimg"
            src="https://bafybeibo6hlkyouiii6fib4mzjqtdlmmvxopkot6s5de2bauucfqgzazpq.ipfs.dweb.link/197.png"
          />
          <img
            className="smallimg"
            src="https://bafybeieyp7iz4t4kvv3h4x2md24dtyj5grmt3mgpd32u4rdmrzt4xiih5a.ipfs.dweb.link/221.png"
          />
          <img
            className="smallimg"
            src="https://bafybeics4lyjbxjtebyp53z2jfhcigsaaur4u2djrkty2fnd46wevzwkvi.ipfs.dweb.link/224.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Aliens </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeibkqgiccvx5vnmml32s5vju7yxlv5prcfyuftplt5yer6pkiqcsya.ipfs.dweb.link/250.png"
          />
          <img
            className="smallimg"
            src="https://bafybeibromhfijcbdmvsagorlh77tgeyhcwzn32kna5ef3lltz6t2xhj2u.ipfs.dweb.link/244.png"
          />
          <img
            className="smallimg"
            src="https://bafybeicmcswgtjvwgjzzgy46mtzbbdxi2tjhj4dse7zzukaoxjsmsiucs4.ipfs.dweb.link/183.png"
          />
          <img
            className="smallimg"
            src="https://bafybeidbuhfciuexwfodkhlxvlb22y4c35z3yc3bx43r3zlbwbuifdx33a.ipfs.dweb.link/228.png"
          />
          <img
            className="smallimg"
            src="https://bafybeihxnrfmj57sji224tbcfxoucnerit3tnu7uxxymsnuqzxqsszhi54.ipfs.dweb.link/217.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Ergonauts </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeicpw4i4pkmyh6lotjuxwd32xornrozrdfu2k6t6zpa6wbz45obary.ipfs.dweb.link/001.png"
          />
          <img
            className="smallimg"
            src="https://bafybeibxfeivh3yi7jndijkfgg5uhspfsdzoo6aabtijmvstoshrivqu7a.ipfs.dweb.link/002.png"
          />
          <img
            className="smallimg"
            src="https://bafybeibleqbgscxfsyo5s4ryql4wfespytntffi2xl2uymimdxwsikb4ei.ipfs.dweb.link/003.png"
          />
          <img
            className="smallimg"
            src="https://bafybeicmm265g7cnaxsliuziolw7vl2dsg33ex2f2olg3iejxqcbrxja4e.ipfs.dweb.link/004.png"
          />
          <img
            className="smallimg"
            src="https://bafybeif4w7zpygzy7kim4swdnrbe6ymwhwhpcpca2rv5sxm7fz6wpua2hq.ipfs.dweb.link/005.png"
          />
          <img
            className="smallimg"
            src="https://bafybeifbcgl6evxjq2e4t6y5wlp22vcgjtg4n5uf7gsr2tyqc7etx45hdu.ipfs.dweb.link/006.png"
          />
          <img
            className="smallimg"
            src="https://bafybeid7uyfifvojwrl5v7hd6phzteaibojw2tn7cf66lpuly7ryhsh3la.ipfs.dweb.link/007.png"
          />
          <img
            className="smallimg"
            src="https://bafybeicv2ymq7uzkrgzpgl4nmbz6vzlusu5vavuk7d2hys4fkpvufwzare.ipfs.dweb.link/008.png"
          />
          <img
            className="smallimg"
            src="https://bafybeib4ughvyfjrtk2xydt3fczvjuufuto5zfghve7qefgog5ymt7qhtu.ipfs.dweb.link/009.png"
          />
          <img
            className="smallimg"
            src="https://bafybeihqx6uamm4bhnpsrjfgxm4c7mqadonxdvbawe7qrstoc6edqkmqhu.ipfs.dweb.link/010.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Robots </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeid3ovvbdqe4pdqhumvxhcbrpvci76heparx4p7nebnkz2cqdtlebm.ipfs.dweb.link/232.png"
          />
          <img
            className="smallimg"
            src="https://bafybeie3fhigeaqr36yb4nqc2lq5ymjl6e7c4c3gym5x46jz4ckfiz52e4.ipfs.dweb.link/227.png"
          />
          <img
            className="smallimg"
            src="https://bafybeigb54uqm2yiod5sl4fzyj5mjddyq5rwfwcn5hvv6x2ohc4ce7jfyq.ipfs.dweb.link/240.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Shrek </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeicfu2srbzjcdv3wqcaipm7ppv56rvronale33xzfsdvfk4pfjnm34.ipfs.dweb.link/114.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Apes </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeih2ehuoupdn6do4kpw4ooksq3kjmjymor57epjsid3ysc7jobquz4.ipfs.dweb.link/249.png"
          />
          <img
            className="smallimg"
            src="https://bafybeifq7brbctbp7vof6e3ed6y5yglbui7hy6334kol2wki7fxs6lx3iu.ipfs.dweb.link/248.png"
          />
          <img
            className="smallimg"
            src="https://bafybeid5itybemwcyz6nflkyukrx3enjs2etkohx5ninud4pylvsb6v5ay.ipfs.dweb.link/218.png"
          />
          <img
            className="smallimg"
            src="https://bafybeiglgj4il2jevqzlgvex2j3hglr7nnakrat7h4exmoo4feorb3yvzi.ipfs.dweb.link/210.png"
          />
          <img
            className="smallimg"
            src="https://bafybeidfdwgxs7qbyu6mw5jchgpq6h26j7h2cs34bkpdhh4fvj4umtav7y.ipfs.dweb.link/236.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Doge </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeidqmwciuzhtipxz3xm53n2t2533keicj2fvjnk2q3oksrt6rcnb6u.ipfs.dweb.link/021.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Llama </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeief5c7yvqels7ozh36hjxmtn4l6qsomk3ckoxeg3kem3vrvfam6oq.ipfs.dweb.link/095.png"
          />
        </div>
      </div>
      <div className="gen1skincontainer">
        <h4> Goats </h4>
        <div className="smallimg-container">
          <img
            className="smallimg"
            src="https://bafybeidbybwcuu6zzlrg4nqkwxlanctuompuhnpldye5qtrdiftzajqe6q.ipfs.dweb.link/084.png"
          />
          <img
            className="smallimg"
            src="https://bafybeihpfpc7s6wqneauaid6eqlqwvenb4y5q3ha63d2omfhxog64n2joy.ipfs.dweb.link/112.png"
          />
          <img
            className="smallimg"
            src="https://bafybeibnhxy27axquiztg2m6tollnxrufl57t2kgui32onynw5wramctxu.ipfs.dweb.link/126.png"
          />
        </div>
      </div>
    </ul>
    <section id="search">
      <input
        type="text"
        id="myInput"
        onKeyUp={searchgen1}
        placeholder="Search for an ErgoPixel..."
      />
      <div className="search-container">
        <ul id="myUL">
          <div id="gen1">
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicpw4i4pkmyh6lotjuxwd32xornrozrdfu2k6t6zpa6wbz45obary.ipfs.dweb.link/001.png"
                />
                #1 Black Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibxfeivh3yi7jndijkfgg5uhspfsdzoo6aabtijmvstoshrivqu7a.ipfs.dweb.link/002.png"
                />
                #2 White Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibleqbgscxfsyo5s4ryql4wfespytntffi2xl2uymimdxwsikb4ei.ipfs.dweb.link/003.png"
                />
                #3 Blue Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicmm265g7cnaxsliuziolw7vl2dsg33ex2f2olg3iejxqcbrxja4e.ipfs.dweb.link/004.png"
                />
                #4 Green Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeif4w7zpygzy7kim4swdnrbe6ymwhwhpcpca2rv5sxm7fz6wpua2hq.ipfs.dweb.link/005.png"
                />
                #5 Orange Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifbcgl6evxjq2e4t6y5wlp22vcgjtg4n5uf7gsr2tyqc7etx45hdu.ipfs.dweb.link/006.png"
                />
                #6 Pink Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeid7uyfifvojwrl5v7hd6phzteaibojw2tn7cf66lpuly7ryhsh3la.ipfs.dweb.link/007.png"
                />
                #7 Purple Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicv2ymq7uzkrgzpgl4nmbz6vzlusu5vavuk7d2hys4fkpvufwzare.ipfs.dweb.link/008.png"
                />
                #8 Red Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeib4ughvyfjrtk2xydt3fczvjuufuto5zfghve7qefgog5ymt7qhtu.ipfs.dweb.link/009.png"
                />
                #9 Yellow Ergonaut
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihqx6uamm4bhnpsrjfgxm4c7mqadonxdvbawe7qrstoc6edqkmqhu.ipfs.dweb.link/010.png"
                />
                #10 Ranger Ergonaut{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigl6u6bzb4bjwgnkgjyf4oudsq5ptwiqubjhcse5bcmtamns5yyhi.ipfs.dweb.link/011.png"
                />
                #11 Epstein
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihjcyu2klwcjsndyn3vi45qkxc6gjx5r4tpms3vt2zsusxdgtj2ty.ipfs.dweb.link/012.png"
                />
                #12 2pac
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeib6b5wtgihtkxefgwevujihazj4iomtneahqrdhmdtaog6v4unwrm.ipfs.dweb.link/013.png"
                />
                #13 Hoskinson
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeid4eqdtwuwxfnskokymve7ti4fe2mntisqb2ec2pa6dtzrngqccvm.ipfs.dweb.link/014.png"
                />
                #14 Will Smith
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihxkvugctm35z34gybek3a4mxrzntrnwsdyozd5cplrc6nm3ozohe.ipfs.dweb.link/015.png"
                />
                #15 Joker
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidwe36gbe65ucwqyasuv4jvlcb7js5xk36ykpzhczdhvc2gxlgjbu.ipfs.dweb.link/016.png"
                />
                #16 Snoop Dogg
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeia5z64pqikl2fe4mrhjow34wer5gnhwmw6bnkkgt4yyf5jcjycd5y.ipfs.dweb.link/017.png"
                />
                #17 Eminem
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiewacoq7hrrfxdarmio73r7n44mz27iqjzgksl6j7dkffouib62sa.ipfs.dweb.link/018.png"
                />
                #18 Lil Uzi Vert
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigrtshkyh4xny45xbxpxxqwq564gagpkqffu6r6new52xsdbtntea.ipfs.dweb.link/019.png"
                />
                #19 Unknown
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiczzz543il4ser5ve7p6e6nqbezgxgsyek2t5oxnvk2xbggqsipiu.ipfs.dweb.link/020.png"
                />
                #20 Bojack Horseman
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidqmwciuzhtipxz3xm53n2t2533keicj2fvjnk2q3oksrt6rcnb6u.ipfs.dweb.link/021.png"
                />
                #21 Doge
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeih5na4675mhz43upobsy63strvb2cfitmdl5flwomztxgx6gdl2oy.ipfs.dweb.link/022.png"
                />
                #22 Mona Lisa
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieaeliywpxos7ocj5j2gzr7vhvuhjn35u4qnswmeb62mnbahh3dfy.ipfs.dweb.link/023.png"
                />
                #23 Da Vinci
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigxv4sjerhi35esrjz4pnrieuhwlznfxslqf7jzq427p4cmj2pej4.ipfs.dweb.link/024.png"
                />
                #24 Alexander Chepurnoy
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieznjmgqsghfwiruq7paq76554nzqvwiceibel5juux3dtjiytus4.ipfs.dweb.link/025.png"
                />
                #25 Danish Chaudhry
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibtub7iriyka55qzcujqwrfbziubnwuppfexo4uizvl2sqboruvv4.ipfs.dweb.link/026.png"
                />
                #26 Steve Jobs
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiboj5k6dl4blattxwkqvfhehgttdzb6pqhelgzntbze5os65pgcwu.ipfs.dweb.link/027.png"
                />
                #27 Steve Wozniak
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihoiiqzjy44jlfehcvk76s4kzasr57xi3f722uiczjcidrwy3d53a.ipfs.dweb.link/028.png"
                />
                #28 Wayne R.
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicz37saro2ifsdmjnwknyorvly6pio6avkfmgm2wsgxhd54s4eesi.ipfs.dweb.link/029.png"
                />
                #29 Michael Jackson
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidigg3ggq4gqbj52awbp72ycqsyjva5veegadxhs6nzcc3nlmn2va.ipfs.dweb.link/030.png"
                />
                #30 J Dorsey
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeid2xhluh4mbjwaeh4xq67hihevg476dnirkj35kiqwwijopd7elwy.ipfs.dweb.link/031.png"
                />
                #31 Vitalik Buterin
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiathyppyemweudovgej2tr6kl3jhhnf7st4lxtcy7qf5oqkycfsci.ipfs.dweb.link/032.png"
                />
                #32 John Mcafee
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidztk7jrb3djdso2ce47c4xxqs3j4boww25mdvxrwkvacckc5z7fm.ipfs.dweb.link/033.png"
                />
                #33 Lex Fridman
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaf2svlfxregvki65ldrh6rdt7k6kilifnv4h6u3ewowyyxmngmiy.ipfs.dweb.link/034.png"
                />
                #34 Freddy Mercury
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifzzghmubnlxj62kkb4wc6ejknj27s6r4mqrtuyjl4teahvn6yrcm.ipfs.dweb.link/035.png"
                />
                #35 Pablo Escobar
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig2fbah6xz7bzesa2kxuevziw5kcv2ca263izcgvy3f7iekwdxqk4.ipfs.dweb.link/036.png"
                />
                #36 J. Lennon
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibqy2u6mgboasn6wde3wbtqmlu2kxy3z4lvbdidhvailmenxz576i.ipfs.dweb.link/037.png"
                />
                #37 Gandhi
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeid67flr6bbjjlk52tdclqjaojnuwisvjdhe5u3cqcyschivdvr6ke.ipfs.dweb.link/038.png"
                />
                #38 Julius Caesar
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibxjrhic4rpgljznyl7acgkhspqd36qmhtsispaysn52guippvtn4.ipfs.dweb.link/039.png"
                />
                #39 John Kennedy
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihb36hg37atqj2gkxh3iu3hwiiatyn273xltroq7web2auzoolevi.ipfs.dweb.link/040.png"
                />
                #40 Socrates
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiabjd7zffmadlsdnxniiaqfzpdgiloxpgi3ialtvqu3kzuwvb7cae.ipfs.dweb.link/041.png"
                />
                #41 Van Gogh
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibgzxbkkglkohazkyjpzzrlt2hdnivr2d62wguckpei44k5rik7wq.ipfs.dweb.link/042.png"
                />
                #42 Stan Lee
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicrostlxhgacwm3reqa6vzyoabz5eofr543wciveo4nsre2vqgqw4.ipfs.dweb.link/043.png"
                />
                #43 Isaac Newton
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeif22jjlst4pkvvigx7qianx4ucbzso7bj7wriyrvudsu7pdndrmxq.ipfs.dweb.link/044.png"
                />
                #44 Roger Ver
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifhjj3yffmuedf2paz7c7wqcdpcckqeqo52nccg5gdsv46rh54i4a.ipfs.dweb.link/045.png"
                />
                #45 Aayan
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeido7nms3fdybx2355m57pmmaphvgkcfz4zwark7m7pj5othe2inbm.ipfs.dweb.link/046.png"
                />
                #46 Blade
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig65midgpducy6rv6qtnk5cayuuua65rt6kmkd4j4fcfbfcxar7jm.ipfs.dweb.link/047.png"
                />
                #47 Elvis Presley
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeie3vsphck7zzlvibkcxwk5ukojkeo4orfwgpo4iy3ghjrgttx3gti.ipfs.dweb.link/048.png"
                />
                #48 Bruno Mars
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigdxb5m2nhd4w2c3slwimm44odahpetntg2f5vh2rq66u2i3jef4i.ipfs.dweb.link/049.png"
                />
                #49 K. Hart
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeih572oi352re44ybfc5ylj6rzhwlspoyxizxcauozzuy67m4qvrjy.ipfs.dweb.link/050.png"
                />
                #50 O. Wilson
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeia7nyph6ebl3efzrztgwpjcnx5tuj4m2354a5lldvziuddwfpjrca.ipfs.dweb.link/051.png"
                />
                #51 Voltaire
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigt54smb77gw5c4eqsgrex2we7wqpvrs3ij5ptegallrpdr6l6sby.ipfs.dweb.link/052.png"
                />
                #52 N. Mandela
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigmrte4adofm63j3kf5h4zjju3xm7l46tdzqqxakynvlt2qfz2ngu.ipfs.dweb.link/053.png"
                />
                #53 V. Diesel
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidiomaiwebr6gs4rszv7hmixddggakdlvszcq52jzxaa5wuw7jiue.ipfs.dweb.link/054.png"
                />
                #54 A. Schwarzenegger
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiadw2qy6gzsrvs5ijxtmesiogd2qxfek23ryxs3y36cd52al22ive.ipfs.dweb.link/055.png"
                />
                #55 Rowan Atkinson
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeie2bxxrjk3bonroii3yevbodik5kxs3d7nyiosl5pwmgfbhbymxpy.ipfs.dweb.link/056.png"
                />
                #56 Mozart
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiatmoyawas3h4hgnylakss6msstciqojhcstizun37opdstqbqube.ipfs.dweb.link/057.png"
                />
                #57 M. Tyson
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifscsnvw2djmvkbm7v2wrcjwdjjipgp3x5e6j6h67cdysi7gcnx4i.ipfs.dweb.link/058.png"
                />
                #58 T. Roosevelt
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig7oosv4grnzkdrufxtn2fhae66gr6tfdu2q4rlhduhutmcbnnmsq.ipfs.dweb.link/059.png"
                />
                #59 George Washington
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig7w3wgpitximb4qokjc2jzi6mcjetoxwffq632kcko7gkiruvh44.ipfs.dweb.link/060.png"
                />
                #60 Kobe
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiefbvvu3dlrb7y3hmc2h3v647ampt55jdtflw2ibeadjs543et27y.ipfs.dweb.link/061.png"
                />
                #61 Barack Obama
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeid6t7ixuilvkuxbsn3ggl37pllfmrevmf4vxlzbq3g6k47hu53u4u.ipfs.dweb.link/062.png"
                />
                #62 Michael Angelo
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeia6h4sc73fb32xxtathqtb7bayncauevi2n47fj4r2qtkrc3pezre.ipfs.dweb.link/063.png"
                />
                #63 Ricky
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibzzk7boi6iqnfyp2x2y5w36guyc5slagfna3ugdt3gthnnhe3lzu.ipfs.dweb.link/064.png"
                />
                #64 James
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeif4enyhgwmmocbrbjsrc7dlhvxvynsmnz724r3gieosv7zpdqzl3a.ipfs.dweb.link/065.png"
                />
                #65 Rooster
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigzfptoosqwtmghdzhblns7zufhecw4h5wh2k7aypjwt7xxpcpcjm.ipfs.dweb.link/066.png"
                />
                #66 Walt Disney
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigx77lhzqqxrkhqg4yrps2wb3r6m3uyxn647aefcfpxx6tjvqu7tu.ipfs.dweb.link/067.png"
                />
                #67 Yoki
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidz23iwbyj35iyshkgvdttc5to5x2jmgy2s6ghp57x67usdgiq4uq.ipfs.dweb.link/068.png"
                />
                #68 Putin
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiftabscluzawayxhw4bpg526dpvtw2im4rsxlcayutqi6dn3u3jmm.ipfs.dweb.link/069.png"
                />
                #69 6ix9ine{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifblafgxgo7fixdbb6jtjieybpc52hmq5sq3xgcqdih2dkvhi6ggu.ipfs.dweb.link/070.png"
                />
                #70 R. Wayne
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiee6k3afuafhu2w5judysosfydsbwq7xev2qr7sfj6pna5mkjcct4.ipfs.dweb.link/071.png"
                />
                #71 Louis Armstrong{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieqod4texpivlmwcyjbymis43derhvpkgzezcmefj6wmlvjqqv4oi.ipfs.dweb.link/072.png"
                />
                #72 Adira{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidcc5poardpbkaem55lzucn7j2skhmyutzdm3c3uajyvgedtdj4ym.ipfs.dweb.link/073.png"
                />
                #73 Harry Potter{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihpaibzukaf6m6wykmekgv6ctsk4noqz3vytjj4prozrdtk6ahrvu.ipfs.dweb.link/074.png"
                />
                #74 Plato{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieyaghvi4ktujrp2ncldlf3bzi6gqmgu5xzadnf24n2b6wfojjdwm.ipfs.dweb.link/075.png"
                />
                #75 Abraham Lincoln{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig7u3ddj3rst4wtifd44wvdfopu5fe54mqr3on6jjlttcvsjmftwe.ipfs.dweb.link/076.png"
                />
                #76 Harland Sanders
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidt2lnj3zckpfusxtcm37qcvt5ug7lgizj5tderwb2guh555xpbpe.ipfs.dweb.link/077.png"
                />
                #77 Tony Stark{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibu5ahyoetq53b4yuzn3ln2lcvufsb2rbcfownybpkaeet36h3a7e.ipfs.dweb.link/078.png"
                />
                #78 Messi{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieglre7ri6v2hyhlogf3ljhopndqmsytn3awk76jvrhu6wluxnjbe.ipfs.dweb.link/079.png"
                />
                #79 Katy Perry{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihnjgwojamtmithu32r7lac5v7mkfb4aobh3b3h2of4oehukrvm6m.ipfs.dweb.link/080.png"
                />
                #80 John Wick{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiepaecxddvavhphzhuixkgf6vjptzcu5mabgk4w5dfiu7bxkgubky.ipfs.dweb.link/081.png"
                />
                #81 Michael Jordan
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidnyjf3avfqje73odraocjmu3evh6zx3ropjogklymsut5awzl5za.ipfs.dweb.link/082.png"
                />
                #82 Rocky
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiezhto6ar255yvaq2xpxgfldrid3dyybezh6bqfhuovqp5ayssb6y.ipfs.dweb.link/083.png"
                />
                #83
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidbybwcuu6zzlrg4nqkwxlanctuompuhnpldye5qtrdiftzajqe6q.ipfs.dweb.link/084.png"
                />
                #84 White Goat
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihdrorm4xijyyv2pkidplfasozrq5utamfgflyz2i4qamhwqc2nri.ipfs.dweb.link/085.png"
                />
                #85 Aristotle
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihr3ehi3pcvjxymdh3zkjfbzhb5ou26ktjzjcdrhxbvovmtbeh76y.ipfs.dweb.link/086.png"
                />
                #86
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifwvs5ta22zxknqktzu2lgyjjpmgkezvudu2tq3rvv6mghh6lalum.ipfs.dweb.link/087.png"
                />
                #87 Lili
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigaqgjt7zovokg7yvtsjoogajahp3n4ualota2uphs7en2rwvzrfe.ipfs.dweb.link/088.png"
                />
                #88 Ewan
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidsoxdwefm6gj7zne4iu3zgnmicqfgtjqnwznxvlzalis3uqj4f3m.ipfs.dweb.link/089.png"
                />
                #89
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiflpgz3h4yh5muv2tqw7bzvdivldt33p3rmoglvtzqg5k6xept4ru.ipfs.dweb.link/090.png"
                />
                #90 Prince Harry{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiclcmlicc7vlzpugsd6zgtaizg2fg3lt4aeeqs6ve5ms7iezrfina.ipfs.dweb.link/091.png"
                />
                #91 Lelex
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiholqo7jspxlu6k5mr4kzmeyp4jvzddabbie2zm3as2wggtikkg5e.ipfs.dweb.link/092.png"
                />
                #92 Marco Polo
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifemg623tfamesqygabpaw43mk4d6ataqdod3odmvze54hkz3aviu.ipfs.dweb.link/093.png"
                />
                #93 Joe Biden
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiggzaggwmftnlnvccvzolcfmefsmd3iv7kvkxtpxzzjscfjvdcpra.ipfs.dweb.link/094.png"
                />
                #94 Adam Sandler
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeief5c7yvqels7ozh36hjxmtn4l6qsomk3ckoxeg3kem3vrvfam6oq.ipfs.dweb.link/095.png"
                />
                #95 Llama
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicdwcgmz2t2mfpahnk64sdqv2q3dwyxrwheff7mh2kazbets66qpm.ipfs.dweb.link/096.png"
                />
                #96 Alfred Nobel
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibapexbzaylx25kxgoej5hxobscwzh2qrucc7omdso5lk4gyj2gha.ipfs.dweb.link/097.png"
                />
                #97 Lebron James{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigpv5unayewlalfsur45j6a3g7tlwww5q4cpw6uva352vomas7u6m.ipfs.dweb.link/098.png"
                />
                #98 Jake Gyllenhaal
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidd3mqzio4jhdhzpnyuadqmcurwpuchicyulha5fxgzd7gv4v3aju.ipfs.dweb.link/099.png"
                />
                #99 Alexander Graham Bell
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiccrzmh4yrpvjz2qarqvp53k52idj5iydjut5337itycx5llxyjam.ipfs.dweb.link/100.png"
                />
                #100 Ada Lovelace
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeida4znsr4apaf5idram6wzj64q7lujx7qoz3ive2ywafkusqplusy.ipfs.dweb.link/101.png"
                />
                #101 Jeff Bezos
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidulkvkrqpyqpib3giy6dduhh5dmhs3inc2tywloaledbqku4ekzu.ipfs.dweb.link/102.png"
                />
                #102 B. Cooper
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihyybvxhgyd3moynks2pkut3s2yrvn25tgeghikut4ruoj5u5r2ga.ipfs.dweb.link/103.png"
                />
                #103 Ed Sheeran
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihljqxwt54cyldhedd3qsdo5m3dy2vv3mtyx2yw5sxk3zmyl2wida.ipfs.dweb.link/104.png"
                />
                #104 Nikola Tesla
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicv5efdrjpjiu7zjopubkwpovlusohu4msh6g4rgizsgs6zquannu.ipfs.dweb.link/105.png"
                />
                #105 Marshmello
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeie5cnkcf2wpd343jjcrib5umfeuxf226mvevtni2pt4eogj7ipicm.ipfs.dweb.link/106.png"
                />
                #106 John
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaiqoe2fcl4p4tl4tlzgab47gnankfzrpl7mme2jgdqkysuq6stfa.ipfs.dweb.link/107.png"
                />
                #107 Jason Statham
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieupakshdpck2hiyhf2ju7ymw6lsg7ykqolqgvsciimowhnyfcz3m.ipfs.dweb.link/108.png"
                />
                #108 Dmitri Juvilar
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeif6wsjyb4zekmkb4lvj4lv4n7hn572k4ogbeti2gg46txhetezsfq.ipfs.dweb.link/109.png"
                />
                #109 Michael
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieltcjeo6xf6cpnuj2px44k6h3jmamrus7w6av3nrvwksitxbjopi.ipfs.dweb.link/110.png"
                />
                #110 Niccolo Machiavelli
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihhswt7rf7vz7m4asrwqpxikokz5ya4xarlh5j6wny7jobedxnusa.ipfs.dweb.link/111.png"
                />
                #111 Harley Quinn
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihpfpc7s6wqneauaid6eqlqwvenb4y5q3ha63d2omfhxog64n2joy.ipfs.dweb.link/112.png"
                />
                #112 Brown Goat
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigpymm45vpewz4ioltca6olv7fcnycgbddwnp5lbdcaar5vgz6sba.ipfs.dweb.link/113.png"
                />
                #113 Bjorn
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicfu2srbzjcdv3wqcaipm7ppv56rvronale33xzfsdvfk4pfjnm34.ipfs.dweb.link/114.png"
                />
                #114 Shrek
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihiv7ke6djrduo775pyi7a6ywvv563qhpovbc3tsjwud6ld6v655m.ipfs.dweb.link/115.png"
                />
                #115 Donald Trump
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaqdnotecnxij3ketp2sqzqdglcwdpgeg4pueiqaspqnl5nwl5alq.ipfs.dweb.link/116.png"
                />
                #116 Billy Trooper
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihh2ya5aowl3bws2pge5t2j7tytjeopw673nct3ad2ycfz45ovcxq.ipfs.dweb.link/117.png"
                />
                #117 Alladin
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidoxdqqtpvozm2kdkxszt35oqscfry6i62z2zuy7ugxp2dp3zfyyy.ipfs.dweb.link/118.png"
                />
                #118 Hulk Hogan
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicw55e64lu2ououoegdd2owlzhy5keu3ll3ej55cx4r7k376rxmoa.ipfs.dweb.link/119.png"
                />
                #119 Borat
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibpopobwgpqbsnphcw46a7bqgizvq7vjpx6vz3iuz4uyx2lsyew6u.ipfs.dweb.link/120.png"
                />
                #120 Connor McGregor
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiavvhmzi7tnahx7gmhgyfsge5tpzh3bhi2cdrbcb6syp52xjd2vlu.ipfs.dweb.link/121.png"
                />
                #121 Justin Bieber
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiambd2nh3fuwekciz73il6jahgsrr7ozyflufpegzp5apn7kfhreu.ipfs.dweb.link/122.png"
                />
                #122 Elon Musk
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihb6and5fj5szavy5q3ngvdjpu7uwl4o4xy2iizvgmtqroqfbz6sq.ipfs.dweb.link/123.png"
                />
                #123 Monk
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihtmgft34oxrhghvwbkqlu2e6rncfoxu2jxocfn6fek5suwom7kpm.ipfs.dweb.link/124.png"
                />
                #124 Finn
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidnb4ypm55mksjfwmarwbjsd2hcbw44bqaklrbj6u73sfskvdsonu.ipfs.dweb.link/125.png"
                />
                #125 Satoru Gojo
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibnhxy27axquiztg2m6tollnxrufl57t2kgui32onynw5wramctxu.ipfs.dweb.link/126.png"
                />
                #126 Black Goat
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidmyxqx37dkgj6foei7pd5dhp2exybw64bd2ku76etpxofscjlvjy.ipfs.dweb.link/127.png"
                />
                #127 King
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeif4lumxy5nlnyr6g7avvtwuyo57ywd7auki4kzpfmmnsd4y256i3u.ipfs.dweb.link/128.png"
                />
                #128 Flyer
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiekvxyim5mfcyqj64hjuf3bqovgws5kpdrxocnjg24di3dzm6fvze.ipfs.dweb.link/129.png"
                />
                #129 Ice Cube
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidm2tpe3jfzww4vzt3z5etuxiuh36ravzucg27eldqy5lubyty64u.ipfs.dweb.link/130.png"
                />
                #130 Afroman
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifqseb7nx6a4dda7kkj6binaqw7ywpbwa4vx5b6gasvtg3x24ebjm.ipfs.dweb.link/131.png"
                />
                #131 Lil Pump
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidszvufqx7yg7srhx7etorsfwcog3xxuqusevbmxgxydgd2mtjugy.ipfs.dweb.link/132.png"
                />
                #132 Charles Dickens
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigu6ixpvl2v5257tvjvyevsj7yaqiecgbxoad7vd2arsgrjpjtvem.ipfs.dweb.link/133.png"
                />
                #133 Guy Fieri
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig5wpqwvzidolpt7m6wysig7momvcwrzgsasf7ppgxccqkvgwaj6y.ipfs.dweb.link/134.png"
                />
                #134 Jake Paul{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifryjl6uezbxuiyxqzdir63zwega5luhvzug3xehbwovxri77tqmi.ipfs.dweb.link/135.png"
                />
                #135 Andrew Carnegie
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiahgh22m2q6tyvm7p2xauqnamitis7ms2x4xdyft7kfxsdfyfphxq.ipfs.dweb.link/136.png"
                />
                #136 Jack Ma
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidrezsgbflt23ctaopqggy6tq4naruxibdiuebbrt5m6bphxqpv6m.ipfs.dweb.link/137.png"
                />
                #137 Jimmy
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibglhw5kebbjeslxiist33zdlanjszaax76xssdzey6idrqiobvye.ipfs.dweb.link/138.png"
                />
                #138 21 Savage{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiasmpxe5nn42f5mznaktnpkticgfhf3kbw47rqfwzqnsg26ka3w6q.ipfs.dweb.link/139.png"
                />
                #139 J cole{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihfa6m7m3afm7b25jisb65nczhhbb7q5o57izzf4l3f3w7klabhqq.ipfs.dweb.link/140.png"
                />
                #140 The Weekend
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaceznq3yxg4c5jkz5pav76mbu5ulaofqvvu57jrvhtpdcngtmzhq.ipfs.dweb.link/141.png"
                />
                #141 Kodak Black
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiazdds3m2cj25ntsbz4gntrxskra7hsyndnvk6g7tn2l5bg4ja2s4.ipfs.dweb.link/142.png"
                />
                #142 David Dobrik
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibl7grhbxywfouqy4iwvuylxyngss3nfbiqh26oonw46qaarrp5na.ipfs.dweb.link/143.png"
                />
                #143 XXXTentacion{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidhq4f3brolyb2tu7dcmoj5cyvls3rvy4yrvlzor6xr7t3ig742uy.ipfs.dweb.link/144.png"
                />
                #144 Muhammad Ali{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihwyr7skay4dpjlpje5jsyjv24guhipd7ofbhwgrtmlt3w6qpcl5y.ipfs.dweb.link/145.png"
                />
                #145 Aladeen{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig54hjupdxyi33ml4ag7n3cq7tqnx6xxfvace3v4gczj7xpv5gj7i.ipfs.dweb.link/146.png"
                />
                #146 Juice WRLD
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifunv2mslqqfzbszzju7oa2s6elhndkxpaue76qodnk2cdkmptgma.ipfs.dweb.link/147.png"
                />
                #147 Andre Cronje
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeie2aohelatiqeydcxlfuxzkklsm5lsqhhu2umjuf2xefutlvhn74y.ipfs.dweb.link/148.png"
                />
                #148 Lil Wayne
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeib7rrhiioic76r6ngmvzso6p6gqm64brwufdue2m3vh2hynmpx6hm.ipfs.dweb.link/149.png"
                />
                #149 Pop Smoke{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiatyfrzlfxqt7z4km6uegd7wd3nxrrxr7gbbywmsujlrk6gc2zrou.ipfs.dweb.link/150.png"
                />
                #150 Frank Ocean{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiga345fkkl6zxhnsbmcklu3ezxmkmjmxorkrb5vz7whrd6fptgn5i.ipfs.dweb.link/151.png"
                />
                #151 Michael Saylor{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieheiwvp4ihtdvglrglf4yy5sl2vkwwu5zvkz67vj35bjc73wsraa.ipfs.dweb.link/152.png"
                />
                #152 Napoleon
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifgrjfcq7af3if7rfffkiw5ewvpgqggk73nxgxz7asllr7wyl4dw4.ipfs.dweb.link/153.png"
                />
                #153 Harden Adams
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicftfdjgcqrujtl2y4rullte2dmjgkmhc7oxqmkmut74cfs7pvibu.ipfs.dweb.link/154.png"
                />
                #154 Gavin Wood
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiezrzuaiewap67v5lkzmgck7zpzcxhnp7ldiccr25yjeixnokyfqa.ipfs.dweb.link/155.png"
                />
                #155 Bob Ross
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifmfc775oh2gm2fvgx6t2tawmqn6teqfiq7zuyrd7xohaduaqmzme.ipfs.dweb.link/156.png"
                />
                #156 Jordan Belfort
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiginrrzeocvik4tnwxk6p25ue2zso62d3odso536hn6udymhl74ye.ipfs.dweb.link/157.png"
                />
                #157 Amethyst
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigxefzamsehffthlrra2c4ydze5jbytf4bku3k4gdsknnt7rzdypi.ipfs.dweb.link/158.png"
                />
                #158 Bbno$
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeig7iuky3x5a54yor2ujrnnk3szpkwyyvpv6cf2tnxrmbk5745g2iq.ipfs.dweb.link/159.png"
                />
                #159 Elton John
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiawup4crmohaszfzecquph75mnygxupepz3umyo3vtgrkj3sqvpy4.ipfs.dweb.link/160.png"
                />
                #160 Polyfemos{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiceun73ofpqddt4cilovyz2iqdfcisq64vv5f6242u6a2emaypyku.ipfs.dweb.link/161.png"
                />
                #161 Icarus Bladerun{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiddijuotmilsy5o7g7vew5skkeyagp2gtb6hjirkwwndy2kvb5vcq.ipfs.dweb.link/162.png"
                />
                #162 William Shakespeare{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidaxfzxxe22vodoe2c4qjofhh4en4yqfbjckxv2hklohnfbogdrjq.ipfs.dweb.link/163.png"
                />
                #163 Leo{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaw67yz7vw6ddkgqdtmfjn4efcheftz2fsxgs5glrmtianokb5rum.ipfs.dweb.link/164.png"
                />
                #164 Mark Twain{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeia4x3arp3w3ncxhcvthyag2y6uiqmxne4q6fpbcxtfpzrg6zo2kui.ipfs.dweb.link/165.png"
                />
                #165 Mark Zuckerberg{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidzercxgiiyrht76uccvkbbwnlr6ea6c7osaetubcj7v5myftcnlq.ipfs.dweb.link/166.png"
                />
                #166 Rihanna{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiblp3thd3gbboayuxvffkfbwxpg2ywssljtbfksbyecutbqw2k6g4.ipfs.dweb.link/167.png"
                />
                #167 Johnny Depp{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeighfvatq4wwpa4q5mefrc7ghtrbw2shl6kppdqgovrzaaiahffjau.ipfs.dweb.link/168.png"
                />
                #168 Logan Paul{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiebzj7nc5kp4anyuj6sb7uulmhkyrhdshjv7j4dxnserkxs6emkfm.ipfs.dweb.link/169.png"
                />
                #169 Playboi Carti{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifa7iqp3edk2ffhncyl3ngmvh4ht2jwvrvuaflmlgcff4emucbawm.ipfs.dweb.link/170.png"
                />
                #170 Pablo Picasso{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeib5r4jytujvhw6v7lev47sqvcjahw5yhedoo75y5kfemhx5gd5s4a.ipfs.dweb.link/171.png"
                />
                #171 DJ Khaled{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibiqlup6oy2nyn64r7g6wowloi74vadzlbgxfvec3hjz6mxc3jqtu.ipfs.dweb.link/172.png"
                />
                #172 Lil Peep{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiddwg7k7r63jwq3hplljcvxhiim2ywlzi5m2olfxclmybewgyuxc4.ipfs.dweb.link/173.png"
                />
                #173 Annia{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiemsp5hy6kne7iqwf6ph3i7l5tjwbwixt6rogaellmqgndgshbghe.ipfs.dweb.link/174.png"
                />
                #174 Soulja Boy{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiapbfaqd6hi5jqqve25up6pykegy3vksd4yuyp2aejy4k67xirpqy.ipfs.dweb.link/175.png"
                />
                #175 Mr. Beast{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiezimu2jcd7bwvipfocimcu3pv5geizwp6slvay74us4rpoanhlsi.ipfs.dweb.link/176.png"
                />
                #176 Zombie Louis{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeie73iqqrfkt7gugc4qdlokezm534trwvtbupgvmjkd2dbney5dce4.ipfs.dweb.link/177.png"
                />
                #177 Rick{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaxvrdxohiwizcyyrk6iaqs4rrchiyf75fz6vvxam7s6o24lduuqy.ipfs.dweb.link/178.png"
                />
                #178 Zombie Fredd{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiehson4liwueboijs6xwpab7lxcr4mnnztdjkh2thv4rdaaz2rbiu.ipfs.dweb.link/179.png"
                />
                #179 Devil{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifkjucfjt7uswnsgalkv6cjtoburqvobhlvpz7vmuccnu24hwqeja.ipfs.dweb.link/180.png"
                />
                #180 Marilyn Monroe{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeic2awxw2oln3xnhk5ib6o744fjq4lyvipzguk6gqqqdallq3anwya.ipfs.dweb.link/181.png"
                />
                #181 Sam Bankman
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifgunamypoyxey4udswsoaljlaetqurlnywel7i6vmfjyzwwvg27y.ipfs.dweb.link/182.png"
                />
                #182 Kim Kardashian
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicmcswgtjvwgjzzgy46mtzbbdxi2tjhj4dse7zzukaoxjsmsiucs4.ipfs.dweb.link/183.png"
                />
                #183 Cruuval
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibz3zhsbz4bd2prrhkaoikhusskpqlr55eu5kjgnenhr47ckbjeq4.ipfs.dweb.link/184.png"
                />
                #184 Brian Armstrong
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifbjy5n2ex7bw57s4z6mtey3ygge7v3x7bya3lzacw5fwn6z56f6i.ipfs.dweb.link/185.png"
                />
                #185 Pele
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifvsvxbjfhelhbrp4f5ybven4abmgy3lf6ooii7z4fk6jqclbkuw4.ipfs.dweb.link/186.png"
                />
                #186 Morty
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigksj62rtt2yo3xnbburexuadx2bohzbru6bdcxnwywjhvadggcxm.ipfs.dweb.link/187.png"
                />
                #187 Peter Lynch
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicwabu7bhha6y6dgkaosw2judq237m4oynoncskpdzippbnrns3qq.ipfs.dweb.link/188.png"
                />
                #188 Angel
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicudsphrpubbdwxn3ktl3pbs5wcdtwspeqpfyfdtrogvacsxamrka.ipfs.dweb.link/189.png"
                />
                #189 Bob Marley
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeib6ffzfx5jbfy5bvc6tlwhzgy5kojs7bkmvhkdqw5nuvum6pvublm.ipfs.dweb.link/190.png"
                />
                #190 Warren Buffet
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaft3ynmbn6koyb6jxenmlhy7hmz7bfxzl4ts36yz2twn6suwgeki.ipfs.dweb.link/191.png"
                />
                #191 Roko
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibfoxjg2sgdzsgvkueox5jfzzatcqmhe5cyi3w7uev35cfvzo3fey.ipfs.dweb.link/192.png"
                />
                #192 CoronaBoy
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigwbk6ltwjtg7ijuatcyhjlkqxlhfirg7hdk7wz6e6lnahho2fsky.ipfs.dweb.link/193.png"
                />
                #193 Samuel Jackson
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibmyvwfgtwbqcyfbozpnsrkko3t4ydprhjxz7igtci5jfaupdausa.ipfs.dweb.link/194.png"
                />
                #194 Pope
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidzwqu6h6ijf6b6maxqu35embfjjhc2azx2d23432mkeyxmqf6rsq.ipfs.dweb.link/195.png"
                />
                #195 Adin Ross
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicw2vciaokg7n6dmlsz2tcubv6dnrs45dfrpwgudutxpvq4je7soy.ipfs.dweb.link/196.png"
                />
                #196 Luke
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibo6hlkyouiii6fib4mzjqtdlmmvxopkot6s5de2bauucfqgzazpq.ipfs.dweb.link/197.png"
                />
                #197 Zombie Cowboy
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicn2ruws6r5phg6jnrxzwbcmlngu6xmg6xlgk7mucuqh6am3w247i.ipfs.dweb.link/198.png"
                />
                #198 Blueface
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiccv47dgjjwcqcyfiiueuiqzs45zi3vled76hna6dsl2jgko4xrwi.ipfs.dweb.link/199.png"
                />
                #199 Faze Banks
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaxjwazaun235eri43lhinelrmqkf5qhiqbeamp3gq33gap2ncrwe.ipfs.dweb.link/200.png"
                />
                #200 Anon_Real
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifxwwiq3anonoxicymolakzsaet7s2ravxnq7e4o72e2jyslkweqe.ipfs.dweb.link/201.png"
                />
                #201 3D Mikey
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibqs25ecqmcs4cgwgfhblsbjtgsm4tadzqber3xkcsvkurxvuqvte.ipfs.dweb.link/202.png"
                />
                #202 CoronaMonkey
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiebkxxsalr6hwlwvrjvufls322vhfm27eqag57pjgjjex3ajh5zcu.ipfs.dweb.link/203.png"
                />
                #203 Post Malone
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiefc6b3d3w434mkhymgsgnic7l72muwsntimnranq7xzafhyhmniu.ipfs.dweb.link/204.png"
                />
                #204 Bill Gates
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifq5hr34onq4rqzpxjhsnqvwwnz5axqsfgpy735sj3uao3curkjwy.ipfs.dweb.link/205.png"
                />
                #205 Antoni Gaudi
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiclnr4dbpiy5wyjdcphgudyydbbz4xcuy3e5hiyt2angoslodmedq.ipfs.dweb.link/206.png"
                />
                #206 Laspin Levitar
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicqifiqissfnmasgoi466mcjcstacukcnwyl2dvuyalq7r27iuo5u.ipfs.dweb.link/207.png"
                />
                #207 Jim Carrey
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidwy2bkvtt33t3s3tpzzf72hufkwqzdkeenici242ndbkgycibuqi.ipfs.dweb.link/208.png"
                />
                #208 Pinkman
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaxzzdflxi3n26m7bjbpyjrepwt4jojsgim6356dylgnr6sehqd54.ipfs.dweb.link/209.png"
                />
                #209 Fidel Castro
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiglgj4il2jevqzlgvex2j3hglr7nnakrat7h4exmoo4feorb3yvzi.ipfs.dweb.link/210.png"
                />
                #210 Smoking Monkey{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiharf65cqwwi5lw6sxu553xh6o6v2eanafkcilfhozcc5himjocwq.ipfs.dweb.link/211.png"
                />
                #211 The Infected
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifqn7axgnvhbb7tyvhx2gmk3xvb5hchlzw5viq3gsfzm25ius5h5q.ipfs.dweb.link/212.png"
                />
                #212 Thomas Edison
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibgepx6ztzvv3b3gesafvwq2kloayd5ynikzfqhbrubiamfzi2xzm.ipfs.dweb.link/213.png"
                />
                #213 Jay-Z
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidlepluqju3w4bmj5ouqjwuewknefyicr4yfcitek2viog5kapoui.ipfs.dweb.link/214.png"
                />
                #214 Jester{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeif5eedgqnu7r5xcb6d75a5rugiusik4pq7fp4px2zjiqwdipjkzgm.ipfs.dweb.link/215.png"
                />
                #215 Travis Scott{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidhqbrsjtytpd7tscyglkz5pbwv54pxhjjqt6ylwihpcpliamsiwm.ipfs.dweb.link/216.png"
                />
                #216 Zombie Soldier{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihxnrfmj57sji224tbcfxoucnerit3tnu7uxxymsnuqzxqsszhi54.ipfs.dweb.link/217.png"
                />
                #217 The Deacon
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeid5itybemwcyz6nflkyukrx3enjs2etkohx5ninud4pylvsb6v5ay.ipfs.dweb.link/218.png"
                />
                #218 Titano
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibb63ojzxfftiqoszsxwavzfbfao3zd7j7ldc2e5kx7chrda2ci2a.ipfs.dweb.link/219.png"
                />
                #219 Bruce Lee
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifwsxuudmvvhy7egbepwkiukkttnpn2g7qhimapsrgxnf5ikzg6ym.ipfs.dweb.link/220.png"
                />
                #220 The Rock{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieyp7iz4t4kvv3h4x2md24dtyj5grmt3mgpd32u4rdmrzt4xiih5a.ipfs.dweb.link/221.png"
                />
                #221 Michael Myers{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeic4ljj6ywtnixyaszymdhzozxt6cauo5cyqiulohhcjjthiao3yrq.ipfs.dweb.link/222.png"
                />
                #222 Kanye West{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiebf6rzaba7x54czvgl2sxqatmnsrniyzi2xslztgdjmtj6z4sgby.ipfs.dweb.link/223.png"
                />
                #223 Welsinki
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeics4lyjbxjtebyp53z2jfhcigsaaur4u2djrkty2fnd46wevzwkvi.ipfs.dweb.link/224.png"
                />
                #224 ZombieBot
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeieqnayn22smlngdqhikfk7usbw23cf4v3ude5lfqt66u5xsh2v5vu.ipfs.dweb.link/225.png"
                />
                #225 Duke
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiaep347q35yvnbf6cd4dlwulnbt2654uzrcsv3lteidw3frjv7qnu.ipfs.dweb.link/226.png"
                />
                #226 Chef
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeie3fhigeaqr36yb4nqc2lq5ymjl6e7c4c3gym5x46jz4ckfiz52e4.ipfs.dweb.link/227.png"
                />
                #227 Rusty Robot
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidbuhfciuexwfodkhlxvlb22y4c35z3yc3bx43r3zlbwbuifdx33a.ipfs.dweb.link/228.png"
                />
                #228 Soldier Alien
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidrrj22vkm5uv6ufiqthxbxx2bpo26mhzqt2mzkioump3rnjcnvri.ipfs.dweb.link/229.png"
                />
                #229 Time Traveller
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibxc3waqcqv3jnhaqoooc4ka5ucwmfodzettquio7d3s5suuribwq.ipfs.dweb.link/230.png"
                />
                #230 Salvador Dali
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicc5mbqlcdpzmfd7ggjlyiu3xgg3b7azu2wqqztraztmdv7gqk6ei.ipfs.dweb.link/231.png"
                />
                #231 Brainie{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeid3ovvbdqe4pdqhumvxhcbrpvci76heparx4p7nebnkz2cqdtlebm.ipfs.dweb.link/232.png"
                />
                #232 Golden Robot{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigjydxviwd3cf5mqgdhg6joilmjvwstrheal62sguuk5vyiowai4q.ipfs.dweb.link/233.png"
                />
                #233 Lisa{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeie7dw3rwrtescanquqm7rlzumbhsvr5jtv4eksndxx5y6wcmxfxxy.ipfs.dweb.link/234.png"
                />
                #234 Greenman{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifqrrdmh5s5vw4ilq2hnmzl6ocbjxqvkoqrhnlhqzxmtd3ssfpcmi.ipfs.dweb.link/235.png"
                />
                #235 Drake{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidfdwgxs7qbyu6mw5jchgpq6h26j7h2cs34bkpdhh4fvj4umtav7y.ipfs.dweb.link/236.png"
                />
                #236 Koko{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https:/bafybeihmbqyzq3xwbxsfpacthtazkura26g7qbtmzjwngkoxpt752yjkhm.ipfs.dweb.link/237.png"
                />
                #237 Theif Vodka{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeienbfieouifappowfkkmcpkj2t3majmhmaxsfx62k7twtlpizej3u.ipfs.dweb.link/238.png"
                />
                #238 Khabib Nurmagomedov{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicvw2227liny4kopjkg45gctjeh5bfeneetnqlbhd3nwmtaszur2a.ipfs.dweb.link/239.png"
                />
                #239 Bloody{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigb54uqm2yiod5sl4fzyj5mjddyq5rwfwcn5hvv6x2ohc4ce7jfyq.ipfs.dweb.link/240.png"
                />
                #240 Silver Robot{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeihuautbjcbk2pnlg3bh3cgkhip7qgtgengnkpmdeswndm7ydzpe6u.ipfs.dweb.link/241.png"
                />
                #241 Chao{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibn7ahcbeshh7l77b56pouc7ljxgt4h6rhwhcv4ttposfahmzsphy.ipfs.dweb.link/242.png"
                />
                #242 Gym Zombie{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeiemqwpaqpdt54uepym4fjsb5pjnnlpqxkw3kyimzn5gkxxlkxlciu.ipfs.dweb.link/243.png"
                />
                #243 Kyle{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibromhfijcbdmvsagorlh77tgeyhcwzn32kna5ef3lltz6t2xhj2u.ipfs.dweb.link/244.png"
                />
                #244 Dhugnuns{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeicakell62e225ozgvgdc666yb2xias3jwbznbbgmekmmbqm7rmb3a.ipfs.dweb.link/245.png"
                />
                #245 Santa Claus
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeigtaxyshspkt3usl3igljc7ofohzlnjfeuvdpd4viv6edh7wjb6ru.ipfs.dweb.link/246.png"
                />
                #246 Annastasia{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeidirwigkejw52jcuykgk6ekszrkbgkenveek2osxy3pn2csu7ighq.ipfs.dweb.link/247.png"
                />
                #247 Zombie Nick{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeifq7brbctbp7vof6e3ed6y5yglbui7hy6334kol2wki7fxs6lx3iu.ipfs.dweb.link/248.png"
                />
                #248 Joe{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeih2ehuoupdn6do4kpw4ooksq3kjmjymor57epjsid3ysc7jobquz4.ipfs.dweb.link/249.png"
                />
                #249 Kong{" "}
              </a>
            </li>
            <li>
              <a>
                <img
                  id="searchimg"
                  src="https://bafybeibkqgiccvx5vnmml32s5vju7yxlv5prcfyuftplt5yer6pkiqcsya.ipfs.dweb.link/250.png"
                />
                #250 Nohor{" "}
              </a>
            </li>
          </div>
        </ul>
      </div>
    </section>
  </main>
  
</>

    
  )
}









export default App;