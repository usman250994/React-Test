import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MyContext from '../../contextAPI/my-context';
import { defualtCenter, mapContainerStyle } from '../../shared/constants';
import './map.css';

const MapComponnt = () => (
    <MyContext.Consumer>
        {({markers}) => (
            <Map
                google={window.google}
                zoom={5}
                containerStyle={mapContainerStyle}
                initialCenter={defualtCenter}
            >
                {markers.map(({ lat, lng, title, address, id }) => (
                    <Marker
                        key={id}
                        title={address}
                        name={title}
                        position={{ lat: lat, lng: lng }} />
                ))
                }
            </Map>
        )}
    </MyContext.Consumer>
);

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCCNwJd2BNJrKv-2QUvXk7rDD-T7zuraXQ'

})(MapComponnt)