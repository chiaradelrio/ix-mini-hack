import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import { Loading } from "./components/molecules";

const ProjectsLoadable = Loadable({
  loader: () =>
    import("./components/pages/projects" /* webpackChunkName: 'page__projects' */),
  loading: Loading
});

const ProjectDetailsLoadable = Loadable({
  loader: () =>
    import("./components/pages/project-details" /* webpackChunkName: 'page__project-details' */),
  loading: Loading
});

const Routes = () => (
  <React.Fragment>
    <Route path="/" exact component={ProjectsLoadable} />
    <Route path="/projects/:id" component={ProjectDetailsLoadable} />
  </React.Fragment>
);

export default Routes;
