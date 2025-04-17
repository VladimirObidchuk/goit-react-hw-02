import { useEffect, useState } from "react";
import css from "./Feedback.module.css";

export default function FeedBack({ feedbackCounts }) {
  const [total, setTotal] = useState("");
  const [positivePrecentage, setpositivePrecentage] = useState("");
  useEffect(() => {
    const { good, neutral, bad } = feedbackCounts;
    const totalFeedBack = good + neutral + bad;
    setTotal(totalFeedBack);
    if (totalFeedBack > 0) {
      const procent = Math.round((good / totalFeedBack) * 100);
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
