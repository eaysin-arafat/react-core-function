import React from "react";
import ClickCounter from "./Component/ContextAPI/ClickCounter";
import Counter from "./Component/ContextAPI/Counter";
import Section from "./Component/ContextAPI/Section";
import ThemeContext from "./Component/ContextAPI/themeContext";

class App extends React.Component {
  state = {
    theme: "light",
  };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === "dark") {
        return {
          theme: "light",
        };
      } else
        return {
          theme: "dark",
        };
    });
    console.log("clicked");
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <Counter>
          {(count, incrimentCount) => (
            <ClickCounter count={count} incrimentCount={incrimentCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
