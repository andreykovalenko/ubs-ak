import React, { Component } from "react";
import "./app.css";
import "./app-print.css";
import AddNewRectangle from "./add-new-rectangle/component";
import RectangleList from "./rectangle-list/rectangle-list";
import RectangleCanvas from "./rectangle-canvas/rectangle-canvas";

export default class App extends Component {
  render() {
    return <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            Technical Assignment - Andrey Kovalenko
          </h1>
        </header>
        <div className="app-content">
          <aside className="app-sidebar">
            <AddNewRectangle />
            <RectangleList />
          </aside>
          <section className="app-main-section">
            <RectangleCanvas />
          </section>
        </div>
      </div>;
  }
}

