import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import TextArea from './components/textArea';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return <div className="App">
		<div>{ TextArea() } </div>
		<div>{ AddButton() } </div>
	</div>;
};

export default App;
