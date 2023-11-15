import { Roll, Fade } from 'react-awesome-reveal';
import logo1 from '../../assets/images/programmer.svg';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.rightBlock}>
        <img src="" alt="" />
        <h1 className={styles.title}>
          <Fade delay={200} cascade damping={0.07} triggerOnce>Привет! Меня зовут Эмин</Fade>
        </h1>
        <Roll delay={1400} duration={800} triggerOnce>
          <p className={styles.text}>
            Я frontend developer на React
            <br />
            В прошлом юрист и индивидуальный предприниматель.
            Именно подсчеты и анализ в бизнесе определили мой интерес к миру it
            <br />
            Более 1 года во frontend разработке
            <br />
            Жду с нетерпением нашей встречи 🩷
          </p>
        </Roll>
        <Roll delay={2000} duration={800} triggerOnce>
          <div className={styles.location}>
            <i className="fa-solid fa-location-dot fa-1xl " />
            <span className={styles.locationText}>Рязань, Россия (готов к переезду)</span>
          </div>
        </Roll>
      </div>
      <div className={styles.leftBlock}>
        <img src={logo1} alt="" />
      </div>
    </section>
  );
}
