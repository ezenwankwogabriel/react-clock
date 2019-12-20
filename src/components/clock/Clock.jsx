import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './display/Display';
import './styles.scss';

class Clock extends Component {
  state = { timeDate: new Date() }
  componentDidMount() {
    this.setCurrentTime();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  setCurrentTime() {
    this.timer = setInterval((() => {
      this.setState(() => ({ ...this.state, timeDate: new Date() }));
    }), 1000);
  }
  formatDate(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  render() {
    const { timeDate } = this.state;
    const date = this.formatDate(timeDate);
    return (
      <div data-testid="app-clock">
        <div className="clock">
          <div className="circle">
            <Display dateTime={date} />
          </div>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  time: PropTypes.string,
};
 
export default Clock;