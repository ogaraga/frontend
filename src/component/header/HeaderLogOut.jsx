import styles from './Header.module.css'
import NavLogOut from '../navbar/NavLogOut'

function HeaderLogOut() {
  return (
    <div className={styles.headerlogout} >
        <NavLogOut/>
    </div>
  )
}

export default HeaderLogOut;