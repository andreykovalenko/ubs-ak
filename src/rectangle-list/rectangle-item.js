import React from "react";

export default function({rectangle, remove}) {
    return <li>
        <span>{`${rectangle.width}x${rectangle.height} - (${rectangle.x}, ${rectangle.y})`}</span>
        <button onClick={() => remove(rectangle)}>X</button>
      </li>;
}