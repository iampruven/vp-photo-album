import React from "react";
import Header from "../Header/Header";
import Image from "../Image/Image";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../LandingPage/Landing";
import RegistrationRoute from "../../Routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../Routes/LoginRoute/LoginRoute";
import DashboardRoute from "../../Routes/DashboardRoute/DashboardRoute";
import NewPost from "../NewPost/NewPost";
import NewAlbumRoute from "../../Routes/NewAlbumRoute/NewAlbumRoute";

function App() {
  return (
    <main>
      <section className="App">
        <div>
          <Router>
            <header>
              <Header />
            </header>
            <Switch>
              <Route exact path={'/'} component={Landing}/>
              <Route exact path={"/dashboard"} component={DashboardRoute} />
              <Route exact path={"/image"} component={Image} />
              <Route exact path={'/login'} component={LoginRoute} />
              <Route exact path={'/register'} component={RegistrationRoute} />
              <Route exact path={'/newPost'} component={NewPost} />
              <Route exact path={'/newalbum'} component={NewAlbumRoute} />
            </Switch>
          </Router>
        </div>
      </section>
    </main>
  );
}

export default App;
