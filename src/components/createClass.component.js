import React, { Component } from 'react';
import axios from 'axios';

export default class CreateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div class="uk-container uk-container-small uk-margin-medium">
        <div class="uk-card uk-card-body uk-card-default">
          <h1 className="header uk-text-light uk-card-title">Create New Class</h1>
          <form className="uk-form-horizontal">
          <div className="uk-margin">
            <label className="uk-form-label">Class Name</label>
            <div className="uk-form-controls">
              <input className="uk-input" id="form-horizontal-text" type="text" placeholder="Class Name" />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Subject</label>
            <div class="uk-form-controls">
              <select class="uk-select" id="form-horizontal-select">
                  <option>Option 01</option>
                  <option>Option 02</option>
              </select>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <button class="uk-button uk-button-primary">Add Class</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}