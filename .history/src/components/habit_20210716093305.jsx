import React, { Component } from 'react';

class Habit extends Component {

  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit);
  };
  

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
