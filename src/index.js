import React from "react";
import ReactDOM from "react-dom";
import Filldetails from "./filldetails";
class Todo extends React.Component {
  render() {
    return (
      <div>
        <Filldetails />
      </div>
    );
  }
}
ReactDOM.render(<Todo />, document.getElementById("root"));
