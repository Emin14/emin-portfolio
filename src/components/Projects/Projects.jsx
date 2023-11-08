import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import img1 from "../../assets/images/projects/project-img1.png";
import img2 from "../../assets/images/projects/project-img2.png";
import img3 from "../../assets/images/projects/project-img3.png";
import img4 from "../../assets/images/projects/project-img4.png";
import styles from './Projects.module.css'

function Projects() {

  const projects = [
    {
      id: 1,
      title: "Armageddon__NextJS",
      description: "An online service for monitoring and destroying dangerous asteroids based on NASA API data.",
      img: img1,
      webLink: "https://armageddon-next-js-five.vercel.app/",
      gitLink: "https://github.com/Emin14/armageddon__NextJS"
    },
    {
      id: 2,
      title: "Funduchok-store",
      description: "Online store created using ReactJS:",
      img: img2,
      webLink: "",
      gitLink: "https://github.com/Emin14/funduchok-store"
    },
    {
      id: 3,
      title: "Jadoo-react",
      description: "Travel website in two languages.",
      img: img3,
      webLink: "https://jadoo-react-six.vercel.app/",
      gitLink: "https://github.com/Emin14/jadoo-react"
    },
    {
      id: 4,
      title: "Hangman",
      description: "Word Guessing Game",
      img: img4,
      webLink: "",
      gitLink: "https://github.com/Emin14/Hangman"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.title}>Мои проекты</h1>
      <p className={styles.description}>Вот несколько проектов, над которыми я работал в последнее время</p>
      <div className={styles.projectCards}>
        {projects.map((item, i) => <ProjectCard key={i} item={item} />)}
      </div>
    </section>
  );
}

export default Projects;
