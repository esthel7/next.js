'use client';

import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useGetMovies } from '@hooks';
import { Movie } from '@components';
import {
  DateRecoil,
  LanguageRecoil,
  MovieType,
  StarRecoil,
  TitleRecoil
} from '@states';
import homeStyles from '@styles/home.module.css';
import styles from '@styles/searchResult.module.css';

function afterDate(release_date: string, date: string) {
  const [rYear, rMonth, rDay] = release_date.split('-').map(Number);
  const [year, month, day] = date.split('-').map(Number);
  return rYear > year
    ? true
    : rYear == year
      ? rMonth > month
        ? true
        : rMonth == month
          ? rDay >= day
            ? true
            : false
          : false
      : false;
}

async function fetchMovie({ title, star, language, date, setMovies }) {
  const getMovies = await useGetMovies();
  const movies = await getMovies();
  const moviesArray = movies.filter(
    (movie: MovieType) =>
      (title !== ''
        ? movie.title.toLowerCase().includes(title.toLowerCase()) ||
          movie.original_title.toLowerCase().includes(title.toLowerCase())
        : true) &&
      (star !== 0 ? movie.vote_average >= star : true) &&
      (language !== 'Choose' ? movie.original_language === language : true) &&
      (date !== '' ? afterDate(movie.release_date, date) : true)
  );
  setMovies(moviesArray);
}

export default function SearchResult() {
  const [view, setView] = useState(false);
  const [movies, setMovies] = useState<Array<MovieType>>([]);
  const title = useRecoilValue(TitleRecoil);
  const star = useRecoilValue(StarRecoil);
  const language = useRecoilValue(LanguageRecoil);
  const date = useRecoilValue(DateRecoil);

  useEffect(() => {
    if (title !== '' || star !== 0 || language !== 'Choose' || date !== '') {
      fetchMovie({ title, star, language, date, setMovies }).then(() =>
        setView(true)
      );
    } else {
      setView(false);
    }
  }, [title, star, language, date]);

  return (
    <>
      {view ? (
        movies.length ? (
          <div className={homeStyles.container}>
            {movies.map((movie: MovieType) => (
              <Movie
                key={movie.id}
                title={movie.title}
                id={movie.id}
                poster_path={movie.poster_path}
              />
            ))}
          </div>
        ) : (
          <div className={styles.alert}>not exist</div>
        )
      ) : (
        <div className={styles.alert}>no search</div>
      )}
    </>
  );
}
