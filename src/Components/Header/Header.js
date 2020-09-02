import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import UserContext from "../Context/UserContext";
import TokenService from "../../Services/token-service";
export default class Header extends React.Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };
  renderLogin() {
    return (
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    );
  }
  renderLogout() {
    return (
      <nav>
        <Link onClick={this.handleLogoutClick} to="/login">
          Logout
        </Link>
      </nav>
    );
  }

  render() {
    return (
      <section>
        <nav className="centering">
          
          {TokenService.hasAuthToken()
            ? this.renderLogout()
            : this.renderLogin()}
          <Link to="/image">Images</Link>
        </nav>

        <div className="centering">
          {TokenService.hasAuthToken() ? (
            <Link to={"/dashboard"}>
              <h1>Friends Album</h1>
            </Link>
          ) : (
            <Link to={"/"}>
              <h1>Friends Album</h1>
            </Link>
          )}
        </div>
      </section>
    );
  }
}
