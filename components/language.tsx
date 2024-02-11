'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { LanguageRecoil } from '@states';
import LanguageList from './languageList';

export default function Language({ styles }: { styles: Array<string> }) {
  const [language, setLanguage] = useRecoilState(LanguageRecoil);
  const [view, setView] = useState(false);
  const [select, setSelect] = useState(language);

  const onSubmit = () => setLanguage(select);

  return (
    <div className={styles.join(' ')}>
      <span>언어</span>
      <div
        onClick={() => {
          setView(!view);
        }}
      >
        <p>{select}</p>
        <span>🔻</span>
      </div>

      {view ? <LanguageList setView={setView} setSelect={setSelect} /> : null}

      <input type="submit" name="submit" value="✅" onClick={onSubmit} />
    </div>
  );
}
