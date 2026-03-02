import styles from "../../css/Landing/Hero.module.css";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.badge}>
          <span>🚀</span>
          <span>Over 150+ components available</span>
        </div>

        <h1 className={styles.title}>
          Discover and Share <br />
          <span className={styles.gradientText}>
            Reusable React Components
          </span>
        </h1>

        <p className={styles.subtitle}>
          A curated collection of production-ready React components built by developers,
          for developers. Browse, like, comment, and request new components for your next project.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn}>Explore Components <ArrowRight size={18} style={{ marginLeft: 6 }} /></button>
          <button className={styles.secondaryBtn}>Request Component</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;