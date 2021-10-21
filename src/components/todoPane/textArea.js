/* eslint-disable no-console */
import { React } from 'react';
import context from '../../core/context';

const getEnterkeyAction = () => (context.state.editing
	? 'editTodo'
	: 'addTodo');

const actionKeys = {
	Enter: () => context.actions[getEnterkeyAction()](),
	Escape: () => context.actions.setInput(''),
};

const TextArea = () =>
	<input
		type="text"
		size="20"
		value={ context.state.input }
		onChange={ (evt) => context.actions.setInput(evt.target.value) }
		onKeyUp={ (evt) => {
			console.log(evt.code);
			actionKeys[evt.code] && actionKeys[evt.code]();
		} }
	/>;

export default TextArea;
