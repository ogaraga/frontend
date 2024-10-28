import React, { useContext } from 'react'
import styles from './Navbar.module.css';
import userContext from '../context/UserContext';
function Online() {
    const {user} = useContext(userContext);
  return (
    <>
    {user?
    <div className={styles.online}></div> :
    <div className={styles.offline}></div>}
    </>
  )
}

export default Online;