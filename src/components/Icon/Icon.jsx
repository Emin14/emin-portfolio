import styles from './Icon.module.css';

function Icon({ src, alt }) {
  return (
    <div className={styles.icon}>
      <div className={styles.imgWrapper}>
        <img src={src} alt={alt} className={styles.img} />
      </div>
      <p className={styles.title}>
        {' '}
        {alt}
        {' '}
      </p>
    </div>
  );
}

export default Icon;
