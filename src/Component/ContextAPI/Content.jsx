import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./themeContext";
import { useContext } from "react";

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrimentCount) => (
          <HoverCounter
            count={count}
            incrimentCount={incrimentCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}

//Class Context
// class Content extends React.Component {
//   render() {
//     const { theme, switchTheme } = this.context;
//     return (
//       <div>
//         <h1>This is a Content</h1>
//         <Counter>
//           {(count, incrimentCount) => (
//             <HoverCounter
//               count={count}
//               incrimentCount={incrimentCount}
//               theme={theme}
//               switchTheme={switchTheme}
//             />
//           )}
//         </Counter>
//       </div>
//     );
//   }
// }

// Content.contextType = ThemeContext;

// export default Content;
