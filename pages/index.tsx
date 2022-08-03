import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import austinPhoto from "../public/austin-photo.jpeg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Austin Blade</title>
        <meta name="description" content="Austin Blade Software Engineer" />
        <link rel="icon" href="/blade-favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.photoContainer}>
          <Image src={austinPhoto} alt="Austin Blade" layout="fill" />
        </div>
        <h1 className={styles.title}>austin blade</h1>
        <p className={styles.description}>software engineer</p>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            target="blank"
            href="https://github.com/THATBLADEBOY"
          >
            <span className={styles.linkEmoji}>🐱</span> github
          </a>
          <a
            className={styles.link}
            target="blank"
            href="https://twitter.com/_austinblade"
          >
            <span className={styles.linkEmoji}>🐦</span> twitter
          </a>
          <a
            className={styles.link}
            target="blank"
            href="https://www.linkedin.com/in/austin-blade/"
          >
            <span className={styles.linkEmoji}>👔</span> linkedin
          </a>
          <a
            className={styles.link}
            target="blank"
            href="mailto:hello@austinblade.com"
          >
            <span className={styles.linkEmoji}>✉️</span> email
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
