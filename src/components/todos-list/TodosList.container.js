import React from 'react';
import { connect } from 'react-redux';

import TodosList from './TodosList';
import * as todosActions from '../../actions/todos';

const mapStateToProps = (state) => ({
  todos: state.todos.data,
  inputValue: state.todos.inputValue,
});

const mapDispatchToProps = {
  onAddTodoClick: todosActions.addTodo,
  onRemoveTodoClick: todosActions.removeTodo,
  onNewTodoInputChange: todosActions.setTodoInputValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosList);