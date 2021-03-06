import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './components/todoPane';
import TaskManager from './services/taskManager.js';
import TaskPane from './components/taskPane';
import Ticker from './services/ticker';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(Ticker.start, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
