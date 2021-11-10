/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import faker from 'faker';
import { rndBetween } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';
import config from '../core/config';

const toProperFormat = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1);

const getRndTask = () =>
	toProperFormat(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const getTasks = () =>
	range(0, rndBetween(0, config.minimumTaskCount))
		.map(() => getRndTask());

const TaskRetriver = {
	getTasks,
};

export default TaskRetriver;
