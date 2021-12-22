import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import ResetPwd from "./components/ResetPwd";
import Dashboard from "./components/dashbard";
import Pizza from "./components/Pizza";

import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) return <Login />;
  return (
    <>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/Dashboard"}>
                Pizza Delivery
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Pizza"}>
                      Create Pizza
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/Dashboard" />}
                />
                <Route path="/Login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/resetpwd" component={ResetPwd} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Pizza" component={Pizza} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
