import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;
