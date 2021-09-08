import { React } from 'react';
import context from '../core/context';
const todoDisplay = (todo) => <div key={ todo.id }>
	<input
		type="checkbox"
		checked={ todo.isCompleted }
		onChange={ () => context.actions.toggleTodo(todo) }
	/>
	<div>{ todo.text }</div>
</div>;

export default todoDisplay;
