import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
import Loading from "./components/shared/Loading";
import SignIn from "./components/SignIn";
import { UserStateProvider, useUserState } from "./components/UserContext";

function App() {
  const { user, loading } = useUserState();
  if (loading) return <Loading />;
  return user ? <AuthApp /> : <UnAuthApp />;
}

function AuthApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:listId" component={ListPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

function UnAuthApp() {
  return <SignIn />;
}

ReactDOM.render(
  <React.StrictMode>
    <UserStateProvider>
      <App />
    </UserStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
