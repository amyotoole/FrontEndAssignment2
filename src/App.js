import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Episodes from "./Pages/Episodes";
import Characters from "./Pages/Characters";
import Gallery from "./Pages/Gallery";
import Layout from "./Components/hoc/Layout";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

/*As this is a single page application when the user is redirected to a different 'page' the scroll position remains the same. 
ScrollToTop ensures the new page is loaded at the top position when loaded.
*/
const ScrollToTop = withRouter(({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
});

const App = () => (
  <Layout>
    <ScrollToTop />
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
