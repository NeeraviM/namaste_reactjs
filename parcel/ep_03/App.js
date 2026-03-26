import React from "react";
import ReactDOM from "react-dom/client";

// const heading  = React.createElement("h1",{id:"heading"},"Be Strong");


// JSX => React.createElement => ReactElement -JSObject => HTMLElement(render)
// Single line React Element
const jsxHeading = <h1>Namaste folks, this is a jsxHeading</h1>

const spanText = (
  <span className="colortale">Span Text color tale</span>
)


const TitleComponent = () => (
   <h1 className="title">Title Component</h1>
); 
const numb = 20000;
// React functional component
const HeadingComponent = () => {
  return <h2 className="redbold">This is React's functional component header</h2>
}

const SPANH3Component = function(){
  return (
    <span>This is H3 component</span>
  )
}
// Multi line React Element
const jsxMulLineElem = (
<h1 id="hs"
className="redbold"
tabIndex="">
  Folks, this is a multi line jsx elem {spanText}
<SPANH3Component/>
{SPANH3Component()}
</h1> 
);
const HeadingComponent3 = () => {
  return (
    <div>
      <TitleComponent/>
      <h1 className="redbold">This is react's func comp with explicit return and multi line {numb+30000}</h1>
      <SPANH3Component/>
      <HeadingComponent></HeadingComponent>
      {HeadingComponent()}
      {console.log("asdfdsfdsf")}
      {jsxMulLineElem}
      <p>This is paragraph</p>
    </div>
  )
};
console.log(jsxMulLineElem);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3/>);
// root.render(jsxMulLineElem);
