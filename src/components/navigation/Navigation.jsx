import css from "./Navigation.module.css";

export default function Navigation({ onBtnClick }) {
  return (
    <section className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onBtnClick("Good")}
          >
            Good
          </button>
        </li>
        <li className={css.item}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onBtnClick("Neutral")}
          >
            Neutral
          </button>
        </li>
        <li className={css.item}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onBtnClick("Bad")}
          >
            Bad
          </button>
        </li>
        <li className={css.item}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onBtnClick("Reset")}
          >
            Reset
          </button>
        </li>
      </ul>
    </section>
  );
}
