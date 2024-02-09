'use client';

import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LanguageRecoil } from '@states';
import styles from '@styles/search.module.css';
import LanguageList from './languageList';

export default function Language() {
  const language = useRecoilValue(LanguageRecoil);
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
        <p>{language}</p>
        <span>🔻</span>
      </div>

      {view ? <LanguageList setView={setView} /> : null}

      <input type="submit" name="submit" value="✅" />
    </div>
  );
}
