import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PostPage from './components/postspage/Index';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';

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
