import React from "react";
import Header from "../Header/Header";
import Image from "../Image/Image";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../LandingPage/Landing";
import RegistrationRoute from "../../Routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../Routes/LoginRoute/LoginRoute";
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
              <Route exact path={"/image"} component={Image} />
              <Route exact path={'/login'} component={LoginRoute} />
              <Route exact path={'/register'} component={RegistrationRoute} />
            </Switch>
          </Router>
        </div>
      </section>
    </main>
  );
}

export default App;
