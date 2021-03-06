import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../Services/auth-api-service";


class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null, password: "", passwurd: "" };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, password, passwurd } = ev.target;

    if (passwurd.value !== password.value) {
      return this.setState({ error: "Passwords do not match" });
    }

    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    }).then((user) => {
      console.log('promise was resolved', user)

        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        console.log('promise was rejected', res)
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className="registration-form" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error.toString()}</p>}</div>
        <div className="input-box">
          <label htmlFor="registration-username-input">Choose a username</label>
          <br />
          <input id="registration-username-input" name="username" required />
        </div>
        <div className="input-box">
          <label htmlFor="registration-password-input">Choose a password</label>
          <br />
          <input
            id="registration-password-input"
            ref={this.firstInput}
            autoComplete="off"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="validate-password" className="validate">
            Confirm your password
          </label>
          <br />
          <input
            id="validate-password"
            autoComplete="off"
            name="passwurd"
            type="password"
            required
          />
          <p className="err">{this.state.error && this.state.error.toString()}</p>
        </div>
        <div className="center">
          <button className="registration-btn" type="submit">
            Sign up
          </button>{" "}
          <Link to="/login">
            <button type="button" className="have-acc" id="account">
              Already have an account?
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
