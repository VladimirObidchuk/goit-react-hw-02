import { useState } from "react";
import FeedBack from "./feedback/Feedback";
import Hero from "./hero/Hero";
import Navigation from "./navigation/Navigation";

export default function App() {
  const [feedBackCounts, setfeedBackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [isView, setIsView] = useState(false);
  const [btnView, setBtnView] = useState(false);

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
