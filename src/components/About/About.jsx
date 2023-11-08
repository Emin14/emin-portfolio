import React from 'react'
import logo1 from "../../assets/images/programmer.svg"
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
        <div className={styles.rightBlock}>
          <img src="" alt="" />
          <h1 className={styles.title}>Привет! Меня зовут Эмин</h1>
          <p className={styles.text}>Я frontend developer на React<br />
            В прошлом юрист и индивидуальный предприниматель. Именно подсчеты и анализ в бизнесе определили мой интерес к миру it<br />
            Более 1 года во frontend разработке<br />
            Жду с нетерпением нашей встречи 🩷</p>
          <div className={styles.location}>
            <i class="fa-solid fa-location-dot fa-1xl "></i>
            <span className={styles.locationText}>Рязань, Россия (готов к переезду)</span>
          </div>
        </div>
        <div className={styles.leftBlock}>
          <img src={logo1} alt="" />
        </div>
  </section>
  )
}
