import React, { useEffect, useState } from "react";
import Thread from "./Thread";
import "./ScrollView.css";
function ScrollView() {
  const [threads, setThreads] = useState([]);
  const [subreddit, setSubreddit] = useState("webdev");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://www.reddit.com/r/StartledCats.json"
        );
        const resultInJson = await result.json();
        console.log(resultInJson.data.children);
        setThreads(resultInJson.data.children);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [subreddit]);

  return (
    <div className="scrollview">
      <div className="threads-container">
        {threads.map((thread, index) => {
          return <Thread thread={thread.data} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ScrollView;
