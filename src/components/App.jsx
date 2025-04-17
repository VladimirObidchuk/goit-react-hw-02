import { useEffect, useState } from "react";
import FeedBack from "./feedback/Feedback";
import Hero from "./hero/Hero";
import Navigation from "./navigation/Navigation";

export default function App() {
  const [isView, setIsView] = useState(false);
  const [btnView, setBtnView] = useState(false);
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
      <Hero />
      <Navigation onBtnClick={handleBtnClick} btnView={btnView} />
      {isView ? <FeedBack feedbackCounts={feedBackCounts} /> : "No feedbck yet"}
    </div>
  );
}
