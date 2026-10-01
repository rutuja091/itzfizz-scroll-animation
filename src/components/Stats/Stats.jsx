import styles from "./Stats.module.css";

function Stats() {
  const stats = [
    {
      number: "92%",
      title: "CLIENT SATISFACTION",
      description: "Strong relationships built through meaningful digital experiences.",
    },
    {
      number: "87%",
      title: "USER ENGAGEMENT",
      description: "Experiences designed to keep users connected with brands.",
    },
    {
      number: "95%",
      title: "PROJECT IMPACT",
      description: "Focused on creating measurable and memorable digital solutions.",
    },
  ];

  return (
    <section className={styles.stats} id="about">
      <div className={styles.header}>
        <p className={styles.eyebrow}>OUR IMPACT</p>

        <h2 className={styles.heading}>
          NUMBERS THAT
          <span>MAKE AN IMPACT.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <article className={styles.card} key={index}>
            <div className={styles.number}>{stat.number}</div>

            <div className={styles.cardContent}>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>

            <span className={styles.index}>
              0{index + 1}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;