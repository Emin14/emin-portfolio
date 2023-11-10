import React from 'react'
import {FaGithub} from "react-icons/fa"
import {GoBrowser} from "react-icons/go"
import styles from './ProjectCard.module.css'

function ProjectCard({item}) {
  return (
      <div className={styles.card}>
          <img src={item.img} alt="" className={styles.img} />
          <div className={styles.curtain}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.links}>
                {item.webLink ? <a className={styles.icon} href={item.webLink} target="blank" ><GoBrowser/></a> : ""}
                {item.gitLink ? <a className={styles.icon} href={item.gitLink} target="blank" ><FaGithub/></a> : ""}
          </div>
          </div>
      </div>
  )
}

export default ProjectCard
