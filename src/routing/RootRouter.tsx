import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "../components/Login";

import { Posts } from "../components/Posts";
import { Register } from "../components/Register/Register";
import { NotFound } from "../components/NotFound";
import { Header } from "../components/Header";
import { Post } from "../components/Post";

export function RootRouter() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/posts/:id">
            <Post />
          </Route>
          <Route exact>
            <NotFound />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}
