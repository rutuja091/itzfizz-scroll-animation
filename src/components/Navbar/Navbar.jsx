import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        ITZFIZZ<span>.</span>
      </div>

      <nav className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className={styles.menuButton} aria-label="Open menu">
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;