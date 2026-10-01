import styles from "./Hero.module.css";

function Hero({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      id="home"
    >
      <div className={styles.heroContent}>
        <p className={`${styles.eyebrow} heroEyebrow`}>
          DIGITAL EXPERIENCE STUDIO
        </p>

        <h1 className={`${styles.title} heroTitle`}>
          <span>W E L C O M E</span>
          <span>I T Z F I Z Z</span>
        </h1>

        <p className={`${styles.description} heroDescription`}>
          We create digital experiences that connect brands,
          technology, and people through meaningful design.
        </p>

        <div className={`${styles.heroBottom} heroBottom`}>
          <span>SCROLL TO EXPLORE</span>

          <span className={styles.arrow}>↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;