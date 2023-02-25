import React, { useState } from "react";
import "./Thread.css";

function Thread({ thread }) {
  const { title, author, created, num_comments, score } = thread;
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const utcToLocalString = (utc) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let inital = new Date(utc * 1000);
    console.log(utc);
    console.log(inital);
    let day = inital.getDate();
    let month = months[inital.getMonth()];
    let year = inital.getFullYear();
    let dayMonthYear = day + " " + month + " " + year;
    console.log(month);
    return dayMonthYear;
  };

  const upDownVote = (isDownVote) => {
    if (isDownVote && isDown) {
      setIsDown(false);
      setIsUp(false);
    } else if (isDownVote && !isDown) {
      setIsUp(false);
      setIsDown(true);
    } else if (!isDownVote && isUp) {
      setIsUp(false);
      setIsDown(false);
    } else if (!isDownVote && !isUp) {
      setIsUp(true);
      setIsDown(false);
    }
  };

  return (
    <div className="thread-container">
      <div className="score-container">
        <i
          className="fa-solid fa-caret-up"
          style={isUp ? { color: "coral" } : { color: "lightgrey" }}
          onClick={() => upDownVote(false)}
        ></i>
        <h3>{score}</h3>
        <i
          className="fa-solid fa-caret-down"
          style={isDown ? { color: "dodgerblue" } : { color: "lightgrey" }}
          onClick={() => upDownVote(true)}
        ></i>
      </div>
      <div className="text-container">
        <h2 className="title-text">{title}</h2>
        <p className="created-text">
          Posted by {author} on {utcToLocalString(created)}
        </p>
        <p className="comments-container">
          <i class="fa-regular fa-message"></i>
          {num_comments} comments
        </p>
      </div>
    </div>
  );
}

export default Thread;
