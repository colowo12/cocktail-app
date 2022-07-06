import Head from "next/head";
import Navbar from "./navbar";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cocktail App</title>
        <meta name="description" content="web app displays list of cocktails" />
        <link rel="icon" href="/cocktail.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}
