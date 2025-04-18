import { useEffect, useState } from "react";
import FeedBack from "./feedback/Feedback";
import Options from "./options/Options";
import Description from "./description/Description";
import Notification from "./notification/Notification";

export default function App() {
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

  const { good, neutral, bad } = feedBackCounts;
  const totalFeedBack = good + neutral + bad;
  const positivePercentage = Math.round((good / totalFeedBack) * 100);

  const handleBtnClick = (feedbackType) => {
    if (feedbackType === "reset") {
      setfeedBackCounts({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setfeedBackCounts((prevCounts) => {
        const newCounts = {
          ...prevCounts,
          [feedbackType]: prevCounts[feedbackType] + 1,
        };
        return newCounts;
      });
    }
  };

  return (
    <div>
      <Description />
      <Options onBtnClick={handleBtnClick} total={totalFeedBack} />
      {totalFeedBack > 0 ? (
        <FeedBack
          feedbackCounts={feedBackCounts}
          total={totalFeedBack}
          positivePrecentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
