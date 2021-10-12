/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import context from './core/context';
import TextArea from './components/textArea';
import SampleService from './services/sample';
import toggleAll from './components/toggleAlltodos';
import clearCompleted from './components/clearCompleted';
import filterBar from './components/filterBar';
import todoList from './components/todoList';

const App = () => {
	useEffect(SampleService.sayHai, []);
	console.log(context.state);

	return <div className="App">
		<div>{ toggleAll() }{ TextArea() }  </div>
		<div>{ AddButton() }</div>
		<span>Todo: { todoList() }</span>
		<div>{ clearCompleted(context.state.todos) }</div>
		<div>{ filterBar() }</div>
	</div>;
};

export default App;
