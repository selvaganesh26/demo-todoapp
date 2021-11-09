import context from '../core/context.js';
import { rndString } from '@laufire/utils/random';
import config from '../core/config.js';
import { peek } from '@laufire/utils/debug';

const getTask = (text) => ({
	id: rndString(config.refreshIDLength),
	text: text,
});

const init = () => {
	context.actions.addTask('Task1');
	context.actions.addTask('Task2');
	context.actions.addTask('Task3');
};

const removeTask = (tasks, data) => peek(peek(tasks, 'All tasks')
	.filter((task) =>
		task.id !== data.id), 'filtered tasks');

const addTask = (tasks, task) => tasks.concat(getTask(task));

const taskManager = () => ({
	init,
	removeTask,
	addTask,
});

const TaskManager = taskManager();

export default TaskManager;
