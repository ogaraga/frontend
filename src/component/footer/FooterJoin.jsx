import { Link } from 'react-router-dom';
import styles from './FooterJoin.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function FooterJoin() {
  return (
    
         <div className={styles.footer2}>
        <p>All Rights Reserved By Fatherland Community LLC &copy; 2024</p>
        <ul className={styles.ulsocial} ><li>
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
  )
}

export default FooterJoin;