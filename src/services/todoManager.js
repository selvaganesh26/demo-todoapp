import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const multiplTwoNos = (a, b) => a * b;

const addTodo = (todos, input) =>
	todos.concat({ id: rndString(config.refreshIDLength),
		text: input,
		isCompleted: false });

const toggleTodo = (todos, data) =>
	todos.map((todo) =>
		(todo.id !== data.id
			? todo
			: { ...todo, isCompleted: !data.isCompleted }));

const toggleAllTodos = (todos, ischecked) =>
	todos.map((todo) => ({ ...todo, isCompleted: !ischecked }));

const getActiveCount = (data) =>
	data.filter((todo) => !todo.isCompleted).length;

const getTodoCount = (data) => data.length;

const clearCompleted = (todos) => todos.filter((todo) => !todo.isCompleted);

const getInactiveCount = (todos) =>
	todos.filter((todo) => !todo.isCompleted).length;

const removeTodo = (todos, data) =>
	todos.filter((todo) => todo.id !== data.id);

const filters = {
	All: () => true,
	Active: (todo) => !todo.isCompleted,
	Completed: (todo) => todo.isCompleted,
};

const doFilter = (todos, filter) => todos.filter(filters[filter]);

const editTodo = (
	todos, editing, text
) => todos.map((todo) =>
	(todo.id !== editing.id
		? todo
		: {
			...todo,
			text,
		}));

const TodoManager = {
	addTodo,
	toggleTodo,
	toggleAllTodos,
	getActiveCount,
	getTodoCount,
	clearCompleted,
	getInactiveCount,
	removeTodo,
	doFilter,
	editTodo,
	multiplTwoNos,
};

export default TodoManager;
