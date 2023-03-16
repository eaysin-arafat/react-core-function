import React from "react";

function HoverCounter({ count, incrimentCount }) {
  return (
    <div>
      <h1 onMouseOver={incrimentCount}>Hoverd {count} times</h1>
    </div>
  );
}

export default HoverCounter;
