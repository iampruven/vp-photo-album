import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
export default class Header extends React.Component {
  render() {
    return (
      <section>
        <nav className="centering">
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/register">Register</Link>
          <Link to="/image">Images</Link>
        </nav>

        <div className="centering">
          <h1>Friends Album</h1>
        </div>
      </section>
    );
  }
}
