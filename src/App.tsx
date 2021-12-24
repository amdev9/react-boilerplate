import React from "react";
import "./App.css";
import {
  Link,
  Switch,
  Route,
  BrowserRouter,
  useLocation,
} from "react-router-dom";

import Home from "./Home";

const About = () => <div>You are on the about page</div>;
const NoMatch = () => <div>No match</div>;

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>

        <LocationDisplay />
      </BrowserRouter>
    </div>
  );
}

export default App;
