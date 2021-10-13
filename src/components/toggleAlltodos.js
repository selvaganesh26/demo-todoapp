/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const toggleAll = () => {
	const ischecked = TodoManager.getActiveChecked(context.state.todos) === 0;
	const noToDos = TodoManager.getTodoCount(context.state.todos) === 0;

	console.log(ischecked);
	return noToDos
		? null
		: <input
				type="checkbox"
				checked={ ischecked }
				onChange={ () => context.actions.toggleAllTodos(ischecked) }
		  />
	;
};

export default toggleAll;
