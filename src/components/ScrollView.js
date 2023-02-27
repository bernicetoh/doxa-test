import React from "react";
import Thread from "./Thread";
import "./ScrollView.css";
function ScrollView({ threads, filterSelected }) {
  return (
    <div className="scrollview">
      <div className="threads-container">
        {threads.map((thread) => {
          return (
            <Thread
              thread={thread.data}
              key={thread.id}
              filterSelected={filterSelected}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ScrollView;
