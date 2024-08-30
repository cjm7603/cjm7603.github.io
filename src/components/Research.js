import styles from "./Subsection.module.css"

export default function Research() {
    return(
        <>
        <div>
            <p1>Currently, the only resarch I am able to disclose is listed below</p1>
            <br/>
            <p1>Title (Tentative): Comparison of Modern MARL algorithms in SMACv2 using a Standardized Benchmarking System.</p1>
            <br/>
            <p1>Principle Investigator: Dr. Damon L. Woodard, dwoodard@ece.ufl.edu</p1>
            <br/>
            <p1>Institution: Florida Institute for National Security (FINS), Department: UF Department of Electrical and Computer Engineering (ECE)</p1>
            <br/>
            <p1>Start: Spring 2024 (8 months afiliated)</p1>
            <br/>
            <p1 className={styles.paragraph}>Research Focus: This paper focuses mainly on tracking the development of different Multi-Agent 
                Reinforcement Learning (MARL) algorithms. The 
                <a href="https://github.com/oxwhirl/smacv2/tree/main" className={styles.link}> Starcraft Multi-Agent Challenge version 2 (SMACV2) </a>  
                offers a standardized testing environment for MARL algorithms, as well as 
                <a href="https://github.com/facebookresearch/benchmarl" className={styles.link}> BenchMARL</a>, which offers a unique
                and effective framework for conducting tests with varying configurations. Taking advantage of all these tools, this paper
                aims to provide an up-to-date review of the field of Multi-Agent Reinforcement Learning.</p1>
            <br/>
            <img src="https://github.com/oxwhirl/smacv2/raw/main/docs/imgs/reflect.png" height={250} width={400} className={styles.image}></img>
            <p1>Image sourced from </p1>
            <a href="https://github.com/oxwhirl/smacv2/blob/main/docs/imgs/reflect.png">SMACV2 Githup repo.</a>
        </div>
        </>
    );
}