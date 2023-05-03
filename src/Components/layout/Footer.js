import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from '../css/Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.item}><FaFacebook /></li>
                <li className={styles.item}><FaInstagram /></li>
                <li className={styles.item}><FaLinkedin /></li>
            </ul>
            <p className={styles.copy_right}>
                <span>(83) 99869-9835</span> &copy; 2023
                </p>
        </footer>
    )
}

export default Footer;