import React from "react";

function State(props) {
  console.log(props);
  return (
    <div className="state">
      <h2 className="state-title">
        {props.data.state}&ensp;
        <img src={props.imgUrl} className="state-flag"></img>
      </h2>
      <h3 className="cases">
        Casos &#x1F3E5;: {props.data.cases.toLocaleString()}
      </h3>
      <h3 className="deaths">
        Mortes &#x1F480;: {props.data.deaths.toLocaleString()}
      </h3>
      <h3 className="suspects">
        Suspeitos &#x2753;: {props.data.suspects.toLocaleString()}
      </h3>
    </div>
  );
}

export default State;
