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
        <div>
          <form className="uk-form-horizontal">
          <div className="">
            <label className="uk-form-label">Class Name</label>
            <div className="uk-form-controls">
              <input className="uk-input uk-form-width-medium" id="form-horizontal-text" type="text" placeholder="Class Name" />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Subject</label>
            <div className="uk-form-controls">
              <select className="uk-select uk-form-width-medium" id="form-horizontal-select">
                  <option>Option 01</option>
                  <option>Option 02</option>
              </select>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <button className="uk-button uk-button-primary">Add Class</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}