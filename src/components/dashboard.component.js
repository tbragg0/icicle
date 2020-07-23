import React, { Component } from 'react';
import calculator from './img/calculator.svg';
import microscope from './img/microscope.svg';
import historyBook from './img/historyBook.svg';

import WeeklyCalendar from "./weeklyCalendar.component";
import CreateClass from "./createClass.component";

class Plus extends Component {
  render() {
    return(
      <a uk-icon="icon: plus" onClick={this.props.onClick}></a>
    );
  }
}

class Minus extends Component {
  render() {
    return(
      <a uk-icon="icon: minus" onClick={this.props.onClick}></a>
    );
  }
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.showCreateClass = this.showCreateClass.bind(this);

    this.state = {
      showCreateClassForm: false
    }
  }

  showCreateClass() {
    this.setState({
      showCreateClassForm: this.state.showCreateClassForm ? false : true
    });
  }

  render() {
    return(
      <div className="uk-container uk-background-default uk-margin-medium uk-padding">
        <h1 className="uk-heading-medium uk-text-light ">Dashboard</h1>
        <WeeklyCalendar />
        <h2 className="uk-heading-small uk-text-light">Classes { this.state.showCreateClassForm ? <Minus onClick={this.showCreateClass} /> : <Plus onClick={this.showCreateClass} /> }</h2>
        { this.state.showCreateClassForm ? <CreateClass /> : null }
        <p>Select a class to add assignments</p>
        <div className="uk-child-width-expand@s uk-grid">
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium uk-card-hover">
              <div className="uk-column-1-2">
                <div>
                  <h1 className="header uk-text-light uk-card-title">Math</h1>
                  <p>Nearest Due Assignment</p>
                </div>
                <img src={calculator} uk-svg="stroke-animation: true" />
              </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium uk-card-hover">
              <div className="uk-column-1-2">
                <div>
                  <h1 className="header uk-text-light uk-card-title">Science</h1>
                  <p>Nearest Due Assignment</p>
                </div>
                <img src={microscope} uk-svg="stroke-animation: true" />
              </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium uk-card-hover">
              <div className="uk-column-1-2">
                <div>
                  <h1 className="header uk-text-light uk-card-title">History</h1>
                  <p>Nearest Due Assignment</p>
                </div>
                <img src={historyBook} uk-svg="stroke-animation: true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}