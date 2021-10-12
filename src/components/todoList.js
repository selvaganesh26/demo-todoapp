/* eslint-disable no-console */
import context from '../core/context';
import TodoManager from '../services/todoManager';
import todoDisplay from './todoDisplay';

const todoList = () => {
	const { filter, todos } = context.state;
	const filteredTodo = TodoManager.doFilter(todos, filter);

	console.log(filteredTodo);
	return filteredTodo.map(todoDisplay);
};

export default todoList;
