import NavJoin from "../navBars/NavJoin";
// import NavLogin from "../navbar/NavLogin";
import styles from "./Header.module.css";

function HeaderLogin() {
  return (
    <div className={styles.headerLogin}>
      <NavJoin />
    </div>
  );
}

export default HeaderLogin;
