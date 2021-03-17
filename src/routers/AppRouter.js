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


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/contactme" component={ContactMe}></Route>
          <Route path="/" component={MainScreen}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </Router>
  )
}
