import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>DIGITAL EXPERIENCE STUDIO</p>

        <h1 className={styles.title}>
          <span>W E L C O M E</span>
          <span>I T Z F I Z Z</span>
        </h1>

        <p className={styles.description}>
          We create digital experiences that connect brands, technology,
          and people through meaningful design.
        </p>

        <div className={styles.heroBottom}>
          <span>SCROLL TO EXPLORE</span>
          <span className={styles.arrow}>↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;