import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import { Loading } from "./components/molecules";

const ProjectsLoadable = Loadable({
  loader: () =>
    import("./components/pages/projects" /* webpackChunkName: 'page__projects' */),
  loading: Loading
});

const Routes = () => (
  <React.Fragment>
    <Route path="/" exact component={ProjectsLoadable} />
  </React.Fragment>
);

export default Routes;
