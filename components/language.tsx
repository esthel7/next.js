'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { LanguageRecoil } from '@states';
import LanguageList from './languageList';

export default function Language() {
  const [language, setLanguage] = useRecoilState(LanguageRecoil);
  const [view, setView] = useState(false);
  const [select, setSelect] = useState(language);

  const onSubmit = () => setLanguage(select);

  return (
    <div className="searchContainer searchMiniContainer w-full relative">
      <span>언어</span>
      <div
        onClick={() => {
          setView(!view);
        }}
        className="border border-white rounded-md flex justify-between items-center cursor-pointer"
      >
        <p>{select}</p>
        <span>🔻</span>
      </div>

      {view ? <LanguageList setView={setView} setSelect={setSelect} /> : null}

      <input type="submit" name="submit" value="✅" onClick={onSubmit} />
    </div>
  );
}
