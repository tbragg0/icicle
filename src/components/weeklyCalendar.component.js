import React, { Component } from 'react';
import { DateTime } from 'luxon';

export default class WeeklyCalendar extends Component {
  constructor(props) {
    super(props);
    this.getCurrentWeek = this.getCurrentWeek.bind(this);
    this.formatWeek = this.formatWeek.bind(this);
    this.formatCurrentDate = this.formatCurrentDate.bind(this);
    this.state = {
      currentWeek: [],
      currentDate: "",
      currentWeekFormatted: [],
    };
  }

  componentWillMount() {
    this.getCurrentWeek();
    this.formatWeek();
    this.formatCurrentDate();
  }

  getCurrentWeek() {
    let currentDate = DateTime.local();
    let beginningOfWeek = currentDate.minus({days: parseInt(currentDate.weekday) - 1});
    console.log(beginningOfWeek.day);
    let currentWeek = [];
    for(let i = parseInt(beginningOfWeek.day); i < parseInt(beginningOfWeek.day) + 7; i++) {
      if(currentWeek.length === 0) {
        currentWeek.push(beginningOfWeek);
      } else {
        let iteratorDay = beginningOfWeek.plus({days: i - beginningOfWeek.day});
        console.log(i);
        currentWeek.push(iteratorDay);
      }
    }

    this.state.currentWeek = currentWeek;
    this.state.currentDate = currentDate;

    console.log(this.state.currentWeek);

    console.log(currentDate.toLocaleString({ month: 'short', day: 'numeric' }));
  }

  formatWeek() {
    let formattedStrings = this.state.currentWeek.map(day => day.toLocaleString({ month: 'short', day: 'numeric' }));
    let splitString = formattedStrings.map(day => day.split(' '));
    
    this.setState({currentWeekFormatted: splitString});
    console.log(this.state.currentWeekFormatted);
  }

  formatCurrentDate() {
    this.setState({ currentDate: this.state.currentDate.toLocaleString({ month: 'short', day: 'numeric' }).split(' ')});
  }

  render() {
    return(
      <div className="uk-child-width-expand@s uk-grid uk-grid-collapse uk-grid-match border-light">
      {
        this.state.currentWeekFormatted.map((date) => {
          if(date[1] == this.state.currentDate[1]) {
            //Highlight number because it is the current date
            return(
              <div className="uk-card uk-card-hover uk-card-body uk-card-small border-thin">
                <h3 className="uk-card-title">{date[0]} <div className="uk-align-right currentDate">{date[1]}</div></h3>
                <span className="uk-label uk-text-truncate">Math Assignment</span>
              </div>
            )
          } else {
            //Don't highlight number because it is not the current date
            return(
              <div className="uk-card uk-card-hover uk-card-body uk-card-small border-thin">
                <h3 className="uk-card-title">{date[0]} <div className="uk-align-right">{date[1]}</div></h3>
                <span className="uk-label uk-text-truncate">Math Assignment</span>
              </div>
            )
          }
        })
      }
      </div>
    );
  }
}