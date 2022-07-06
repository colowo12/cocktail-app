import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

const initialFormData = {
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);

  const updateValue = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className={styles.aboutSection}>
        <h1>Who doesn't love a good cocktail? </h1>
        <br />
        <p className={styles.text}>
          {" "}
          This website was brought to you by cocktail enthusiasts like you
        </p>
        <p className={styles.text}>
          {" "}
          Have recommendations for cocktails we should add?
        </p>
        <p className={styles.text}> Send us your drink recipe below</p>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.img}>
          <Image src="/cocktail.svg" width={200} height={200} />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className={styles.input}
            onChange={updateValue}
          />
          <textarea
            rows={5}
            name="message"
            placeholder="message"
            className={styles.textarea}
            onChange={updateValue}
          />
          <button
            type="submit"
            className={styles.button}
            onClick={(event) => event.preventDefault()}
          >
            Send &rarr;
          </button>
        </form>
      </div>
    </>
  );
}
