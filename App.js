//when we are importing and using react- we need to modify the script tag in index.html
import React from "react";
import ReactDOM from "react-dom/client"
//React.createElement is creating one <h1> tag
const head = React.createElement
    ("h1", { id: "heading", class: "header" }, "hello world from react")


//I need to create acomplex html structure.
/*<div id = "parent">
    <div id= "child">
    <h1 id="header">Hi from child 1</h1>
    </div>
</div>
*/

const parent = React.createElement
("div", { id:"parent" },
 React.createElement("div", { id:"child" }, 
 React.createElement("h1", { id:"header" }, "Hi from child")))


//I need to create acomplex html structure.
/*<div id = "parent2">
    <div id= "child">
    <h1 id="header">Hi from child 1</h1>
    <h1 id="header2">Hi from child 2</h1>
    </div>
</div>
*/
const parent2 = React.createElement
("div", { id:"parent" },
 React.createElement("div", { id:"child" }, 
 [React.createElement("h1", { id:"header" }, "Hi from child 1"),React.createElement("h1", { id:"header2" }, "Hi from child 2")]))

 const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent2)