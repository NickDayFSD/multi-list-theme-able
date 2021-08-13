import React from 'react';
import { useCharacters } from '../../state/CharacterProvider';
import Character from './Character';
import styles from './character.css';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={character.name} className={styles.listing}>
      <Character {...character} />
    </li>
  ));

  return <ul className={styles.characterList}>{characterElements}</ul>;
};

export default CharacterList;
