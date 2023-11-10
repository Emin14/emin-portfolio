import React from "react";
import {socialIcons} from '../../utils/constans.js'
import styles from './Footer.module.css'

function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <h1 className={styles.logo}>Emin</h1>
          <div className={styles.icons}>
            {socialIcons.map(item => (
              <div className={styles.icon} key={item.title}>
              <a href={item.link}  target="_blank">
                <i className={item.icon}></i>
              </a>
              <span className={styles.description}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
  );
}

export default Footer;
