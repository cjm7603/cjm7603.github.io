"use client"; 

import Image from "next/image";
import styles from "./css/main.module.css";
import Navbar from "../components/Navbar";
import About from "../components/About"; 
import React, {useEffect, useState} from "react";
import CourseWork from "@/components/CourseWork";
import CVRes from "@/components/CVRes";
import Research from "@/components/Research";


export default function Home() {


  useEffect(() => {
    let about = document.getElementById("about");
    let aboutSection = document.getElementById("aboutSection");
    let courseWork = document.getElementById("coursework");
    let courseworkSection = document.getElementById("courseWorkSection");
    let cvresume = document.getElementById("cvresume");
    let cvresumeSection = document.getElementById("resumeSection");
    let research = document.getElementById("research");
    let researchSection = document.getElementById("researchSection");


    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    async function fadeIn(arg1, args){
      args.forEach((arg) =>{
        arg.classList.add(styles.fadeOut);
        arg.classList.remove(styles.fadeIn);
      })
      await sleep(1500);
      arg1.classList.add(styles.fadeIn);
      arg1.classList.remove(styles.fadeOut, styles.intro);
    }


    //add about event listener
    about.addEventListener('click', () => {
      aboutSection = document.getElementById("aboutSection");
      if(window.getComputedStyle(aboutSection).display === "none"){
        fadeIn(aboutSection, [courseworkSection, cvresumeSection, researchSection])
      }
    })


    //add courseWork event listener
    courseWork.addEventListener('click', () => {
      if(window.getComputedStyle(courseworkSection).display === "none"){
        fadeIn(courseworkSection, [aboutSection, cvresumeSection, researchSection])
      }
    })


    //add cvresume event listener
    cvresume.addEventListener('click', () => {
      if(window.getComputedStyle(cvresumeSection).display === "none"){
        fadeIn(cvresumeSection, [aboutSection, courseworkSection, researchSection])
      }
    })


    //add research event listener
    research.addEventListener('click', () => {
      if(window.getComputedStyle(researchSection).display === "none"){
        fadeIn(researchSection, [aboutSection, courseworkSection, cvresumeSection])
      }
    })

  })


  return (
    <main className={styles.main}>
      <h1 id="intro" className={styles.top}>|</h1>
      <Navbar activeLink =""/>
      <div id="aboutSection" className={styles.aboutIntro}>
        <About/>
      </div>
      <div className={styles.intro} id="researchSection">
        <Research/>
      </div>
      <div className={styles.intro} id="courseWorkSection">
        <CourseWork/>
      </div>
      <div className={styles.intro} id="resumeSection">
        <CVRes/>
      </div>

      <script type="text/javascript" src="js/intro.js" defer/>
    </main>
  );
}
