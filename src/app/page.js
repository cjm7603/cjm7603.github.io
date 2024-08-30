"use client"; 

import Image from "next/image";
import styles from "./css/main.module.css";
import Navbar from "../components/Navbar";
import About from "../components/About"; 
import React, {useEffect, useState} from "react";



export default function Home() {

  useEffect(() => {
    let content = document.getElementById("content");
    let about = document.getElementById("about");
    let aboutSection = document.getElementById("aboutSection");
    about.addEventListener('click', () => {
      if(aboutSection.style.display == "none"){
        aboutSection.style.animation="fadeInAnimation 3s ease forwards"
        
      }
      else{
        console.log(aboutSection.style.animation);
        aboutSection.style.animation="fadeOutAnimation 3s ease forwards"
        console.log(aboutSection.style.animation);
      }
    })

  })


  return (
    <main className={styles.main}>
      <h1 id="intro" className={styles.top}>|</h1>
      <Navbar activeLink =""/>
      <About/>
      <div id="content"></div>
      <script type="text/javascript" src="js/intro.js" defer/>
    </main>
  );
}
