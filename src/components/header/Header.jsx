import React from 'react';
import APIToggle from './APIToggle';
import { useDark, useTheme } from '../../state/CharacterProvider';
import styles from './header.css';

const Header = () => {
  const { isDark, setIsDark } = useDark();

  const handleClick = () => {
    if (isDark === true) return setIsDark(false);
    return setIsDark(true);
  };

  return (
    <header>
      <p className={styles.container}>
        <h1>Character Explorer</h1>
        <button onClick={handleClick}>Theme Change!</button>
      </p>
      <APIToggle />
    </header>
  );
};

export default Header;
