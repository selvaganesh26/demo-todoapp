import { React } from 'react';
import context from '../../core/context';

const filterButton = (filter) =>
	<div key={ filter }>
		<button onClick={ () =>
			context.actions.setFilter(filter) }
		>
			{ filter }</button>
	</div>;

export default filterButton;
