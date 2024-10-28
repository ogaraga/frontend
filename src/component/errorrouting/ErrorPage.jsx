import Header from '../header/Header';
import styles from './ErrorPage.module.css'
function ErrorPage (){
    return (
        <>
        <Header/>
        <div className={styles.errorpage} >
            <h1>Oops.... Something went wrong! <br />{'===>'} Page not found! <br></br>
                <span>Status: 404</span>
            </h1>
        </div>
        </>
    )
}
export default ErrorPage;