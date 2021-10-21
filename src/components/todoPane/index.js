import { React } from 'react';
import TextArea from './textArea.js';
import todoList from './todoList.js';
import toggleAll from './toggleAlltodos.js';
import clearCompleted from './clearCompleted.js';
import filterBar from './filterBar.js';
import actionButton from './actionButton.js';
import context from '../../core/context.js';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '50%',
	background: 'beige',
};

const TodoPane = () =>
	<div style={ style }>
		<div>
			{toggleAll()}
			{TextArea()}
			<span>{actionButton()}</span>
		</div>
		<div>Todos: {todoList() }</div>
		<div>{ clearCompleted(context.state.todos) }</div>
		<div>{ filterBar() }</div>
	</div>
	;

export default TodoPane;
