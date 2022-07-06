import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Cocktails.module.css";

export default function List({ data }) {
  let [search, updateSearch] = useState("");

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <>
      <div className={styles.listWrapper}>
        <div className={styles.label}> Find a drink: </div>
        <form className={styles.form}>
          <input
            type="text"
            name="search"
            placeholder="search"
            className={styles.input}
            onChange={handleChange}
            value={search}
          />
        </form>
      </div>
      <div className={styles.list}>
        {data.drinks
          .filter(({ strDrink }) => strDrink.includes(search))
          .map((cocktail) => {
            return (
              <div key={cocktail.idDrink} className={styles.card}>
                <div className={styles.imgContainer}>
                  <Image
                    src={cocktail.strDrinkThumb}
                    layout="fill"
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <Link href={`/cocktails/${cocktail.idDrink}`}>
                    <a className={styles.title}>{cocktail.strDrink}</a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
