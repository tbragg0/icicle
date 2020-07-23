import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handlePassConfChange = this.handlePassConfChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      passwordConf: "",
      error: "",
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

  handlePassConfChange(e) {
    this.setState({
      passwordConf: e.target.value,
    })
  }

  handleSubmit() {
    if(this.state.password === this.state.passwordConf) {
      axios.post('/api/signup', {
        username: this.state.username,
        password: this.state.password,
      }).then((response) => {
        console.log('User registered');
      }).catch((err) => {
        console.log(err);
      })
    } else {
      this.setState({
        error: "Passwords do not match."
      });

      console.log(this.state.error);
    }
  }

  render() {
    return(
      <div className="uk-container uk-container-small">
        <div className="uk-card uk-card-default uk-card-body uk-position-medium uk-position-center" id="register">
          {/* <legend className="uk-legend">Register</legend> */}
          <p className="uk-h4 uk-text-center">Register</p>
          <div className="uk-margin">
            <input
                    className="uk-input" 
                    type="text" 
                    placeholder="username" 
                    id="usernameBox" 
                    value={this.state.username} 
                    onChange={this.handleUserChange} />
          </div>
          <div className="uk-margin">
            <input  className="uk-input" 
                    type="password" 
                    placeholder="password" 
                    id="passwordBox" 
                    value={this.state.password} 
                    onChange={this.handlePassChange} />
          </div>
          <div className="uk-margin">
            <input  className="uk-input" 
                    type="password" 
                    placeholder="confirm password" 
                    id="passwordConfBox" 
                    value={this.state.passwordConf} 
                    onChange={this.handlePassConfChange} />
          </div>
          <div className="uk-margin uk-text-center">
            <button type="submit" className="uk-button uk-button-primary" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}