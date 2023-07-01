import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const [login] = useState(false);
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/"}>
                  BMI Calculator
                </Link>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                ></div>
              </div>
            </nav>

            <div className="auth-wrapper mt-5">
              <div className="auth-inner mt-5">
                {/* create routes here */}
                <Switch>
                  <Route exact path="/" component={Account} />
                  <Route exact path="/free" component={FreeComponent} />
                  <ProtectedRoutes path="/auth" component={AuthComponent} />
                </Switch>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
