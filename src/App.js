import React from "react";
import { Menu } from "./components/Menu";
import { HowItWorks } from "./components/HowItWorks";
import { Support } from "./components/Support";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/support" component={Support} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
