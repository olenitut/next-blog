import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/ana.jpg"
          width={300}
          height={300}
          alt="Image of Nastya"
        />
      </div>
      <h1>Hi, I am Ana</h1>
      <p>
        This is a blog about web development. I built it to practice Next.js 😀
      </p>
    </section>
  );
};

export default Hero;
