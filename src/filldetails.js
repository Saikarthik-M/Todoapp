import React from "react";
import Todocard from "./todocard";
var i = 1;
class Filldetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      listItem: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  deleteHandler(id) {
    this.setState((prevState) => {
      let newListItem = prevState.listItem.filter(
        (item) => item.props.keyId !== id
      );
      let newState = {
        ...prevState,
        listItem: newListItem
      };
      return newState;
    });
  }
  changeHandler(event) {
    let name = event.target.name;
    let value = event.target.value;
    value = value.trim();
    if (value !== "") {
      this.setState({ [name]: value });
    }
  }
  submitHandler(event) {
    var title = this.state.title;
    var description = this.state.description;
    title = title.trim();
    if (title !== "") {
      let time = new Date();
      let currentTime = time.getHours() + ":" + time.getMinutes();
      let id = Math.random() + 1;
      const card = (
        <Todocard
          title={title}
          description={description}
          time={currentTime}
          key={id}
          keyId={id}
          number={i++}
          onClick={this.deleteHandler}
        />
      );
      const newlist = [...this.state.listItem];
      newlist.push(card);
      this.setState({ listItem: newlist, title: "", description: "" });
    }
  }
  render() {
    return (
      <div className="container mt-5 ">
        <div className="text-center">
          <input
            className="form-control place"
            type="text"
            name="title"
            placeholder="Job title"
            onChange={this.changeHandler}
            style={{ backgroundColor: "" }}
            value={this.state.title}
          />
          <div className="input-group mt-3">
            <div className="input-group-prepend ">
              <span
                className="input-group-text text-white"
                style={{ backgroundColor: "#8D3DAF" }}
              >
                Add description
              </span>
            </div>
            <textarea
              className="form-control"
              name="description"
              onChange={this.changeHandler}
              value={this.state.description}
            ></textarea>
          </div>
          <input
            type="button"
            value="+"
            className="rounded-pill mt-3 text-white btn btn-danger"
            onClick={this.submitHandler}
          />
        </div>
        <div className="row">
          <h6 className="col-3">Todo works :</h6>
          <p>{this.state.listItem.length}</p>
        </div>
        <div className="border-top border-info">{this.state.listItem}</div>
      </div>
    );
  }
}
export default Filldetails;
