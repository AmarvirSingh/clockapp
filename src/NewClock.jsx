import React, { useEffect, useState } from "react";

const NewClock = () => {
  const [time, setTime] = useState(new Date());
  const [datte, setDatte] = useState(new Date());

  const mon = (number) => {
    console.log(number);
    switch (number) {
      case 1:
        return "January";
      case 2:
        return "Febrauary";
      case 3:
        return "March";
      case 4:
        return "April";

      default:
        return <h1>No project match</h1>;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    var d = new Date();
    setDatte(d);
  }, []);

  function dateFormat() {
    var day = datte.getDay();
    var month = datte.getMonth();
    var year = datte.getFullYear();

    return setZero(day) + " " + mon(month + 1) + " " + year;
  }

  function timeFormat() {
    var hr = time.getHours();
    const seconds = time.getSeconds();
    var min = time.getMinutes();
    hr = hr % 12 || 12;

    return setZero(hr) + ":" + setZero(min) + ":" + setZero(seconds);
  }

  function setZero(number) {
    return number < 10 ? "0" + number : number;
  }
  return (
    <div className="container">
      <p className="clock">{timeFormat()}</p>
      <p className="date">{dateFormat()}</p>
    </div>
  );
};

export default NewClock;
