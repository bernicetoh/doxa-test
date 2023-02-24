import React, { useEffect, useState } from "react";
import Thread from "./Thread";
import "./ScrollView.css";
function ScrollView({ filterSelected }) {
  const [threads, setThreads] = useState([]);
  const [subreddit, setSubreddit] = useState("webdev");

  useEffect(() => {
    const fetchData = async (filter) => {
      try {
        let result = null;
        if (filter === "top") {
          result = await fetch(
            "https://www.reddit.com/r/StartledCats/top/.json"
          );
        } else if (filter === "new") {
          result = await fetch(
            "https://www.reddit.com/r/StartledCats/new/.json"
          );
        } else {
          result = await fetch(
            "https://www.reddit.com/r/StartledCats/hot/.json"
          );
        }
        const resultInJson = await result.json();
        console.log(resultInJson.data.children);
        setThreads(resultInJson.data.children);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData(filterSelected);
  }, [filterSelected]);

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
