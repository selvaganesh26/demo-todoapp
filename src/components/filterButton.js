import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const filterButton = (filter) => {
	const notodo = TodoManager.getTodoCount(context.state.todos) === 0;

	return notodo
		? null
		: <div key={ filter }>
			<button onClick={ () =>
				context.actions.setFilter(filter) }
			>
				{ filter }</button>
		</div>;
};

export default filterButton;
