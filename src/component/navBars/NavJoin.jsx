import { Link } from "react-router-dom";
import fatherLogo from "../assets/logo.png";
import fatherLogos from "../assets/logo.png";
import styles from "./NavBar.module.css";
import { FaBars, FaXbox } from "react-icons/fa";
import { useState } from "react";
function NavJoin() {
  const [toggle, setToggle] = useState(true);
  const [activeNavBar, setActiveNavBar] = useState(false);
  const handleBar = () => {
    setToggle(!toggle);
    setActiveNavBar(activeNavBar);
  };
  const handleRemove = () => {
    setToggle(!toggle);
    setActiveNavBar(activeNavBar);
  };
  return (
    <div className={styles.navbar}>
      <Link to="https://frontends-psi.vercel.app">
        <img src={fatherLogo} alt="Fatherland Logo" />
      </Link>
      <div className={styles.navbarbtn}>
        <button className={styles.menuSignUp}>
          <Link to="https://frontends-psi.vercel.app/signin">Sign In</Link>
        </button>
        {toggle ? (
          <FaBars className={styles.bars} onClick={handleBar} />
        ) : (
          <>
            <div
              className={
                activeNavBar ? styles.navbarX : styles.navbarX_isActive
              }
            >
              <img
                src={fatherLogos}
                alt="Fatherland Logo"
                className={styles.img_navbar}
              />

              <div className={styles.navbarbtn}>
                <button className={styles.menuLoginX}>
                  <Link to="https://frontends-psi.vercel.app/signin">Sign in</Link>
                </button>
              </div>
            </div>
            <FaXbox className={styles.xmark} onClick={handleRemove} />
          </>
        )}
      </div>
    </div>
  );
}

export default NavJoin;
