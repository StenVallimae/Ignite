import React from "react";
//Components and pages
import Home from "./pages/home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";
//route
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav></Nav>
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
