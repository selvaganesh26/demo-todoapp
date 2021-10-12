import { React } from 'react';
import filterButton from './filterButton';
const filterBar = () => {
	const filters = ['All', 'Active', 'Completed'];

	return <div> { filters.map(filterButton) }</div>;
};

export default filterBar;
