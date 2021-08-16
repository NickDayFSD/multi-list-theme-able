import React from 'react';
import Header from '../header/Header';
import CharacterList from '../characters/CharacterList';
import { useDark } from '../../state/CharacterProvider';
import styles from './app.css';

export default function App() {
  const isDark = useDark();

  let theme = 'light';

  if (isDark === true) theme = 'dark';

  return (
    <body className={styles[theme]}>
      <Header />
      <CharacterList />
    </body>
  );
}
