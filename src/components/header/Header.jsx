import React from 'react';
import APIToggle from './APIToggle';
import styles from './header.css';

const Header = () => {
  return (
    <header>
      <p className={styles.container}>
        <h1>Character Explorer</h1>
        <p>Toggle Dark Mode</p>
      </p>
      <APIToggle />
    </header>
  );
};

export default Header;
