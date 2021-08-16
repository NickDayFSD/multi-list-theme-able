import React from 'react';
import Header from '../header/Header';
import CharacterList from '../characters/CharacterList';
import { useTheme } from '../../state/CharacterProvider';
import styles from './app.css';

export default function App() {
  const theme = useTheme();

  return (
    <body className={styles[theme]}>
      <Header />
      <CharacterList />
    </body>
  );
}
