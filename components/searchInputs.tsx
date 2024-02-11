'use client';

import { KeyboardEvent, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { DateRecoil, StarRecoil, TitleRecoil } from '@states';

export function TitleInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setTitle = useSetRecoilState(TitleRecoil);

  const onSubmit = () => setTitle(inputRef.current.value);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name="제목"
        placeholder="Type here..."
      />
      <input type="submit" name="submit" value="✅" onClick={onSubmit} />
    </>
  );
}

export function StarInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setStar = useSetRecoilState(StarRecoil);

  const validCheck = (event: KeyboardEvent<HTMLInputElement>) => {
    ['e', 'E', '+', '-', '.', '0'].includes(event.key) &&
      event.preventDefault();

    const eventElement = event.target as HTMLInputElement;
    eventElement.value =
      eventElement.value.length > 1 ? eventElement.value.slice(0, 1) : null;
  };

  const onSubmit = () => setStar(Number(inputRef.current.value));

  return (
    <>
      <input
        ref={inputRef}
        type="number"
        name="별점"
        placeholder="Number"
        onKeyDown={validCheck}
      />
      <input type="submit" name="submit" value="✅" onClick={onSubmit} />
    </>
  );
}

export function DateInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setDate = useSetRecoilState(DateRecoil);

  const onSubmit = () => setDate(inputRef.current.value);

  return (
    <>
      <input ref={inputRef} type="date" name="개봉" />
      <input type="submit" name="submit" value="✅" onClick={onSubmit} />
    </>
  );
}
