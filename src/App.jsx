import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import CreateArticle from "./components/CreateArticle";
import Review from "./components/Review";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import auth from "./modules/auth";
import { connect } from "react-redux";
import PublishArticle from "./components/PublishArticle";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/write" component={CreateArticle} />
        <Route exact path="/review" component={Review} />
        <Route path="/review/:id" component={PublishArticle} />
      </Switch>
    </div>
  );
}

export default App;
