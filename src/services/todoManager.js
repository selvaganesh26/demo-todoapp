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

const getTodoCount = (data) => data.length;

const clearCompleted = (todos) => todos.filter((todo) => !todo.isCompleted);

const clearCompletedCount = (todos) =>
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
	getActiveChecked,
	getTodoCount,
	clearCompleted,
	clearCompletedCount,
	removeTodo,
	doFilter,
	editTodo,
};

export default TodoManager;
