import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const addTodo = (state) =>
	({
		todos: state.todos.concat({ id: rndString(config.refreshIDLength),
			text: state.input,
			isCompleted: false }),
		input: '',
	});

const toggleTodo = (todos, data) =>
	todos.map((todo) =>
		(todo.id !== data.id
			? todo
			: { ...todo, isCompleted: !data.isCompleted }));

const toggleAllTodos = (todos, ischecked) =>
	todos.map((todo) => ({ ...todo, isCompleted: !ischecked }));

const getActiveChecked = (data) =>
	data.filter((todo) => !todo.isCompleted).length;

const getActiveTodos = (data) => data.length;

const clearCompleted = (todos) => todos.filter((todo) => !todo.isCompleted);

const clearCompletedCount = (todos) =>
	todos.filter((todo) => !todo.isCompleted).length;

const TodoManager = {
	addTodo,
	toggleTodo,
	toggleAllTodos,
	getActiveChecked,
	getActiveTodos,
	clearCompleted,
	clearCompletedCount,
};

export default TodoManager;
