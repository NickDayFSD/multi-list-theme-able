import React, { createContext, useContext, useEffect, useState } from 'react';
// import fetches
import { fetchAirbenderCharacters } from '../services/airbenderApi';
import { fetchHeyArnoldCharacters } from '../services/heyArnoldApi';
import { fetchRickAndMortyCharacters } from '../services/rickAndMortyApi';

const CharacterContext = createContext();

// eslint-disable-next-line react/prop-types
export const CharacterProvider = ({ children }) => {
  // set state here
  const [characters, setCharacters] = useState([]);
  const [selectedApi, setSelectedApi] = useState('lastAirbender');

  // list apis here
  const apiMap = {
    lastAirbender: fetchAirbenderCharacters,
    heyArnold: fetchHeyArnoldCharacters,
    rickAndMorty: fetchRickAndMortyCharacters,
  };

  // useEffect to activate map with selected api
  useEffect(() => {
    apiMap[selectedApi]().then(setCharacters);
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

export const useSetSelectedAPI = () => {
  const { setSelectedApi } = useContext(CharacterContext);
  return setSelectedApi;
};

export const useAvailableAPIs = () => {
  const { apiMap } = useContext(CharacterContext);
  console.log(apiMap);
  return Object.keys(apiMap);
};
