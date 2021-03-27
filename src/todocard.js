import React from "react";

function Todocard(props) {
  const myId = props.keyId;
  const helper = () => {
    props.onClick(myId);
  };

  return (
    <div className="row justify-content-center">
      <div className="card text-center my-2 col-10">
        <div className="card-header row" style={{ backgroundColor: "#F7CD2E" }}>
          <p className="text-left">Work No : {props.number}</p>
          <p className="ml-auto text-right">Time : {props.time}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <button className="btn btn-success btn-sm btn-block" onClick={helper}>
            &#10003;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todocard;
