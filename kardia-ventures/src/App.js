import React from 'react';
import {Link} from 'react-scroll';

import './css/bootstrap.min.css';
import './css/who.css';
import './css/philosophy.css';
import './css/value.css';
import './css/portfolio.css';
import './css/partners.css';
import './css/contact.css';
import './css/footer.css';
import './css/navbar-header.css';

import ScrollToTop from './js/totop';

function App() {
  return (
    <div className="App">
    {/*Navbar*/}
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="logo">
            <img src={require("./icons/Logo.svg").default} alt="Kardia Venture"/>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
          <span className="navbar-toggler-icon" />&gt;
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link " to="who" smooth={true} duration={1000}>Who We Are</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="philo" smooth={true} duration={1000}>Philosophy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="value" smooth={true} duration={1000}>Value Proposition</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="ports" smooth={true} duration={1000}>Our Portfolios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="parts" smooth={true} duration={1000}>Our Partners</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/*Header*/}
    <header className="header">
      <div className="overlay" />
      <div className="background">
        <img src={require("./images/illustrations/PNG/Frame 2471.png").default} alt="home bg"/>
      </div>
      <div className="container">
        <div className="description">
          <h1>Connecting <br />the decentralized world.</h1>
          <p>Here we focus on providing you the best
            <br />conditions for your dream projects to
            <br />prosper in.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <img src={require('./images/Grayscale logos/PNG/spl.png').default} alt="spl"/>
        </div>
        <div className="column2">
          <img src={require("./images/Grayscale logos/PNG/aioz.png").default} alt="aioz"/>
        </div>
        <div className="column3">
          <img src={require("./images/Grayscale logos/PNG/atlas.png").default} alt="atlas"/>
        </div>
        <div className="column4">
          <img src={require("./images/Grayscale logos/PNG/fatfi.png").default} alt="fatfi"/>
        </div>
        <div className="column5">
          <img src={require("./images/Grayscale logos/PNG/globe.png").default} alt="globe"/>
        </div>
        <div className="column6">
          <img src={require("./images/Grayscale logos/PNG/kickpad.png").default} alt="kickpad"/>
        </div>
        <div className="column7">
          <img src={require("./images/Grayscale logos/PNG/nfttech.png").default} alt="nfttech"/>
        </div>
        <div className="column8">
          <img src={require("./images/Grayscale logos/PNG/roseon.png").default} alt="roseon"/>
        </div>
        <div className="column9">
          <img src={require("./images/Grayscale logos/PNG/showcase.png").default} alt="showcase"/>
        </div>
      </div>
    </header>


    {/*Section 1 Who we are*/}
    <div className="who">
      <h1 id="who">Who We Are</h1>
      <img src={require("./images/illustrations/Frame 2479.png").default} alt="who bg" />
      <div className="w-container">
        <div className="w-container1">
          <div className="who-panel who-card">
            <div className="w-icon1">
              <img src={require("./icons/link.svg").default} alt="link" height="30"/>
            </div>
            <h2>Investment arm of KardiaChain</h2>
            <p>
              Kardia Ventures is a dedicated Crypto-centric fund and served 
              as the Investment Arm for KardiaChain, 
              the leading blockchain technology company in Vietnam. 
            </p>
          </div> 
        </div>
        <div className="w-containerX2">
          <div className="w-container2">
            <div className="who-panel who-card">
              <div className="w-icon2">
                <img src={require("./icons/funnel-fill.svg").default} alt="funnel" height="30"/>
              </div>
              <h2>Our Expertise</h2>
              <p>
                The Kardia Ventures team is experienced in 
                both traditional finance and emergent blockchain technology. 
                We target investments in Seed, Private and Public Rounds launched by promising projects that seek 
                to decentralize the global economy and add value to the blockchain 
                ecosystem.
              </p>
            </div>
          </div>
          <div className="w-container3">
            <div className="who-panel who-card">
              <div className="w-icon3">
                <img src={require("./icons/wallet-fill.svg").default} alt="wallet" height="30"/>
              </div>
              <h2>Our Mission</h2>
              <p>
                Kardia Ventures is built based on our strong belief 
                in blockchain technology to disrupt existing industries 
                and create immense business opportunities. 
                The rise of decentralized trust based networks 
                will not only transform existing industries beyond recognition, 
                it also has the power to provide billions of underserved people 
                with access to financial services.
              </p>
            </div>
          </div>
        </div>  
      </div>
    </div>


    {/*Section 2 Our investment*/}
    <div className="philo">
      <div className="ph-bg">
      <img src={require("./images/illustrations/Frame 2477(1).png").default} height={1800} alt="philo bg" />
      </div>
      <h2 id="philo">FROM THE GROUND UP</h2>
      <h3>Our Investment Philosophy</h3>
      <div className="ph-container1">
        <div className="philo-panel philo-card">
          <div className="p-icon1">
            <img src={require("./icons/heart.svg").default} alt="heart" height="30"/>
          </div>
          <h4>Do. Dare. Deliver.</h4>
          <p>
            We are the dreamers, doers, 
            and disruptor who wish to push the world
            toward a better future.
          </p>
        </div>
      </div>
      <div className="ph-container2">
        <div className="philo-panel philo-card">
          <div className="p-icon2">
            <img src={require("./icons/stars.svg").default} alt="stars" height="30"/>
          </div>
          <h4>Inspire the Bold</h4>
          <p>
            Born out of KardiaChain, we value 
            and support pioneers and doers 
            to push the edges of the ecosystem 
            and drive value and progress.
          </p>
        </div>
      </div>
      <div className="ph-container3">
        <div className="philo-panel philo-card">
          <div className="p-icon3">
            <img src={require("./icons/search.svg").default} alt="search" height="30"/>
          </div>
          <h4>Macro Vision, Micro Execution</h4>
          <p>
            Our investment team and advisors lineup have very deep understanding 
            of the industry trend and actively support our entrepreneurs’ vision, 
            mission and implementation.
          </p>
        </div>
      </div>
      <div className="ph-container4">
        <div className="philo-panel philo-card">
          <div className="p-icon4">
            <img src={require("./icons/puzzle-fill.svg").default} alt="puzzle" height="30"/>
          </div>
          <h4>Propel New Disruptor</h4>
          <p>
            We cut through the noise to find 
            and back entrepreneurs and companies eager to be part of 
            the greatest technological revolution
            of our lifetimes since the Internet.
          </p>
        </div>
      </div>
    </div>


    {/* Section 3 Value Pros*/}
    <div className="value">
      <h2 id="value">FROM OUR EXPERIENCE FOUNDERS</h2>
      <h3>Strategic Value Proposition</h3>
      <div className="v-container1">
        <div className="value-panel value-card">
          <div className="v-icon1">
            <img src={require("./icons/trophy.svg").default} alt="trophy" height="30"/>
          </div>
          <h4>Regional Development</h4>
          <p>
            KardiaChain is well-known in Vietnam and 
            Southeast Asia region for its technology and innovation focus. 
            A strategic partnership with KardiaChain 
            help accelerate new projects and expand user adoption.
          </p>
        </div>
      </div>
      <div className="v-container2">
        <div className="value-panel value-card">
          <div className="v-icon2">
            <img src={require("./icons/journals.svg").default} alt="default" height="30"/>
          </div>
          <h4>Vietnam Focus</h4>
          <p>
            Strategic partner with largest enterprises in Vietnam,
            which range from e-commerce, telecommunications, banking, real estate, 
            gaming, and other industries.
          </p>
        </div>
      </div>
      <div className="v-container3">
        <div className="value-panel value-card">
          <div className="v-icon3">
            <img src={require("./icons/globe.svg").default} alt="Globe" height="30"/>
          </div>
          <h4>Media Network</h4>
          <p>
            Strong affiliation with media and other enterprise partners 
            that can draw public awareness and ensure successful launch.
          </p>
        </div>
      </div>
      <div className="v-container4">
        <div className="value-panel value-card">
          <div class="v-icon4">
            <img src={require("./icons/link-45deg.svg").default} alt="link" height="30"/>
          </div>
          <h4>Technical Support</h4>
          <p>
            Our in-house top-notch technical team 
            can help to integrate your project into Kardia ecosystem 
            to gain immediate access to 100,000+ 
            daily active users via Kai Membership Integration.
          </p>
        </div>
      </div>
    </div>


    {/*Section 4 Portfolios*/}
    <div className="ports">
      <h2 id="ports">Our Portfolios</h2>
      <div className="po-container">
        <div className="p-row1">
          <div className="po-column1">
            <img src={require("./images/Color logos/PNG/Frame 2437color logos.png").default} alt="spl"/>
          </div>
          <div className="po-column2">
            <img src={require("./images/Color logos/PNG/Frame 2458color logos.png").default} alt="atlas"/>
          </div>
          <div className="po-column3">
            <img src={require("./images/Color logos/PNG/Frame 2321color logos.png").default}  alt="aioz"/>
          </div>
          <div className="po-column4">
            <img src={require("./images/Color logos/PNG/fatficolor logos.png").default}  alt="fatfi"/>
          </div>
          <div className="po-column5">
            <img src={require("./images/Color logos/PNG/globecolor logos.png").default}  alt="globe"/>
          </div>
          <div className="po-column6">
            <img src={require("./images/Color logos/PNG/Frame 2440color logos.png").default} alt="kickpad"  />
          </div>
        </div>
        <div className="p-row2">    
          <div className="po-column7">
            <img src={require("./images/Color logos/PNG/nft-tech-logo-1 1color logos.png").default} alt="nfttech" />
          </div>
          <div className="po-column8">
            <img src={require("./images/Color logos/PNG/Frame 2441color logos.png").default} alt="roseon" />
          </div>
          <div className="po-column9">
            <img src={require("./images/Color logos/PNG/Frame 2442color logos.png").default} alt="showcase"  />
          </div>
        </div>
      </div> 
    </div>


    {/*Section 5 Partners*/} 
    <div className="parts">
      <h2 id="parts">Our Partners</h2>
      
      <div className="pa-container">
        <div className="pa-containerE">
          <h3>enterprise</h3>
          <div className="pa-row1">
            <div className="pa-column1">
              <img src={require("./images/Color logos/PNG/Frame 2446color logos.png").default} alt="LG"  />
            </div>

            <div className="pa-column2">
              <img src={require("./images/Color logos/PNG/Frame 2445color logos.png").default} alt="geleximco"/>
            </div>

            <div className="pa-column3">  
              <img src={require("./images/Color logos/PNG/mai-linh-corporation-seeklogo.comcolor logos.png").default} alt="mailinh"/>
            </div>

            <div className="pa-column4">
              <img src={require("./images/Color logos/PNG/Frame 2444color logos.png").default} alt="vtv"/>
            </div>

            <div className="pa-column5">
              <img src={require("./images/Color logos/PNG/Frame 2454color logos.png").default} alt="vff"/>
            </div>

            <div className="pa-column6">  
              <img src={require("./images/Color logos/PNG/Frame 2453color logos.png").default} alt="sports"/>
            </div>
          </div>
        </div>


        <div className="pa-containerBP">
          <h4>Blockchain Partners</h4>
          <div className="pa-row2">
            <div className="pa-column7">
              <img src={require("./images/Color logos/PNG/Frame 2319color logos.png").default} alt="contentos"/>
            </div>

            <div className="pa-column8">
              <img src={require("./images/Color logos/PNG/certik-logotype-v-b 1color logos.png").default} alt="certik"/>
            </div>

            <div className="pa-column9">
              <img src={require("./images/Color logos/PNG/Frame 2447color logos.png").default} alt="morpheus"/>
            </div>

            <div className="pa-column10">
              <img src={require("./images/Color logos/PNG/Frame 2321color logos-1.png").default} alt="vite"/>
            </div>

            <div className="pa-column11">
              <img src={require("./images/Color logos/PNG/Frame 2321color logos-2.png").default} alt="neo"/>
            </div>

            <div className="pa-column12">
              <img src={require("./images/Color logos/PNG/Frame 2321color logos-3.png").default} alt="chainlink"/>
            </div>
          </div>

          <div className="pa-row3">
            <div className="pa-column13">
              <img src={require("./images/Color logos/PNG/Frame 2448color logos.png").default} alt="tokoin"/>
            </div>

            <div className="pa-column14">
              <img src={require("./images/Color logos/PNG/Frame 2449color logos.png").default} alt="top network"/>
            </div>

            <div className="pa-column15">
              <img src={require("./images/Color logos/PNG/Frame 2450color logos.png").default} alt="block crafters"/>
            </div>

            <div className="pa-column16">
              <img src={require("./images/Color logos/PNG/Frame 2321color logos-4.png").default} alt="brand protocol"/>
            </div>
          </div>

        </div>
      </div>
    </div>


    {/*Email*/}
    <div className="email">
      <div className="email-container">
        <div className="ebg">
          <img src={require("./images/illustrations/PNG/Frame 2468.png").default} alt="email-background"/>
        </div>
        <form>
          <div className="subscribe">
            <h1>Receive our latest news!</h1>
            <p>Subscribe to receive our weekly newsletter and exciting news.</p>
          </div>
          <div className="frame">
            <div className="bottom">
              <input type="text" className="form-control" placeholder="Your email" name />
              <button type="button" className="btn btn-primary">
               <div className="btext">
                  <h2>Subscribe</h2>
                 </div> 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>


    {/*Footer*/}
    <footer className="footer">
      <div className="footer-container">
        <div className="fbg">
        <img src={require("./images/Footer/Rectangle 13.png").default} width={1510} height="100%" alt="footer bg"/>
        </div>

        <div className="rowF">
          <div className="innerF1">
            <div className="F-Logo">
              <img src={require("./icons/Logo-1.svg").default} alt="Logo"/>
            </div>
            <h1>Copyright © 2021. All rights reserved</h1>
          </div>

          <div className="innerF2">
            <h2>Legal</h2>
            <h3>Term of Services</h3>
            <h4>Privacy Policy</h4>
          </div>

          <div className="innerF3">
            <h2>Social Media</h2>
            <div className="icon-row">
              <div className="S-icon1">
                  <img src={require("./images/facebook.png").default} alt="facebook" height="35"/>
              </div>

              <div className="S-icon2">
                  <img src={require("./images/twitter.png").default} alt="twitter" height="35"/>
              </div>

              <div className="S-icon3">
                  <img src={require("./images/google.png").default} alt="google" height="35"/>
              </div>

              <div className="S-icon4">
                  <img src={require("./images/linkedin.png").default} alt="LinkedIn" height="35"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <ScrollToTop/>
  </div>
  );
}

export default App;
