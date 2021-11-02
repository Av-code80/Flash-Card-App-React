import { Route, Switch } from "react-router";
import Auth from "./components/Auth";
import HeaderLogout from "./components/HeaderLogout";
import Homepage from "./components/Homepage";
import Details from "./components/Details";
import "./App.css";

// <Route path="/" exact component={HeaderLogout} />;

function App() {
  return (
    <>
      <HeaderLogout />
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </>
  );
}

export default App;
