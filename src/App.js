/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import context from './core/context';
import TextArea from './components/textArea';
import SampleService from './services/sample';
import todoDisplay from './components/todoDisplay';
import toggleAll from './components/toggleAlltodos';
import clearCompleted from './components/clearCompleted';

const App = () => {
	useEffect(SampleService.sayHai, []);
	console.log(context.state);

	return <div className="App">
		<div>{ toggleAll() }{ TextArea() }  </div>
		<div>{ AddButton() }</div>
		<span>Todo: {context.state.todos.map(todoDisplay)}</span>
		<div>{ clearCompleted(context.state.todos) }</div>
	</div>;
};

export default App;
