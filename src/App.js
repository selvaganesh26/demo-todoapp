/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import context from './core/context';
import TextArea from './components/textArea';
import SampleService from './services/sample';
import todoDisplay from './components/todoDisplay';
const App = () => {
	useEffect(SampleService.sayHai, []);
	console.log(context.state);

	return <div className="App">
		<div>{ TextArea() } </div>
		<div>{ AddButton() } </div>
		<span>Todo: {context.state.todos.map(todoDisplay)}</span>
	</div>;
};

export default App;
