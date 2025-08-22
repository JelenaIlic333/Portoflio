'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import SiteProject from "./components/SiteProject.jsx";


export default function Home() {

const [isDarkMode, setIsDarkMode] = useState(true);

useEffect(()=>{
  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && 
  window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
  }else{
      setIsDarkMode(false);
  }
},[]);

useEffect(()=>{
 if(isDarkMode){
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  localStorage.theme = 'dark';
}else{
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light'); // dodato
  localStorage.theme = 'light'; // ili ''
}
},[isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Services isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <SiteProject isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}
