
import React from 'react';
import {Link} from 'react-router-dom'
import ".././styles/enter-button.css"


export default function Homepagemint() {return (



<>

 <section className="s1 section fade-in">
    <div className="enter-estate-container">
      <a
        className="pulseBox"
        id="enter-estate"
        href="../pages/cyberia-estates.html"
      >
       
      <Link to="/cyberia-estates">
<h4 id="enter-estate-btn-txt">Cyberia Estates</h4></Link>
      </a>
    </div>
    <div className="flex-container">
      <h1>
        2080 Uniquely generated cybercitizens living on the ergo blockchain
      </h1>
     <Link id="explore" to="/explore-gen2"> 
        EXPLORE
   </Link>
      <div className="enter-estate-container-mobile">
        <Link to="cyberia-estates"
          className="pulseBox"
          id="enter-estate"
          href="../pages/cyberia-estates"
        >
</Link>
    
      </div>
    </div>
  </section>
  <section className="s2 section fade-in" id="mint">
    <div className="flex-container-mint">
      <div className="container-mint container-mint-img">
        <img
          id="ergopixel-img"
          src="assets/cybercitizens/0.png"
          alt="example cybercitizen"
        />
        <p id="unsold" className="unsold">
          0 ready to sell!
        </p>
        <a id="mint-button" href="https://mintcybercitizen.com/">
          Mint
        </a>
      </div>
      <div className="container-mint">
        <h2 className="mint-title">
          When you buy a cybercitizen, you're not just buying an NFT . Your
          cybercitizen gives you membership to an exclusive city.
        </h2>
        <h3 className="address-title">ADDRESS:</h3>
        <p className="address-p2k address">
          9hfNCyqJsCSku8HXrV17Y6AaQciCAwkwx4M49imdWjRaTX22Mvz
        </p>
        <h3 className="address-title">Current Auctions:</h3>
        <p className="auctions-text">
          Current CyberCitizen auctions can be viewed
          <span>
            <a id="auction-link" className="faq-links">
              here
            </a>
          </span>
        </p>
      </div>
    </div>
  </section>
</>

)}