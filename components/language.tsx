'use client';

import { useState } from 'react';
import styles from '@styles/search.module.css';
import LanguageList from './languageList';

export default function Language() {
  const [view, setView] = useState(false);

  return (
    <div
      className={`${styles.container} ${styles.miniContainer} ${styles.select}`}
    >
      <span>언어</span>
      <div
        onClick={() => {
          setView(!view);
        }}
      >
        <p>en</p>
        <span>🔻</span>
      </div>
      {view ? <LanguageList /> : null}
      <input type="submit" name="submit" value="✅" />
    </div>
  );
}
