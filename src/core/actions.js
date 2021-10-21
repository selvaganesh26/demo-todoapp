import TodoManager from '../services/todoManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) =>
	TodoManager.addTodo(state);

const toggleTodo = ({ state, data }) =>
	({ todos: TodoManager.toggleTodo(state.todos, data) });

const toggleAllTodos = ({ state, data }) =>
	({ todos: TodoManager.toggleAllTodos(state.todos, data) });

const clearCompleted = ({ state }) =>
	({ todos: TodoManager.clearCompleted(state.todos) });

const removeTodo = ({ state, data }) =>
	({ todos: TodoManager.removeTodo(state.todos, data) });

const setFilter = ({ data }) => ({ filter: data });

const setEditing = ({ data }) => ({
	editing: data,
	input: data.text,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const setTask = ({ data }) => ({
	tasks: data,
});

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleAllTodos,
	clearCompleted,
	removeTodo,
	setFilter,
	setEditing,
	editTodo,
	setTask,
};

export default actions;
