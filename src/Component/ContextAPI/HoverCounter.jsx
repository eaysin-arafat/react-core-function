import React from "react";

function HoverCounter({ count, incrimentCount, theme, switchTheme }) {
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
  return (
    <div>
      <h1 onMouseOver={incrimentCount} style={style}>
        Hoverd {count} times
      </h1>
      <button type='button' onClick={switchTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default HoverCounter;
