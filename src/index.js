import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PostPage from '../src/components/postspage/Index';
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
  <Route path="/posts/:id">
    <PostPage />
  </Route>
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
