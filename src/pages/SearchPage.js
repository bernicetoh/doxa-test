import React, { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import ScrollView from "../components/ScrollView";
import "./SearchPage.css";

function SearchPage() {
  const [filterSelected, setFilterSelected] = useState("");

  useEffect(() => {
    console.log(filterSelected);
  }, [filterSelected]);

  return (
    <div className="searchpage">
      <div container="filterpanel-container">
        <FilterPanel setSelected={setFilterSelected} />
      </div>
      <div className="scrollview-container">
        <ScrollView filterSelected={filterSelected} />
      </div>
    </div>
  );
}

export default SearchPage;
