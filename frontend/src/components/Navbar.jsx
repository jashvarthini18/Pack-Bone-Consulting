import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Package,
  Factory,
  TrendingDown,
  Settings2,
  FlaskConical,
  Truck,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* ================= BRAND ================= */}

        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="brand-text">
            <strong>PACK BONE</strong>
            <small>CONSULTING</small>
          </div>
        </Link>


        {/* ================= NAVIGATION ================= */}

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>


          {/* ================= SERVICES DROPDOWN ================= */}

          <div
            className={`nav-dropdown ${
              servicesOpen ? "dropdown-open" : ""
            }`}
          >

            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={toggleServices}
              aria-expanded={servicesOpen}
            >
              Services

              <ChevronDown
                size={14}
                className="services-chevron"
              />
            </button>


            {servicesOpen && (
              <div className="services-dropdown">

                <div className="dropdown-header">
                  <span>OUR CAPABILITIES</span>

                  <p>
                    End-to-end packaging development
                    solutions.
                  </p>
                </div>


                <div className="dropdown-grid">

                  <Link
                    to="/services"
                    className="dropdown-view-all"
                    onClick={closeMenu}
                  >
                    <div className="dropdown-view-icon">
                      <Package size={19} />
                    </div>

                    <div>
                      <strong>All Services</strong>

                      <span>
                        Explore all 18 capabilities
                      </span>
                    </div>

                    <ArrowUpRight size={17} />
                  </Link>


                  <Link
                    to="/services#packaging-development"
                    onClick={closeMenu}
                  >
                    <Package size={17} />

                    <span>
                      End-to-End Packaging Development
                    </span>
                  </Link>


                  <Link
                    to="/services#npd"
                    onClick={closeMenu}
                  >
                    <Factory size={17} />

                    <span>
                      New Product Development
                    </span>
                  </Link>


                  <Link
                    to="/services#vendor-development"
                    onClick={closeMenu}
                  >
                    <Factory size={17} />

                    <span>
                      Vendor Development
                    </span>
                  </Link>


                  <Link
                    to="/services#cost-saving"
                    onClick={closeMenu}
                  >
                    <TrendingDown size={17} />

                    <span>
                      Cost Saving & Value Engineering
                    </span>
                  </Link>


                  <Link
                    to="/services#automation"
                    onClick={closeMenu}
                  >
                    <Settings2 size={17} />

                    <span>
                      Packaging Machinery & Automation
                    </span>
                  </Link>


                  <Link
                    to="/services#testing"
                    onClick={closeMenu}
                  >
                    <FlaskConical size={17} />

                    <span>
                      Testing & Validation
                    </span>
                  </Link>


                  <Link
                    to="/services#logistics"
                    onClick={closeMenu}
                  >
                    <Truck size={17} />

                    <span>
                      Logistics & Container Optimisation
                    </span>
                  </Link>

                </div>

              </div>
            )}

          </div>


          <Link to="/industries" onClick={closeMenu}>
            Industries
          </Link>

          <Link to="/approach" onClick={closeMenu}>
            Approach
          </Link>

          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>


          {/* MOBILE CONTACT */}

          <Link
            to="/contact"
            className="mobile-contact"
            onClick={closeMenu}
          >
            Contact Us
            <ArrowUpRight size={15} />
          </Link>

        </nav>


        {/* ================= DESKTOP CTA ================= */}

        <Link to="/contact" className="nav-cta">
          Contact Us
          <ArrowUpRight size={16} />
        </Link>


        {/* ================= MOBILE MENU ================= */}

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;