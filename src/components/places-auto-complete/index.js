import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const AddressSearch = ({address, handleChange, handleSelect}) => (
	<PlacesAutocomplete
		value={address}
		onChange={handleChange}
		onSelect={handleSelect}
	>
		{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
			<div>
				<input
					{...getInputProps({
						placeholder: 'Search Places ...',
						className: 'location-search-input',
					})}
				/>
				<div>
					{loading && <div>Loading...</div>}
					{suggestions.map(suggestion => {
						const className = suggestion.active
							? 'suggestion-item--active'
							: 'suggestion-item';
						const style = suggestion.active
							? { backgroundColor: '#90c7f9', cursor: 'pointer' }
							: { backgroundColor: '#ffffff', cursor: 'pointer' };
						return (
							<div
								{...getSuggestionItemProps(suggestion
									, {
										className,
										style,
									}
								)}
							>
								<span>{suggestion.description}</span>
							</div>
						);
					})}
				</div>
			</div>
		)}
	</PlacesAutocomplete>
)
export default AddressSearch;