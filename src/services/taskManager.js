import context from '../core/context.js';
import { rndString } from '@laufire/utils/random';
import config from '../core/config.js';

const getTask = (text) => ({
	id: rndString(config.refreshIDLength),
	text: text,
});

const taskManager = () => ({
	init: () => context.actions.setTask([
		getTask('Task1'),
		getTask('Task2'),
		getTask('Task3'),
	]),
});

const TaskManager = taskManager();

export default TaskManager;
