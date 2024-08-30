import styles from "./Subsection.module.css"
import Image from "next/image"
export default function About() {
    return(
        <>
        <div>
            <p1>Hello! My name is Connor McLoon. I am a Computer Science Undergraduate with the University of Florida!</p1>
            <br/>

            <p1>I work with the </p1>
            <a href="https://fins.institute.ufl.edu/" className={styles.link}>Florida Institute for National Security </a>
            <p1>in the </p1>
            <a href="https://aaig.ece.ufl.edu/" className={styles.link}>Applied Artifical Intelligence Group.</a>
            <br/>
        
            <p1>My research mainly pertains to Multi-Agent Reinforcement Learning (MARL), and I am currenlty working on multiple papers.</p1>
            <br/>
            <p1>On my free time, I like to play Factorio, read, or paint. Feel free to reach out to me with any questions. :)</p1>

            <img src="./images/me.jpg" width={250} height={250} className={styles.image}/>

        </div>
        </>
    );
}