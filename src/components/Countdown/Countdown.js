import React, { useState, useEffect } from "react";
import "./Countdown.scss";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Countdown = ({ countdownTimestamp }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestamp);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestamp]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div id="countdown">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>minutes</span>
      <span>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default Countdown;
