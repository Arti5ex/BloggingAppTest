import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Menu } from "./ui/organism";
import { PostPage } from "./ui/organism";
import { MediaContextProvider } from "lib/media";


function App() {
  return (
    <div className="App">
      <MediaContextProvider>
        <Router>
          <Switch>
            <Redirect exact path="/" to="/menu" />
            <Route path="/menu">
              <Menu/>
            </Route>
            <Route exact path="/post/:id">
              <PostPage/>
            </Route>
          </Switch>
        </Router>
      </MediaContextProvider>
    </div>
  );
}

export default App;
