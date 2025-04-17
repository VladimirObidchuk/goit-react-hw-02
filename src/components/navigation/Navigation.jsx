import css from "./Navigation.module.css";

export default function Navigation({ onBtnClick, btnView }) {
  return (
    <section className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onBtnClick("good")}
          >
            Good
          </button>
        </li>
        <li className={css.item}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onBtnClick("neutral")}
          >
            Neutral
          </button>
        </li>
        <li className={css.item}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onBtnClick("bad")}
          >
            Bad
          </button>
        </li>
        <li className={css.item}>
          {btnView && (
            <button
              type="button"
              className={css.btn}
              onClick={() => onBtnClick("reset")}
            >
              Reset
            </button>
          )}
        </li>
      </ul>
    </section>
  );
}
