/* eslint-disable no-console */
import context from '../../core/context';
import { React } from 'react';
import Task from './task.js';

const TaskList = () => {
	const { tasks } = context.state;

	console.log(tasks);

	return <div>
		{ tasks.map(Task) }
	</div>;
};

export default TaskList;
