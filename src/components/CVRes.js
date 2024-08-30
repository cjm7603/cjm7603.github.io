import styles from "./Subsection.module.css"

export default function CVRes() {
    return(
        <>
        <div>
            <p1>A link to download my full CV is at the bottom of this section.</p1><br/>
            <p1>Notable Sections Include:</p1><br/><br/>
            <p1>Academics:</p1><br/>
            <p1>High School: Stanton College Prep</p1><br/>
            <p1>College: University of Florida: Bachelors in Computer Science, Minor in Artifical Intelligence: Spring 2025</p1><br/><br/>
            <p1>Achievements:</p1><br/>
            <p1>University of Florida Innovation Academy</p1><br/>
            <p1>University of Florida University Scholars Program</p1><br/>
            <p1>Diverse Undergraduate Research Experience</p1><br/><br/>
            <p1>Notable Work Experience</p1><br/>
            <p1>Professional Full Stack Developer (1.5 yrs)</p1><br/>
            <p1>Undergraduate Research Assistant (1+ yrs - Present)</p1>

            <br/><br/><br/>
            <p1>Please download my full CV Below!</p1><br/>
            <a href="./files/Connor McLoon CV.pdf" download className={styles.link}>
                <button>Full CV</button>
            </a>
        </div>
        </>
    );
}