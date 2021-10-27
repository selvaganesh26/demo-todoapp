import context from '../core/context.js';
import { rndString } from '@laufire/utils/random';
import config from '../core/config.js';

const getTask = (text) => ({
	id: rndString(config.refreshIDLength),
	text: text,
});

const init = () => context.actions.setTask([
	getTask('Task1'),
	getTask('Task2'),
	getTask('Task3'),
]);

const removeTask = (tasks, data) => tasks.filter((task) => task.id !== data.id);

const taskManager = () => ({
	init,
	removeTask,
});

const TaskManager = taskManager();

export default TaskManager;
