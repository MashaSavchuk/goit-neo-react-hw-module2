import { useState, useEffect } from "react";
import "./App.css";

import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const loadState = () => {
    const saveState = localStorage.getItem("feedbackState");
    if (saveState) {
      return JSON.parse(saveState);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };

  const [values, setValues] = useState(loadState);

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(values));
  }, [values]);

  const totalFeedback = () =>
    Object.values(values).reduce((start, value) => start + value, 0);

  const updateFeedback = (feedbackType) => {
    setValues((prevValue) => ({
      ...prevValue,
      [feedbackType]: prevValue[feedbackType] + 1,
    }));
  };

  const clearFeedback = () => {
    setValues((prevValue) => {
      const clearValues = Object.keys(prevValue).reduce((start, key) => {
        start[key] = 0;
        return start;
      }, {});
      return clearValues;
    });
  };

  return (
    <div>
      <Description />
      <Options
        options={Object.keys(values)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        clearFeedback={clearFeedback}
      />
      {totalFeedback() > 0 ? (
        <Feedback
          options={values}
          countTotalFeedback={totalFeedback()}
          positive={Math.round((values.good / totalFeedback()) * 100)}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
