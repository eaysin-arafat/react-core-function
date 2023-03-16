import React from "react";

function ClickCounter({ count, incrimentCount }) {
  return (
    <div>
      <button type='button' onClick={incrimentCount}>
        Hoverd {count} times
      </button>
    </div>
  );
}

export default ClickCounter;
