import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Sip Happens Café</h1>
        <p className={css.text}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    </section>
  );
}
