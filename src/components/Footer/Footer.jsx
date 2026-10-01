import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerTop}>
        <p className={styles.eyebrow}>LET'S CREATE SOMETHING</p>

        <h2 className={styles.heading}>
          BUILD THE
          <span>FUTURE.</span>
        </h2>

        <a
          href="mailto:hello@itzfizz.com"
          className={styles.email}
        >
          hello@itzfizz.com
        </a>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.brand}>
          ITZFIZZ<span>.</span>
        </div>

        <p className={styles.copyright}>
          © 2026 ITZFIZZ. ALL RIGHTS RESERVED.
        </p>

        <a href="#home" className={styles.backToTop}>
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;