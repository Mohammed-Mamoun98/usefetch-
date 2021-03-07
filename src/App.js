import React, { useEffect } from "react";
import { useFetch } from "./hooks/useFetch.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./style.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "./index.scss";

const HomeRouter = () => (
  <Switch>
    <Route exact path="/">
      <h1>home</h1>
    </Route>
  </Switch>
);

export default function App() {
  const [fetchTodo, data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <Router>
        <NavLink to="/data">to data</NavLink>
        <br />
        <NavLink to="/">to home</NavLink>
        <HomeRouter />
        <Switch>
          <Route exact path="/data">
            <div style={{ minHeight: "100rem" }}>
              <br />
              <form>
                <input
                  className="input-outlined"
                  type="email"
                  placeholder="Enter Email"
                />
              </form>
              <h1>data</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

// <button onClick={() => scroll.scrollToBottom()}>
//               scroll To bottom
//             </button>
