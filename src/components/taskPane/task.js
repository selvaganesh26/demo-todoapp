import { React } from 'react';
import context from '../../core/context';

const removeButton = (task) =>
	<button onClick={ () => context.actions.removeTask(task) }>X</button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{text}</span>
		<span>{removeButton(task)}</span>
	</div>;
};

export default Task;
