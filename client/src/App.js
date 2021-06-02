import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Comic from "./components/Comic";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/:num(\d+)" component={Comic} />
            <Route path="/" component={Comic} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
