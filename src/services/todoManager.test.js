/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */

import TodoManager from './todoManager';
test('multiplyTwoNos.', () => {
	const a = 7;
	const b = 5;
	const result = TodoManager.multiplTwoNos(a, b);

	expect(result).toEqual(35);
});

test('getTodoCount', () => {
	const data = [{ id: 'abcd', todo: 'go', isCompleted: false },
		{ id: 'lpdh', todo: 'go', isCompleted: false }];
	const result = TodoManager.getTodoCount(data);

	expect(result).toEqual(2);
});

test('addTodo', () => {
	const todos = [{ id: 'abcd',
		text: 'hii',
		isCompleted: false }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }];
	const result = TodoManager.addTodo(todos, 'welcome');

	expect(result).toEqual([{ id: 'abcd',
		text: 'hii',
		isCompleted: false }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }, { id: expect.any(String),
		text: 'welcome',
		isCompleted: false }]);
});

test('toggleTodo', () => {
	const todos = [{ id: 'abcd',
		text: 'hii',
		isCompleted: false }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }];
	const data = { id: 'abcd',
		text: 'hii',
		isCompleted: false };
	const result = TodoManager.toggleTodo(todos, data);

	expect(result).toEqual([{ id: 'abcd',
		text: 'hii',
		isCompleted: true }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }]);
});

test('toggleAllTodos', () => {
	const todos = [{ id: 'abcd',
		text: 'hii',
		isCompleted: false }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }];
	const ischecked = false;
	const result = TodoManager.toggleAllTodos(todos, ischecked);

	expect(result).toEqual([{ id: 'abcd',
		text: 'hii',
		isCompleted: true }, { id: 'gpfh',
		text: 'hello',
		isCompleted: true }]);
});

test('getActiveCount', () => {
	const data = [{ id: 'abcd',
		text: 'hii',
		isCompleted: true }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }, { id: 'asdf',
		text: 'welcome',
		isCompleted: false }];
	const result = TodoManager.getActiveCount(data);

	expect(result).toEqual(2);
});

test('clearCompleted', () => {
	const todos = [{ id: 'abcd',
		text: 'hii',
		isCompleted: true }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }, { id: 'asdf',
		text: 'welcome',
		isCompleted: false }];
	const result = TodoManager.clearCompleted(todos);

	expect(result).toEqual([{ id: 'gpfh',
		text: 'hello',
		isCompleted: false }, { id: 'asdf',
		text: 'welcome',
		isCompleted: false }]);
});

test('removeTodos', () => {
	const todos = [{ id: 'abcd',
		text: 'hii',
		isCompleted: true }, { id: 'gpfh',
		text: 'hello',
		isCompleted: false }, { id: 'asdf',
		text: 'welcome',
		isCompleted: false }];

	const data = { id: 'abcd',
		text: 'hii',
		isCompleted: true };
	const result = TodoManager.removeTodo(todos, data);

	expect(result).toEqual([{ id: 'gpfh',
		text: 'hello',
		isCompleted: false }, { id: 'asdf',
		text: 'welcome',
		isCompleted: false }]);
});

test('doFilter', () => {
	const activeTodos = [{ id: 'gpfh',
		text: 'hello',
		isCompleted: false }, { id: 'cqwe',
		text: 'bye',
		isCompleted: false }];
	const completedTodos = [{ id: 'abcd',
		text: 'hii',
		isCompleted: true }];
	const inputTodos = [...activeTodos, ...completedTodos];
	const expectations = [{
		filter: 'All',
		todos: [...activeTodos, ...completedTodos],
	},
	{
		filter: 'Active',
		todos: [...activeTodos],
	},
	{
		filter: 'Completed',
		todos: [...completedTodos],
	}];

	expectations.map(({ filter, todos }) => {
		const result = TodoManager.doFilter(inputTodos, filter);

		expect(result).toEqual(todos);
	});
});
