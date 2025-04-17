import { useEffect, useState } from "react";
import FeedBack from "./feedback/Feedback";
import Optios from "./options/Options";
import Description from "./description/Description";
import Notification from "./notification/Notification";

export default function App() {
  const [isView, setIsView] = useState(false);
  const [btnView, setBtnView] = useState(false);
  const [total, setTotal] = useState("");
  const [positivePrecentage, setpositivePrecentage] = useState("");
  const [feedBackCounts, setfeedBackCounts] = useState(() => {
    const saveFeedBack = window.localStorage.getItem("feed-back-data");
    if (!saveFeedBack) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
    return JSON.parse(saveFeedBack);
  });
  useEffect(() => {
    window.localStorage.setItem(
      "feed-back-data",
      JSON.stringify(feedBackCounts)
    );
  }, [feedBackCounts]);
  useEffect(() => {
    const { good, neutral, bad } = feedBackCounts;
    const totalFeedBack = good + neutral + bad;
    setTotal(totalFeedBack);
    if (totalFeedBack > 0) {
      const procent = Math.round((good / totalFeedBack) * 100);
      setpositivePrecentage(procent);
    } else {
      setpositivePrecentage(0);
    }
  }, [feedBackCounts]);

  const handleBtnClick = (feedbackType) => {
    if (feedbackType === "reset") {
      setfeedBackCounts({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      setIsView(false);
      setBtnView(false);
    } else {
      setfeedBackCounts((prevCounts) => {
        const newCounts = {
          ...prevCounts,
          [feedbackType]: prevCounts[feedbackType] + 1,
        };
        return newCounts;
      });
      setIsView(true);
      setBtnView(true);
    }
  };

  return (
    <div>
      <Description />
      <Optios onBtnClick={handleBtnClick} btnView={btnView} />
      {isView ? (
        <FeedBack
          feedbackCounts={feedBackCounts}
          total={total}
          positivePrecentage={positivePrecentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
