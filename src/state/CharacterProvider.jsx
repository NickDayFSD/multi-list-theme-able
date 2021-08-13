import React, { createContext, useContext, useEffect, useState } from 'react';
// import fetches

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  // set state here
  const [characters, setCharacters] = useState([]);
  const [selectedApi, setSelectedApi] = useState('lastAirbender');

  // map through api here
  const apiMap = {};

  // useEffect to activate map with selected api
  useEffect(() => {
    apiMap[selectedApi]().CharacterContext(setCharacters);
  }, [selectedApi]);

  // return jsx
  return (
    <CharacterContext.Provider value={{ characters, setSelectedApi, apiMap }}>
      {children}
    </CharacterContext.Provider>
  );
};

// custom hooks (characters, selectedApi, apiMap) for labeling and clarity
export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(CharacterContext);
  return setSelectedApi;
};

export const useAvailableAPIs = () => {
  const { apiMap } = useContext(CharacterContext);
  return Object.keys(apiMap);
};
