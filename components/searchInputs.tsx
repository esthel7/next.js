'use client';

import { KeyboardEvent, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { DateRecoil, StarRecoil, TitleRecoil } from '@states';

export function TitleInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useRecoilState(TitleRecoil);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = title;
  }, []);

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
  const [star, setStar] = useRecoilState(StarRecoil);

  useEffect(() => {
    if (inputRef.current && star !== 0) inputRef.current.value = String(star);
  }, []);

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
  const [date, setDate] = useRecoilState(DateRecoil);

  useEffect(() => {
    if (inputRef.current && date !== '') inputRef.current.value = date;
  }, []);

  const onSubmit = () => setDate(inputRef.current.value);

  return (
    <>
      <input ref={inputRef} type="date" name="개봉" />
      <input type="submit" name="submit" value="✅" onClick={onSubmit} />
    </>
  );
}
