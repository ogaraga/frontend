import { Link } from "react-router-dom";
import fatherLogo from "../assets/logo.png";
import fatherLogos from "../assets/logo.png";
import styles from "./Navbar.module.css";
import { FaBars, FaXbox } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [activeNavBar, setActiveNavBar] = useState(false);

//toggele to add classlist
  const handleBar = () => {
    setToggle(!toggle);    
    setActiveNavBar(activeNavBar);
  };

  //toggle to remove classlist
  const handleRemove = () => {
    setToggle(!toggle);    
    setActiveNavBar(activeNavBar);
  };

  return (
    <div className={styles.navbar}>
      <Link to='/'>
      <img src={fatherLogo} alt="Fatherland Logo" /></Link>
      <div className={styles.navbarbtn}>
        <button className={styles.menuLogin}>
          <Link to="/signin">Sign in</Link>
        </button>
        <button className={styles.menuSignUp}>
          <Link to="/joinnow">Sign Up</Link>
        </button>
        {toggle ? (
          <FaBars className={styles.bars} onClick={handleBar} />
        ) : (
          <>
            <div
              className={activeNavBar?styles.navbarX : styles.navbarX_isActive}
            >
              <img src={fatherLogos} alt="Fatherland Logo" className={styles.img_navbar} />

              <div className={styles.navbarbtn}>
                <button className={styles.menuLoginX}>
                  <Link to="/signin">Sign in</Link>
                </button>
                <button className={styles.menuSignUpX}>
                  <Link to="/joinnow">Sign Up</Link>
                </button>
              </div>
            </div>
            <FaXbox className={styles.xmark} onClick={handleRemove} />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;