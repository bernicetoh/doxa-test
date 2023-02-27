import React, { useEffect, useState } from "react";
import { numToStringFormatter } from "../utils/numToStringFormatter";
import { utcToLocalString } from "../utils/utcToLocalString";
import "./OpContainer.css";

function OpContainer({ thread, isUp, isDown }) {
  const { title, author, created, score, num_comments } = thread;
  const [mediaLink, setMediaLink] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [desc, setDesc] = useState("");

  const getMediaLink = () => {
    // get description text
    try {
      const desc = thread.selftext;
      setDesc(desc);
    } catch (e) {
      console.log("description not found");
    }

    // get video url if exists
    try {
      const media = thread.secure_media.reddit_video.fallback_url;
      setMediaLink(media);
    } catch (e) {
      console.log("reddit media link not found");
    }

    // get external media link if exists
    try {
      const extmedia = thread.url_overridden_by_dest;
      setExternalLink(extmedia);
      console.log(extmedia);
    } catch (e) {
      console.log("external media link not found");
    }
  };
  useEffect(() => {
    getMediaLink();
  }, []);

  return (
    <div className="opcontainer">
      <div className="score-container">
        <i
          className="fa-solid fa-caret-up"
          style={isUp ? { color: "coral" } : { color: "lightgrey" }}
        ></i>
        <h3>{numToStringFormatter(score)}</h3>
        <i
          className="fa-solid fa-caret-down"
          style={isDown ? { color: "dodgerblue" } : { color: "lightgrey" }}
        ></i>
      </div>
      <div className="text-container">
        <div className="posted">
          <p className="subreddit-name">{thread.subreddit_name_prefixed}</p>
          <p className="postedbyon">
            Posted by u/{author} on {utcToLocalString(created)}
          </p>
        </div>
        <p className="title">{title}</p>
        {desc ? <p className="desc-text">{desc}</p> : <div></div>}
        {mediaLink ? (
          <video controls="controls">
            <source src={mediaLink} />
          </video>
        ) : (
          <div></div>
        )}
        {!mediaLink && externalLink ? (
          <a href={externalLink} target="_blank" rel="noreferrer">
            {externalLink}
          </a>
        ) : (
          <div></div>
        )}
        <p className="comments-container">
          <i className="fa-regular fa-message"></i>
          {num_comments} comments
        </p>
      </div>
    </div>
  );
}

export default OpContainer;
