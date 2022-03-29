import React from 'react';

class Register extends React.Component {
  state = { userName: '', mobileNumber: '' };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.userName === '' || this.state.mobileNumber === '')
      return alert("Fields can't be left empty");
  };

  render() {
    return (
      <div className="page-div">
        <h2 className="page-head">Register</h2>
        <form
          method="post"
          className="auth-form login"
          onSubmit={this.handleFormSubmit}
        >
          <input
            type="text"
            name="user-name"
            value={this.state.loginToken}
            onChange={e => this.setState({ userName: e.target.value })}
            className="user-input"
            placeholder="Name"
          />
          <input
            type="number"
            name="mobile-number"
            value={this.state.loginToken}
            onChange={e => this.setState({ mobileNumber: e.target.value })}
            className="user-input"
            placeholder="Mobile Number"
          />
          <button className="form-btn">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
