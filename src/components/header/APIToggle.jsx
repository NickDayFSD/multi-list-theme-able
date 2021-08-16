import React from 'react';
import {
  useAvailableAPIs,
  useSetSelectedAPI,
} from '../../state/CharacterProvider';

const APIToggle = () => {
  const availableAPIs = useAvailableAPIs();
  const setSelectedAPI = useSetSelectedAPI();

  const handleChange = ({ target }) => setSelectedAPI(target.value);

  return (
    <div>
      {availableAPIs.map((api) => (
        <label key={api}>
          {api}
          <input type="radio" name="api" value={api} onChange={handleChange} />
        </label>
      ))}
    </div>
  );
};

export default APIToggle;
