import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    }
  }

  handleUserChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassChange(e) {
    this.setState({
      password: e.target.value,
    })
  }

  handleSubmit() {
    axios.post('/api/login', {
      username: this.state.username,
      password: this.state.password,
    }).then((response) => {
      if(response.data = "Login Success") {
        console.log('Login Success');
      } else {
        console.log('Login Failure');
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div className="uk-container uk-container-small">
        <div className="uk-card uk-card-default uk-card-body uk-position-medium uk-position-center" id="register">
          {/* <legend className="uk-legend">Register</legend> */}
          <p className="uk-h4 uk-text-center">Login</p>
          <div className="uk-margin">
            <input
                    className="uk-input round-input"
                    type="text" 
                    placeholder="username" 
                    id="usernameBox" 
                    value={this.state.username} 
                    onChange={this.handleUserChange} />
          </div>
          <div className="uk-margin">
            <input  className="uk-input round-input" 
                    type="password" 
                    placeholder="password" 
                    id="passwordBox" 
                    value={this.state.password} 
                    onChange={this.handlePassChange} />
          </div>
          <div className="uk-margin uk-text-center">
            <button type="submit" className="uk-button uk-button-primary" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}