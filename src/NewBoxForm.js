import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      color: "",
      id: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
          id="width"
        ></input>
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
          id="height"
        ></input>
        <label htmlFor="color">Color: </label>
        <input
          type="text"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
          id="color"
        ></input>
        <button>Add Box!</button>
      </form>
    );
  }
}
export default NewBoxForm;
