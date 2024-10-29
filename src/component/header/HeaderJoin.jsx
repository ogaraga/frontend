import NavLogin from "../navBars/NavLogin";
import styles from "./Header.module.css";

function HeaderJoin() {
  return (
    <div className={styles.headerJoin}>
      <NavLogin />
    </div>
  );
}

export default HeaderJoin;
