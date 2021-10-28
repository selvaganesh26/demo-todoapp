import TodoManager from '../services/todoManager';
import TaskManager from '../services/taskManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) =>
	TodoManager.addTodo(state.todos, state.input);

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

const removeTask = ({ state, data }) => ({
	tasks: TaskManager.removeTask(state.tasks, data),
});

const addTaskTodo = ({ state, data }) => ({
	todos: TodoManager.addTodo(state.todos, data.text),
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
	removeTask,
	addTaskTodo,

};

export default actions;
