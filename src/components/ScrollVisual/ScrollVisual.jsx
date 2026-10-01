import styles from "./ScrollVisual.module.css";
import heroCar from "../../assets/images/hero-car.png";

function ScrollVisual() {
  return (
    <section className={styles.visualSection} id="work">
      <div className={styles.visualHeader}>
        <p className={styles.eyebrow}>SCROLL EXPERIENCE</p>

        <h2 className={styles.heading}>
          MOVE WITH
          <span>THE MOMENT.</span>
        </h2>
      </div>

      <div className={styles.visualStage}>
        <div className={styles.glow}></div>

        <div className={styles.visualCircle}></div>

        <img
          src={heroCar}
          alt="Modern car"
          className={styles.car}
        />

        <div className={styles.scrollLabel}>
          <span>SCROLL</span>
          <span className={styles.line}></span>
        </div>
      </div>

      <div className={styles.visualInfo}>
        <p>
          Scroll to experience a visual interaction where movement,
          scale, and position respond naturally to your scrolling.
        </p>
      </div>
    </section>
  );
}

export default ScrollVisual;