import React, {Component} from "react";
import { connect } from "react-redux";
import { remove } from "../redux/rectangles/actions";
import RectangleItem from "./rectangle-item";

class RectangleList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {rectangles, remove} = this.props;
    return <section className={`rectangle-list ${rectangles.length === 0 ? "no-data" : ""}`}>
        <h2>Rectangles</h2>
        {rectangles.length > 0 ? <ul>
            {rectangles.map(renderRectangleItem(remove))}
          </ul> : <span> not saved </span>}
      </section>;
  }
}

function renderRectangleItem(remove) {
    return (rectangle, index) => <RectangleItem remove={remove} rectangle={rectangle} key={index}/>;
}

function mapStateToProps(state) {
  return {
    rectangles: state.rectangles.all,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    remove: rectangle => dispatch(remove(rectangle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RectangleList);