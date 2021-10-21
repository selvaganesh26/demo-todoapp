/* eslint-disable no-console */
import { React } from 'react';
import filterButton from './filterButton';
import TodoManager from '../../services/todoManager';
import context from '../../core/context';

const filters = ['All', 'Active', 'Completed'];

const filterBar = () => {
	const notodo = TodoManager.getTodoCount(context.state.todos) === 0;

	console.log(TodoManager.getTodoCount(context.state.todos));
	return notodo
		? null
		: <div> { filters.map(filterButton) }</div>;
};

export default filterBar;
