import Homepagemint from "../components/homepage-mint"
import Homepagemap from "../components/homepage-map"
import Homepagefaq from "../components/homepage-faq"
import Homepageteam from "../components/homepage-team"
export default function Home () {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="./assets/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="./styles/style.css" />
  <link rel="stylesheet" href="./styles/enter-button.css" />
  <title>CyberCitizens</title>
  <header>
    <div className="logo">
      <img id="scrollTop" src="./assets/logo-name.png" alt="" />
    </div>
    <input type="checkbox" name="" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul className="nav-links">
        <li className="desktop-li">
          <a id="discord-desktop" href="https://discord.com/invite/7FcEFKcKJ7">
            <img
              id="header-image"
              src="./assets/logo-discord.svg"
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
              src="./assets/logo-twitter.svg"
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
          <a href="#mint">Mint</a>
        </li>
        <li>
          <a href="#roadmap">Map</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#faq">F.A.Q</a>
        </li>
        <li>
          <a href="https://docs.cybercitizens.io/">Whitepaper</a>
        </li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </header>
< Homepagemint />
< Homepagemap />
< Homepageteam />
< Homepagefaq />
  <footer>
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          className="footer-logo"
          src="./assets/logo-name.png"
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
)}

