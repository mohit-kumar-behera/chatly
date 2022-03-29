import React from 'react';

class Login extends React.Component {
  state = { loginToken: '' };

  handleFormSubmit(e) {
    e.preventDefault();

    if (this.state.loginToken === '') return alert("Field can't be left empty");
  }

  render() {
    return (
      <div className="page-div">
        <h2 className="page-head">Enter Your Token</h2>
        <form
          method="post"
          className="auth-form login"
          onSubmit={this.handleFormSubmit}
        >
          <input
            type="text"
            name="login-token"
            value={this.state.loginToken}
            onChange={e => this.setState({ loginToken: e.target.value })}
            className="user-input"
            placeholder="Token"
          />
          <button className="form-btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
