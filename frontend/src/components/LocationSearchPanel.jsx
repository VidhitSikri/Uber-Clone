import React from 'react';

const LocationSearchPanel = (props) => {
  return (
    <div className='flex flex-col gap-5'>
      {props.suggestions && props.suggestions.length > 0 ? (
        props.suggestions.map((suggestion, index) => (
          <div key={index} onClick={() => props.onSelectSuggestion(suggestion)} className='flex border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-start gap-5'>
            <h2><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{suggestion.description}</h4>
          </div>
        ))
      ) : (
        <div className="p-3 text-gray-500">No suggestions</div>
      )}
    </div>
  );
}

export default LocationSearchPanel;
