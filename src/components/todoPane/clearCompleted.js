/* eslint-disable react/jsx-closing-bracket-location */
import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const clearCompleted = (todos) => {
	const notCompleted
		= TodoManager.getActiveCount(todos) === todos.length;

	return notCompleted
		? null
		: <button onClick={ () =>
			context.actions.clearCompleted(todos) }
		>
			clear completed</button>;
};

export default clearCompleted;
