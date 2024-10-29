import { Link } from "react-router-dom";
import styles from "./LandingFooter.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function LandingFooter() {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.company}>
          <h2>
            COMPANY
            <hr />
          </h2>
          <span>
            <Link to="https://frontends-psi.vercel.app/about">About Us</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/press">Press Release</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/diversity">Diversity, Equity & inclusion</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/coreValues">Our core values</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/contactUs">Contact Us</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/how-it-works">How it works</Link>
          </span>
        </div>
        <div className={styles.products}>
          <h2>
            PRODUCTS <hr />
          </h2>
          <span>
            <Link to="https://frontends-psi.vercel.app/signin">SOCIAL NETWORK</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/travel">Travel and Tourism</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/learning">Learning and Coaching</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/food">Food and Restaurant</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/artistic-shopping">Artistic Shopping</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/digitalbanking">Digital Banking</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/tickets">Tickets & Events</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/entertainment">Entertainments & Experience</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/moreproducts">More Products</Link>
          </span>
        </div>
        <div className={styles.others}>
          <h2>
            OTHER LINKS
            <hr />
          </h2>
          <span>
            <Link to="https://frontends-psi.vercel.app/affiliate">Become An Affiliate</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/partnerdispute">Partner Dispute</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/partnerhelp">Partner Help</Link>
          </span>{" "}
          <span>
            <Link to="https://frontends-psi.vercel.app/safety">Safety Resources Centre</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/sustain">Sustainability</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/corporatecontacts">Corporate Contacts</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/faq">F.A.Q </Link>
          </span>
        </div>
        <div className={styles.legal}>
          <h2>
            LEGAL
            <hr />
          </h2>
          <span>
            <Link to="https://frontends-psi.vercel.app/privacy">Privacy & Security</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/t&c">Terms & Condition</Link>
          </span>
          <span>
            <Link to="https://frontends-psi.vercel.app/content">Content Guidelines & Reportage</Link>
          </span>{" "}
          <span>
            <Link to="https://frontends-psi.vercel.app/helpcentre">Help Centre</Link>
          </span>
        </div>
      </div>
      <hr className={styles.landHr} />
      <div className={styles.landfooter}>
        <p>All Rights Reserved By Fatherland Community LLC &copy; 2024</p>
        <ul className={styles.ulsocial}>
          <li>
            <Link to="https://facebook.com" target="_blank">
              <FaFacebook />
            </Link>{" "}
          </li>
          <li>
            <Link to="https://instagram.com" target="_blank">
              <FaInstagram />
            </Link>{" "}
          </li>
          <li>
            <Link to="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </Link>{" "}
          </li>
          <li>
            <Link to="https://twitter.com/" target="_blank"><FaTwitter /></Link>
            
          </li>
        </ul>
      </div>
    </>
  );
}

export default LandingFooter;
