import React from "react";
import Thread from "./Thread";
import "./ScrollView.css";
function ScrollView({ threads }) {
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
