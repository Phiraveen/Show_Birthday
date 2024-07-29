import React, { useState } from "react";
import birthShow from "./data";
import "./Birthday.css";

export default function Birthday() {
  const [birth, setbirth] = useState(birthShow);

  const handleClear = () => {
    setbirth([]);
  };

  const handleLoad = () => {
    setbirth(birthShow);
  };

  return (
    <div className="mainContainer">
      <div className="mainCard">
        <h1>{birth.length} Birthday's Today</h1>
        {birth.map((da, i) => (
          <div className="birthItem">
            <img src={da.image} className="profilePic" />
            <div>
              <h3>{da.name}</h3>
              <h5>{da.age}</h5>
            </div>
          </div>
        ))}
        <button className="btn btn-primary w-70 m-1" onClick={handleClear}>
          Clear All
        </button>
        <button className="btn btn-info w-70 m-1" onClick={handleLoad}>
          Load Again
        </button>
      </div>
    </div>
  );
}
