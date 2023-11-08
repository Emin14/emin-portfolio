import React from 'react'
import styles from './Icon.module.css'

const Icon = ({src, alt, message=''}) => {
  return (
    <div className={styles.icon} >
      <div className={styles.imgWrapper}>
        <img src={src} alt={alt} className={styles.img}/>
      </div>
      <p className={styles.title}> {alt} </p>
    </div>
  )
}

export default Icon