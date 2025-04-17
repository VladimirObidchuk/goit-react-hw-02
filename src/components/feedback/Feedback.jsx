import css from "./Feedback.module.css";

export default function FeedBack({
  feedbackCounts,
  total,
  positivePrecentage,
}) {
  return (
    <section className={css.fedback}>
      <div className={css.container}>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.text}>Good: {feedbackCounts.good} </p>
          </li>
          <li className={css.item}>
            <p className={css.text}>Neutral: {feedbackCounts.neutral}</p>
          </li>
          <li className={css.item}>
            <p className={css.text}>Bad: {feedbackCounts.bad}</p>
          </li>
          <li className={css.item}>
            <p className={css.text}>Total: {total} </p>
          </li>
          <li className={css.item}>
            <p className={css.text}>Positive: {positivePrecentage}%</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
