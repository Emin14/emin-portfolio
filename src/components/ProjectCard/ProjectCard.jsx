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
                    {item.webLink ? <span className={styles.icon}><a style={{fontSize:"30px"}}  href={item.webLink} target="blank" ><GoBrowser/></a></span>:""}
                    {item.gitLink ? <span className={styles.icon}><a style={{fontSize:"30px"}} href={item.gitLink} target="blank" ><FaGithub/></a></span>:""}
                </div>
              </div>
      </div>
  )
}

export default ProjectCard
