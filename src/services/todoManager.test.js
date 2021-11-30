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
