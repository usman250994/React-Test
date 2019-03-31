import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export const checkAddress = (address) => {
    let formatedAddress;
    return geocodeByAddress(address)
        .then(results => {
            formatedAddress = results[0].formatted_address
            return getLatLng(results[0]);
        })
        .then(({ lat, lng }) => {
            return { lat, lng, address: formatedAddress }
        })
        .catch(error => { throw error });
}