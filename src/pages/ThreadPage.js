import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OpContainer from "../components/OpContainer";
import "./ThreadPage.css";

function ThreadPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const thread = location.state.thread;
  const isUp = location.state.isUp;
  const isDown = location.state.isDown;

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="threadpage">
      <div className="btn-container">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        </button>
      </div>
      <div className="op-container">
        <OpContainer thread={thread} isUp={isUp} isDown={isDown} />
      </div>
    </div>
  );
}

export default ThreadPage;
