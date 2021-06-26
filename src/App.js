import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Episodes from "./Pages/Episodes";
import Characters from "./Pages/Characters";
import Gallery from "./Pages/Gallery";
import Layout from "./Components/hoc/Layout";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/episodes">
        <Episodes />
      </Route>
      <Route path="/characters">
        <Characters />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Layout>
);

export default App;
