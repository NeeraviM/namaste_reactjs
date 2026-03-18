import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1", // tag name
  { id: "heading", xyz: "abc" }, // attributes object
  "Hello ReactJS --- Again", // child | childrens
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  "parent tag",
  React.createElement("div", { id: "c1" }, [
    "I'm a child div",
    React.createElement("h1", { id: "h1" }, "I'm a h1"),
    React.createElement("h2", { id: "h2" }, "I'm a h2"),
    React.createElement("h3", { id: "h3" }, "I'm a h3"),
  ]),
   React.createElement("div", { id: "c2" }, [
    "I'm a child div",
    React.createElement("h1", { id: "h1" }, "C2 -I'm a h1"),
    React.createElement("h2", { id: "h2" }, "C2 - I'm a h2"),
    React.createElement("h3", { id: "h3" }, "C2 - I'm a h3"),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(parent);
console.log(root);
root.render(parent);
