import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";

import { EmojiContainer } from "./components/Emojies/EmojiContainer";

import { Header } from "./components/Header/Header";
import { ListPosts } from "./components/PostsList/PostsList";
import { FullPost } from "./pages/FullPost";
import { ThemeProvider } from "./context/ThemeContext";
import { Registration } from "./pages/Registration";
import { Activation } from "./pages/Activation";
import { PostsProvider } from "./context/PostsContext";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import { tmsFetch } from "./fetch";
import { AddPost } from "./components/AddPost/AddPost";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <ThemeProvider>
          <div className="App">
            <Router />
          </div>
        </ThemeProvider>
      </PostsProvider>
    </AuthProvider>
  );
}

export const Router = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await tmsFetch("https://studapi.teachmeskills.by/auth/users/me/", {});
      const data = await response.json();
      console.log({ data });
      authContext.setUser(data);
    };

    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ListPosts} />
        <Route path="/emoji" exact={true} component={EmojiContainer} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/post/:id" exact={true} component={FullPost} />
        <Route path="/registration" exact={true} component={Registration} />
        <Route
          path="/registration/success"
          exact={true}
          component={() => <h1>Успешно зарегистрирован</h1>}
        />
        <Route path="/activate/:uid/:token" exact={true} component={Activation} />
        <Route path="/add-post" exact={true} component={AddPost} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
