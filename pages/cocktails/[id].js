import { useState } from "react";
import Image from "next/image";
import styles from "./cocktail.module.css";

const languageMapping = {
  "": "English",
  IT: "Italian",
  DE: "Deutsch",
};

export default function Cocktail({ drink }) {
  let [language, setLanguage] = useState("");

  let tags = drink.strTags || "";
  let languages = {};
  let ingredients = Object.entries(drink).reduce((acc, ingredient) => {
    let [key, val] = ingredient;
    if (key.includes("strInstructions") && val !== null) {
      languages[key.slice(15)] = val;
    }
    if (key.includes("Ingredient") && val !== null) {
      let num = key[key.length - 1];
      let amount = drink[`strMeasure${num}`];
      acc.push([val, amount]);
    }
    return acc;
  }, []);

  function handleChange(event) {
    event.preventDefault();
    setLanguage(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={drink.strDrinkThumb} layout="fill" className={styles.img} />
      </div>
      <h2>{drink.strDrink}</h2>
      {tags.length > 0 && (
        <div className={styles.taglist}>
          {tags.split(",").map((tag, idx) => {
            return (
              <div key={idx} className={styles.tag}>
                {tag}
              </div>
            );
          })}
        </div>
      )}
      <div className={styles.ingredients}>
        {ingredients.map((ingredient, idx) => {
          return (
            <p key={idx}>
              {ingredient[0]} &rarr; {ingredient[1] || "Have Fun"}
              <span className={styles.span}></span>
            </p>
          );
        })}
      </div>
      <div className={styles.selectWrapper}>
        <label for="cars">Choose a language:</label>
        <select
          name="language"
          className={styles.select}
          defaultValue=""
          value={language}
          onChange={handleChange}
        >
          {Object.keys(languages).map((lang) => {
            return (
              <option key={lang} value={lang}>
                {languageMapping[lang]}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.description}>
        <p>{languages[language]}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  );
  let data = await res.json();
  let paths = data.drinks.map((drink) => {
    return `/cocktails/${drink.idDrink}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let id = params.id;
  let drink = null;
  let res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  );
  let data = await res.json();
  data.drinks.forEach((bev) => {
    if (bev.idDrink === id) {
      drink = bev;
      return;
    }
  });

  return {
    props: {
      drink,
    },
  };
}
