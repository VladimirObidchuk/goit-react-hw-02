import { useEffect, useState } from "react";
import css from "./Feedback.module.css";

export default function FeedBack({ feedbackCounts }) {
  const [total, setTotal] = useState("");
  const [positivePrecentage, setpositivePrecentage] = useState("");
  useEffect(() => {
    const { Good, Neutral, Bad } = feedbackCounts;
    const totalFeedBack = Good + Neutral + Bad;
    setTotal(totalFeedBack);
    if (totalFeedBack > 0) {
      const procent = Math.round((Good / totalFeedBack) * 100);
      setpositivePrecentage(procent);
    } else {
      setpositivePrecentage(0);
    }
  }, [feedbackCounts]);

  return (
    <section className={css.fedback}>
      <div className={css.container}>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.text}>Good: {feedbackCounts.Good} </p>
          </li>
          <li className={css.item}>
            <p className={css.text}>Neutral: {feedbackCounts.Neutral}</p>
          </li>
          <li className={css.item}>
            <p className={css.text}>Bad: {feedbackCounts.Bad}</p>
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
