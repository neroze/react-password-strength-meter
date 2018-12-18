import React, { Fragment } from "react";
import PasswordStrength from "./passwordStrength";
import zxcvbn from "zxcvbn";

export default class extends React.Component {
  state = {
    password: ""
  };

  handlePasswordChange = e => {
    e.persist();
    this.setState({ password: e.target.value });
  };

  componentDidMount() {
    console.log("zxcvbn------->", zxcvbn("root#jumperworld@1987.com"));
  }

  render() {
    return (
      <Fragment>
        <label>Password: </label>
        <PasswordStrength
          name="password-strength"
          value={this.state.password}
          minLength={10}
          myStyles={{
            height: "10px",
            marginTop: "5px"
          }}
        >
          <input
            name="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </PasswordStrength>
      </Fragment>
    );
  }
}
