import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { MainScreen } from "../MainScreen";
import { ContactMe } from "../screens/ContactMe";
import { ErrorScreen } from "../screens/ErrorScreen";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/contactme" component={ContactMe}></Route>
          <Route exact path="/" component={MainScreen}></Route>
          <Route path="/error" component={ErrorScreen}></Route>
          <Redirect to="/error"></Redirect>
        </Switch>
      </div>
    </Router>
  )
}
