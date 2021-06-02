import React from 'react';
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
