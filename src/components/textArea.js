import { React } from 'react';
import context from '../core/context';
const TextArea = () =>
	<input
		type="text"
		size="20"
		value={ context.state.input }
		onChange={ (evt) => context.actions.setInput(evt.target.value) }
	/>;

export default TextArea;
