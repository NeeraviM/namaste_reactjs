import React from "react";
import ReactDOM from "react-dom/client";

// const heading  = React.createElement("h1",{id:"heading"},"Be Strong");


// JSX => React.createElement => ReactElement -JSObject => HTMLElement(render)
const jsxHeading = <h1>Namaste folks, this is a jsxHeading</h1>

const jsxMulLineElem = (
<h1 id="hs"
className="redbold"
tabIndex="">
  Folks, this is a multi line jsx elem
</h1>
);
console.log(jsxMulLineElem);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxMulLineElem);
