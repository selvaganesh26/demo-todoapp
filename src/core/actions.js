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

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleAllTodos,
	clearCompleted,
	removeTodo,
};

export default actions;
