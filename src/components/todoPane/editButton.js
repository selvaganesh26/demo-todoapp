import { React } from 'react';
import context from '../../core/context';

const editButton = () =>
	<button
		disabled={ context.state.input === '' }
		onClick={ () => context.actions.editTodo() }
	>Edit</button>;

export default editButton;
