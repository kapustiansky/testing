
import React, { Component } from 'react';
import './todo-list-item.css';
import '../fonts/iconfont/iconsfont.css';

class TodoListItem extends Component {
  render() {
    const { label, onDeleted, 
            onToggleDone, 
            onToggleImportant, 
            done, important } = this.props;

    let classNames = "todo-list-item";
      if(done) {
        classNames += " done";
      }
      if(important) {
        classNames += " important"
      }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>
  
        <button 
          type="button"
          className="btn btn-outline-success btn-sm float-right geek-dust-bunny-done"
          onClick={onToggleImportant}>
        </button>
  
        <button 
          type="button"
          className="btn btn-outline-danger btn-sm float-right geek-dust-bunny-danger"
          onClick={onDeleted}>
        </button>
      </span>
    );
  }
};

export default TodoListItem;