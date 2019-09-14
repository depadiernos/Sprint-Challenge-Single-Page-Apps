import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import "semantic-ui-css/semantic.min.css"
import "./index.css"
import App from "./App"
import background from "./assets/wp1822726.jpg"

const Body = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-image: url(${background});
  background-size:     cover;            
  background-repeat:   no-repeat;
  background-position: center center;
}
`

ReactDOM.render(
  <Router>
    <Body />
    <App />
  </Router>,
  document.getElementById("root")
)
