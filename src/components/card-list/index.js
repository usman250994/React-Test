import React from 'react';
import CardDetails from '../card-details';
import MarkerDialog from '../marker-dialog';
import MyContext from '../../contextAPI/my-context';
import Button from '@material-ui/core/Button';

const CardList = () => (
	<MyContext.Consumer>
		{({ editableMarker, showForm, toggleForm }) => (
			<div>
				<Button onClick={() => toggleForm()} variant="contained" color="primary" >
					Add Map
                </Button>
				<CardDetails />
				<MarkerDialog refreshForm={showForm} editableMarker={editableMarker} />

			</div>
		)}
	</MyContext.Consumer>
);

export default CardList;
