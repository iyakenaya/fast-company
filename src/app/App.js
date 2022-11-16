import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../app/components/navBar";
import UserPage from "./components/userPage";
import Users from "./components/users";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <h1>Main Page</h1>} />
        <Route path="/login" render={() => <h1>Login</h1>} />
        <Route path="/users/:userId" component={UserPage} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
};

export default App;
