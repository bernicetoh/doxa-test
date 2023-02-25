import React, { useEffect, useState } from "react";
import "./FilterPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faLongArrowAltUp,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

function FilterPanel({ setSelected }) {
  const [isHot, setIsHot] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isTop, setIsTop] = useState(false);

  const changeFilter = (filter) => {
    if (filter === "top") {
      setSelected("top");
      setIsTop(true);
      setIsHot(false);
      setIsNew(false);
    } else if (filter === "new") {
      setSelected("new");
      setIsNew(true);
      setIsHot(false);
      setIsTop(false);
    } else {
      setSelected("hot");
      setIsNew(false);
      setIsHot(true);
      setIsTop(false);
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
        {isHot ? (
          <button
            onClick={() => changeFilter("hot")}
            name="hot"
            className="active-btn"
          >
            <FontAwesomeIcon icon={faFire} className="icon" />
            <p>Hot</p>
          </button>
        ) : (
          <button
            onClick={() => changeFilter("hot")}
            name="hot"
            className="inactive-btn"
          >
            <FontAwesomeIcon icon={faFire} className="icon" />
            <p>Hot</p>
          </button>
        )}

        {isNew ? (
          <button
            onClick={() => changeFilter("new")}
            name="new"
            className="active-btn"
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} className="icon" />
            <p>New</p>
          </button>
        ) : (
          <button
            onClick={() => changeFilter("new")}
            name="new"
            className="inactive-btn"
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} className="icon" />
            <p>New</p>
          </button>
        )}
        {isTop ? (
          <button
            onClick={() => changeFilter("top")}
            name="top"
            className="active-btn"
          >
            <FontAwesomeIcon icon={faLongArrowAltUp} className="icon" />
            <p>Top</p>
          </button>
        ) : (
          <button
            onClick={() => changeFilter("top")}
            name="top"
            className="inactive-btn"
          >
            <FontAwesomeIcon icon={faLongArrowAltUp} className="icon" />
            <p>Top</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default FilterPanel;
