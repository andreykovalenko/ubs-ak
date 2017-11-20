import React, { Component } from "react";
import { connect } from "react-redux";
import { getRectanglesRenderer } from "./rectangle-renderer";
import { setSize } from "../redux/canvas/actions";

class RectangleCanvas extends Component {
  componentDidMount() {
    const { rectangles, setSize } = this.props;
    const { width, height } = this.canvas;
    setSize(width, height);

    const context = this.canvas.getContext("2d");
    this.drawRectangles = getRectanglesRenderer(context);

    this.drawRectangles(rectangles);

    subscribeToPrintEvent(
      () => this.drawRectangles(rectangles, true), 
      () => this.drawRectangles(rectangles, false));
  }
  componentDidUpdate() {
    const { rectangles } = this.props;
    this.drawRectangles(rectangles);
  }
  render() {
    const { canvas } = this.props;
    return <canvas width="500" height="500" ref={canvasEl => { this.canvas = canvasEl; }} />;
  }
}

function mapStateToProps(state) {
  return {
    rectangles: state.rectangles.all,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSize: (width, height) => dispatch(setSize(width, height)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RectangleCanvas);



function subscribeToPrintEvent(beforePrint, afterPrint) {
  var mediaQueryList = window.matchMedia("print");
  mediaQueryList.addListener(function(mql) {
    if (mql.matches) {
      beforePrint();
    } else {
      afterPrint();
    }
  });
}