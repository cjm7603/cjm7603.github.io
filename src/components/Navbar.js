import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar(props){
    return (
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                <a href="/dashboard" style={{ textDecoration: props.activeLink === "dashboard" ? "underline" : "none" }} className={styles.link}>About</a>
                <a href="/queries" style={{ textDecoration: props.activeLink === "queries" ? "underline" : "none" }} className={styles.link}>Research</a>
                <a href="/charts" style={{ textDecoration: props.activeLink === "charts" ? "underline" : "none" }} className={styles.link}>CourseWork</a>
                <a href="/players" style={{ textDecoration: props.activeLink === "players" ? "underline" : "none" }} className={styles.link}>CV/Resume</a>
            </div>
        </nav>
      );
};