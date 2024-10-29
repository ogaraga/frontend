import Navbar from "../navBars/NavBar";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  );
}

export default Header;
