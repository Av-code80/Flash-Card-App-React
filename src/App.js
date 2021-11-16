import { Route, Switch } from "react-router";
import { useEffect } from "react";
import Auth from "./components/Auth/Auth";
import HeaderLogout from "./components/Header/HeaderLogout";
import Homepage from "./components/Homepage/Homepage";
import Details from "./components/Details/Details";
import Footer from "../src/components/footer/Footer";
import "./App.css";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("categories")) {
      localStorage.setItem("categories", "[]");
    }
  }, []);
  return (
    <>
      <HeaderLogout />
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/details/:id" component={Details} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
