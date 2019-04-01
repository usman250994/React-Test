import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Notifications from 'react-notify-toast';
import MapComponnt from '../map';
import MyContext from '../../contextAPI/my-context';
import CardList from '../card-list';
import './dashboard.css'

const Dashboard = () => (
    <MyContext.Consumer>
        {({ apiLoad }) => (
            <div className='align-horizontal'>
                <div className="map-flex"> <MapComponnt /></div>
                {apiLoad ? <CircularProgress /> : null}
                <div className="list-flex"><CardList /></div>
                <Notifications />
            </div>
        )}
    </MyContext.Consumer>

);

export default Dashboard;
