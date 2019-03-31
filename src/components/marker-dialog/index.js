import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddressSearch from '../places-auto-complete';
import TextField from '@material-ui/core/TextField';
import MyContext from '../../contextAPI/my-context';
import './marker-dialog.css';

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class MarkerDialog extends React.Component {
	static contextType = MyContext;
	state = {
		address: '',
		title: '',
		refreshForm: false,
		editableMarker: {},
	};
	handleChange = address => {
		this.setState({ address });
	};

	handleTitleChange = (event) => {
		this.setState({ title: event.target.value });
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.refreshForm && !prevState.refreshForm) {
			if (nextProps.editableMarker.id !== prevState.editableMarker.id) {
				return ({ address: nextProps.editableMarker.address, title: nextProps.editableMarker.title, refreshForm: true, editableMarker: nextProps.editableMarker });
			} else {
				return ({ address: '', title: '', refreshForm: true });
			}
		}
		if (!nextProps.refreshForm && prevState.refreshForm) {
			return ({ refreshForm: false });
		}
		return null;
	}

	render() {
		const { title, address, editableMarker } = this.state;
		const { addMarker, toggleForm, showForm, error } = this.context
		return (
			<Dialog
				open={showForm}
				TransitionComponent={Transition}
				keepMounted
			>
				<DialogTitle>
					Add Address to display marker
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<TextField
							label="Title"
							margin="normal"
							value={title}
							onChange={this.handleTitleChange}
						/>
						{showForm ?
							<AddressSearch
								handleChange={this.handleChange}
								address={address}
							/> : null}
						<span className="error">{error}</span>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={() => toggleForm()} >
						cancel
      </Button>
					<Button variant="contained" onClick={() => addMarker(address, title, editableMarker.id)} >
						{editableMarker.id ? 'Update Marker' : 'Add Marker'}
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default MarkerDialog;