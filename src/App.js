

import Home from "./pages/home"
import { Routes, Route, Link } from "react-router-dom";
import "./styles/cyberia-estates.css"
import "./styles/cyberia-map.css"
import "./style.css"
import "./styles/enter-button.css"
import {showsmallestate, showmediumestate, showlargeestate, showpenthouse} from "./js/cyberia-slideshow"
import {showgunslinger, shownipopow, showergoproxy, showsigmaprime, aptnumsearch, showedenplaza} from "./js/map-locations"



function App() {
  return (
   
    <div className="App">
   
  
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cyberia-estates" exact element={<Estatepage />} />
        <Route path="/cyberia-map" exact element={<Mappage />} />
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
          <a href="../pages/cyberia-estates.html">Back to estates</a>
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
export default App;