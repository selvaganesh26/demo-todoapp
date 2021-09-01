import { React } from 'react';
import context from '../core/context';
const todoDisplay = (todos) => <div key={ todos.id }>
	<input
		type="checkbox"
		checked={ todos.isCompleted }
		onChange={ () => context.actions.toggleTodo(todos) }
	/>
	<div>{ todos.text }</div>
</div>;

export default todoDisplay;
