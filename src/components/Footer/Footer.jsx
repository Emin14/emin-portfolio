import React from "react";
import styles from './Footer.module.css'

function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <h1 className={styles.logo}>Emin</h1>
          <div className={styles.icons}>
          <a href="https://t.me/emin_az14" target="_blank">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://github.com/Emin14?tab=repositories"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/emin-agjaev/" target="_blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=79537375512" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="mailto:emin-agjaev@mail.ru" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
          </div>
      </footer>
  );
}

export default Footer;
