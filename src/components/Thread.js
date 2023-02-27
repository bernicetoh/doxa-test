import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { numToStringFormatter } from "../utils/numToStringFormatter";
import { utcToLocalString } from "../utils/utcToLocalString";
import "./Thread.css";

function Thread({ thread, filterSelected }) {
  const navigate = useNavigate();
  const { title, author, created, num_comments, score } = thread;
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);
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

  useEffect(() => {
    setIsUp(false);
    setIsDown(false);
  }, [thread.id]);
  return (
    <div className="thread-container">
      <div className="score-container">
        <i
          className="fa-solid fa-caret-up"
          style={isUp ? { color: "coral" } : { color: "lightgrey" }}
          onClick={() => upDownVote(false)}
        ></i>
        <h3>{numToStringFormatter(score)}</h3>
        <i
          className="fa-solid fa-caret-down"
          style={isDown ? { color: "dodgerblue" } : { color: "lightgrey" }}
          onClick={() => upDownVote(true)}
        ></i>
      </div>

      <div
        className="text-container"
        onClick={() =>
          navigate("/thread", {
            state: {
              thread,
              isUp: isUp,
              isDown: isDown,
              filterSelected: filterSelected,
            },
          })
        }
      >
        <h2 className="title-text">{title}</h2>
        <p className="created-text">
          Posted by {author} on {utcToLocalString(created)}
        </p>
        <p className="comments-container">
          <i className="fa-regular fa-message"></i>
          {num_comments} comments
        </p>
      </div>
    </div>
  );
}

export default Thread;
