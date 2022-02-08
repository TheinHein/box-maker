import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: 20, height: 20, color: "black", id: "" }],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(box) {
    this.setState({ boxes: [...this.state.boxes, box] });
  }
  remove(id) {
    this.setState({ boxes: this.state.boxes.filter((box) => box.id !== id) });
  }
  render() {
    let boxes = this.state.boxes.map((box) => (
      <Box
        width={box.width}
        height={box.height}
        color={box.color}
        key={box.id}
        id={box.id}
        removeBox={this.remove}
      />
    ));
    return (
      <div>
        <NewBoxForm addBox={this.create} />
        {boxes}
      </div>
    );
  }
}
export default BoxList;
