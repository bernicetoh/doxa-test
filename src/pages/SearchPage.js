import React, { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import Header from "../components/Header";
import ScrollView from "../components/ScrollView";
import "./SearchPage.css";

function SearchPage() {
  const [filterSelected, setFilterSelected] = useState("");
  const [threads, setThreads] = useState([]);

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
        setThreads(resultInJson.data.children);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData(filterSelected);
  }, [filterSelected]);

  return (
    <div className="searchpage">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-filterpanel-container">
        <FilterPanel setSelected={setFilterSelected} />
      </div>
      <div className="scrollview-container">
        <ScrollView threads={threads} filter={filterSelected} />
      </div>
    </div>
  );
}

export default SearchPage;
