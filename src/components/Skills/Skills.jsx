import { Slide } from 'react-awesome-reveal';
import Icon from '../Icon/Icon';
import { skills } from '../../utils/constans';
import styles from './Skills.module.css';

function Skills() {
  return (
    <Slide fraction={0.1} duration={1000} triggerOnce>
      <section id="skills" className={styles.skills}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Мой стек</h1>
          <p className={styles.description}>Технологии которыми я владею</p>
          <ul className={styles.icons}>
            {skills.map((item) => (
              <li key={item.id}>
                <Icon src={item.img} alt={item.name} message="" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Slide>
  );
}

export default Skills;
