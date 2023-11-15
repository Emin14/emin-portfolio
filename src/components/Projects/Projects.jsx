import { Slide } from 'react-awesome-reveal';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../utils/constans';
import styles from './Projects.module.css';

function Projects() {
  return (
    <Slide delay={200} duration={1200} triggerOnce>
      <section id="projects" className={styles.projects}>
        <h1 className={styles.title}>Мои проекты</h1>
        <p className={styles.description}>
          Вот несколько проектов, над которыми я работал в последнее время
        </p>
        <ul className={styles.projectCards}>
          {projects.map((item) => (
            <li key={item.id}><ProjectCard item={item} /></li>
          ))}
        </ul>
      </section>
    </Slide>
  );
}

export default Projects;
