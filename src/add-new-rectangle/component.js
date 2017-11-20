import React, {Component} from "react";
import { connect } from "react-redux";
import { add } from "../redux/rectangles/actions";

class AddNewRectangel extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 2, height: 2, x: 0, y: 0 };
  }
  addRectangle(event) {
    const {addRectangle} = this.props;
    
    event.preventDefault();
    addRectangle(this.state);
  }
  setWidth({ target }) {
    this.setState({ width: Number(target.value) });
  }
  setHeight({ target }) {
    this.setState({ height: Number(target.value) });
  }
  setX({ target }) {
    this.setState({ x: Number(target.value) });
  }
  setY({ target }) {
    this.setState({ y: Number(target.value) });
  }
  render() {
    const { rectanglesCount, totalWidth, canvasSize } = this.props;
    const MAX_NUMBER = 5;
    const hasTooManyRectangles = rectanglesCount >= MAX_NUMBER;

    const allowedWith = canvasSize.width - totalWidth;

    return <section>
        <form onSubmit={e => this.addRectangle(e)}>
          <h2>Add New Rectangle</h2>
          <p>
            <label htmlFor="rectangle-width">
              <span>Width: </span>
            </label>
            <input value={this.state.width} type="number" min="2" max={allowedWith} id="rectangle-width" name="rectangle-width" onChange={e => this.setWidth(e)} />
          </p>
          <p>
            <label htmlFor="rectangle-height">
              <span>Height: </span>
            </label>
            <input value={this.state.height} type="number" min="2" max={canvasSize.height} id="rectangle-height" name="rectangle-height" onChange={e => this.setHeight(e)} />
          </p>
          <p>
            <label htmlFor="rectangle-x">
              <span>X: </span>
            </label>
            <input value={this.state.x} type="number" min="0" max={canvasSize.width} id="rectangle-x" name="rectangle-x" onChange={e => this.setX(e)} />
          </p>
          <p>
            <label htmlFor="rectangle-y">
              <span>Y: </span>
            </label>
            <input type="number" min="0" max={canvasSize.height} value={this.state.y} id="rectangle-y" name="rectangle-y" onChange={e => this.setY(e)} />
          </p>
          <p className="actions">
            <button type="submit" disabled={hasTooManyRectangles}>
              Add Rectangle
            </button>
          </p>
        </form>
      </section>;
  }
}

function mapStateToProps(state) {
  return {
    totalWidth: state.rectangles.totalWidth,
    canvasSize: state.canvas,
    rectanglesCount: state.rectangles.all.length
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addRectangle: rectangle => dispatch(add(rectangle))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewRectangel);