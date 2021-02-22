import React from "react";
import ReactDOM from "react-dom";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { WebSocketContext } from "./matrixproperty";

class imxViewer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0, left: 0, top: 0, width: 0, height: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });

    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

    this.setState({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        <ToggleButtonGroup size="large">
          <ToggleButton value="left">
            <FormatAlignLeftIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustifyIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
        <p>
          clientRect ({this.state.left}, {this.state.top}, {this.state.width},{" "}
          {this.state.height})
        </p>
      </div>
    );
  }
}

export default imxViewer;
