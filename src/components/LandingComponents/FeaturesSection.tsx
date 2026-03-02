import styles from "../../css/Landing/FeaturesFooter.module.css";
import { Eye, Heart, Zap } from "lucide-react";

function FeaturesSection() {
  return (
    <section className={styles.featuresWrapper}>
        <div className="px-20 py-20 flex flex-col md:flex-row justify-between gap-16">
            
            <div className={styles.featureCard}>
            <div className={styles.iconBox}>
                <Eye size={20} />
            </div>
            <h3 className="text-lg font-semibold mt-6">
                Live Previews
            </h3>
            <p className="mt-3 text-sm opacity-70 leading-relaxed max-w-sm">
                See every component rendered in real time before you copy the code.
            </p>
            </div>

            <div className={styles.featureCard}>
            <div className={styles.iconBox}>
                <Heart size={20} />
            </div>
            <h3 className="text-lg font-semibold mt-6">
                Community Votes
            </h3>
            <p className="mt-3 text-sm opacity-70 leading-relaxed max-w-sm">
                Like, comment, and surface the best components from the community.
            </p>
            </div>

            <div className={styles.featureCard}>
            <div className={styles.iconBox}>
                <Zap size={20} />
            </div>
            <h3 className="text-lg font-semibold mt-6">
                Copy & Go
            </h3>
            <p className="mt-3 text-sm opacity-70 leading-relaxed max-w-sm">
                One-click code snippets ready to drop into any React project.
            </p>
            </div>

        </div>
    </section>
  );
}

export default FeaturesSection;