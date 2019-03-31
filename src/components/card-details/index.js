import React from 'react';
import MyContext from '../../contextAPI/my-context';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card-details.css'

const CardsDetails = () =>
	(
		<MyContext.Consumer>
			{({ markers, editMarker, deleteMarker }) => {
				return (
					markers.map(({ title, lat, lng, id, address }) => (
						<Card key={id} className="card-style">
							<CardContent>
								<Typography variant="h5" >
									{title}
								</Typography>
								<Typography >
									{address}
								</Typography>
								<Typography >
									latitude: {lat}<br />
									longitude: {lng}
								</Typography>
							</CardContent>
							<CardActions>
								<Button onClick={() => { editMarker(id) }}>Edit</Button>
								<Button onClick={() => { deleteMarker(id) }}>delete</Button>
							</CardActions>
						</Card>
					))
				)
			}
			}
		</MyContext.Consumer>
	)

export default CardsDetails;

