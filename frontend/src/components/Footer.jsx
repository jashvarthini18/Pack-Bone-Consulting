import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              {/* <div className="brand-mark">
                <span></span>
                <span></span>
                <span></span>
              </div> */}
              <div className="brand-mark">
                <img src="./pack-bone-logo.png" alt="Packbone Consulting" />
              </div>

              <div className="brand-text">
                <strong>packbone</strong>
                <small>CONSULTING</small>
              </div>
            </Link>

            <p>
              The backbone of the pack.
              <br />
              Packaging Development Consultancy.
            </p>
          </div>

          <div className="footer-column">
            <h4>NAVIGATE</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/industries">Industries</Link>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>

            <Link to="/approach">Our Approach</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column footer-contact">
            <h4>CONTACT</h4>

            <a href="mailto:packboneconsulting@gmail.com">
              packboneconsulting@gmail.com
            </a>

            <a href="tel:+919841358284">+91 98413 58284</a>
            <a href="tel:+917358053140">+91 73580 53140</a>


            <Link to="/contact">
              Start a Project
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PACKBONE CONSULTING</span>

          <span>PACKAGING DEVELOPMENT CONSULTANCY</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
