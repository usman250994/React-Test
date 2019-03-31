import React, { Component } from 'react';
import MyContext from './my-context';
import { checkAddress } from '../shared/services/geolocation-services';
import { googleMapExists } from '../shared/helpers/utilities';
import { getAllMarkers, deleteMarkerById, updateMarkerbyId, addMarker } from '../shared/services/marker-service';

class MyProvider extends Component {
    state = {
        markers: [],
        error: '',
        editableMarker: {},
        showForm: false,
        apiLoad: false,
    };

    enableLoader = () => {
        this.setState({ apiLoad: !this.state.apiLoad })
    }

    componentDidMount() {
        this.enableLoader();
        getAllMarkers().then(res => { this.setState({ markers: res.data }, this.enableLoader()) });
    }

    toggleForm = () => {
        if (!googleMapExists()) {
            return;
        }
        this.setState({
            showForm: !this.state.showForm, error: ''
        }, this.resetEditableMarker());
    };

    resetEditableMarker = () => {
        if (!this.state.showForm) {
            this.setState({ editableMarker: {} });
        }
    }

    addMarker = async (address, title, prevId) => {
        try {
            this.enableLoader();
            const latLng = await checkAddress(address);
            this.setState({ error: '' });
            prevId ? this.updateMarker({ ...latLng, title }, prevId) :
                this.addNewMarker({ ...latLng, title, });
        }
        catch (errorMsg) {
            this.setState({ error: errorMsg }, this.enableLoader())
        }
    }

    updateMarker = (mark, prevId) => {
        delete mark.id
        updateMarkerbyId(prevId, mark).then(res => {
            let markers = [...this.state.markers];
            const index = markers.findIndex(marker => marker.id === prevId);
            markers[index] = { ...mark, id: prevId };
            this.setState({ markers, showForm: false, }, this.enableLoader());
        });
    }

    editMarker = (id) => {
        if (!googleMapExists()) {
            return;
        }
        const editableMarker = this.state.markers.find(marker => marker.id === id);
        this.setState({ editableMarker }, this.toggleForm());
    }

    deleteMarker = (id) => {
        this.enableLoader();
        deleteMarkerById(id).then(() => this.setState({ markers: this.state.markers.filter(marker => marker.id !== id) }, this.enableLoader()));
    }

    addNewMarker = (marker) => {
        addMarker(marker).then(res => {
            this.setState({
                markers: [...this.state.markers, res.data],
                showForm: false,
            }, this.enableLoader());
        });

    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    showForm: this.state.showForm,
                    markers: this.state.markers,
                    updateMarkers: this.updateMarkers,
                    toggleForm: this.toggleForm,
                    addMarker: this.addMarker,
                    deleteMarker: this.deleteMarker,
                    editMarker: this.editMarker,
                    error: this.state.error,
                    editableMarker: this.state.editableMarker,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;