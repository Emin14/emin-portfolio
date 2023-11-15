import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDesktop} from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css';

function ProjectCard({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.img} alt="" className={styles.img} />
      <div className={styles.curtain}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.links}>
          {item.webLink ? <a className={styles.icon} href={item.webLink} target="blank" aria-label="demo"><FontAwesomeIcon icon={faDesktop} size='sm'/></a> : ''}
          {item.gitLink ? <a className={styles.icon} href={item.gitLink} target="blank" aria-label="github"><FontAwesomeIcon icon={faGithub} /></a> : ''}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
