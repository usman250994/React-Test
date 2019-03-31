import React, { Component } from 'react';

const SharedContext = React.createContext();

export class SharedProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [],
            showForm: false,
        };
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm,
        });
    };

    updateMarkers = () => {
        this.setState({
            message: '',
            isOpen: false,
        });
    };

    render() {
        const { children } = this.props;
        return (
            <SharedContext.Provider
                value={{
                    showForm: this.state.showForm,
                    markers: this.state.markers,
                    updateMarkers: this.updateMarkers,
                    toggleForm: this.toggleForm,
                }}
            >
                {children}
            </SharedContext.Provider>
        );
    }
}

export const SharedConsumer = SharedContext.Consumer;