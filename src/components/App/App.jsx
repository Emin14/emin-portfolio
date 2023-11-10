import React from 'react'
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Projects from "../../components/Projects/Projects.jsx"
import Skills from "../../components/Skills/Skills.jsx"
import About from "../../components/About/About.jsx"
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App