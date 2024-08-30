import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar(props){


    return (
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                <button id="about" style={{ textDecoration: props.activeLink === "dashboard" ? "underline" : "none" }} className={styles.link}>About</button>
                <button id="research" style={{ textDecoration: props.activeLink === "queries" ? "underline" : "none" }} className={styles.link}>Research</button>
                <button id="coursework" style={{ textDecoration: props.activeLink === "charts" ? "underline" : "none" }} className={styles.link}>CourseWork</button>
                <button id="cvresume" style={{ textDecoration: props.activeLink === "players" ? "underline" : "none" }} className={styles.link}>CV/Resume</button>
            </div>
        </nav>
        
      );
};