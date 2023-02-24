import React, { useEffect, useState } from "react";
import "./FilterPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faHandSparkles,
  faL,
  faLongArrowAltUp,
  faSprayCanSparkles,
  faWandMagicSparkles,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";

function FilterPanel({ setSelected }) {
  const [isHot, setIsHot] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isTop, setIsTop] = useState(false);

  const changeFilter = (filter) => {
    if (filter === "hot") {
      setSelected("hot");
    } else if (filter === "new") {
      setSelected("new");
    } else {
      setSelected("top");
    }
  };

  useEffect(() => {
    console.log(isHot);
    console.log(isNew);
    console.log(isTop);
  }, [isHot, isNew, isTop]);

  return (
    <div className="filterpanel">
      <div className="filterpanel-container">
        <button onClick={() => changeFilter("hot")} name="hot">
          <FontAwesomeIcon icon={faFire} className="icon" />
          <p>Hot</p>
        </button>
        <button name="new" onClick={() => changeFilter("new")}>
          <FontAwesomeIcon icon={faWandSparkles} className="icon" />
          <p>New</p>
        </button>
        <button name="top" onClick={() => changeFilter("top")}>
          <FontAwesomeIcon icon={faLongArrowAltUp} className="icon" />
          <p>Top</p>
        </button>
      </div>
    </div>
  );
}

export default FilterPanel;
