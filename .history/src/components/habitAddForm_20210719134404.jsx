import React, { Component } from 'react';

  import React from 'react';
  
  const HabitAddForm = (props) => {
    const formRef =  React.createRef();
    const inputRef = React.createRef();
    onSubmit = event => {
      event.preventDefault();
      const name = inputRef.current.value;
      name && props.onAdd(name);
   //   this.inputRef.current.value = '';
      formRef.current.reset();
    };
    return (
      <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input ref={inputRef} type="text" className="add-input" placeholder="Please Enter Your Habit"/>
        <button className="add-button">Add</button>
      </form>
    );
};

export default HabitAddForm;