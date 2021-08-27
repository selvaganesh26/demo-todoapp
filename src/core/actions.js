const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	todo: state.todo.concat(state.input),
});

const actions = {
	setInput,
	addTodo,
};

export default actions;
