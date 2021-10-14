import { React } from 'react';
import context from '../core/context';

const actionKeys = {
	Enter: () => context.actions.addTodo(),
	Escape: () => context.actions.setInput(''),
};
const TextArea = () =>
	<input
		type="text"
		size="20"
		value={ context.state.input }
		onChange={ (evt) => context.actions.setInput(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default TextArea;
