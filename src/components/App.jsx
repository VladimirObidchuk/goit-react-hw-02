import { useState } from "react";
import FeedBack from "./feedback/Feedback";
import Hero from "./hero/Hero";
import Navigation from "./navigation/Navigation";

export default function App() {
  const [feedBackCounts, setfeedBackCounts] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });
  const [isView, setIsView] = useState(false);
  const handleBtnClick = (feedbackType) => {
    if (feedbackType === "Reset") {
      setfeedBackCounts({
        Good: 0,
        Neutral: 0,
        Bad: 0,
      });
      setIsView(false);
    } else {
      setfeedBackCounts((prevCounts) => ({
        ...prevCounts,
        [feedbackType]: prevCounts[feedbackType] + 1,
      }));
      setIsView(true);
    }
  };

  return (
    <div>
      <Hero />
      <Navigation onBtnClick={handleBtnClick} />
      {isView ? <FeedBack feedbackCounts={feedBackCounts} /> : "No feedbck yet"}
    </div>
  );
}
