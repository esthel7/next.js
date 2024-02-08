import { useGetMovies } from '@hooks';
import { Movie } from '@components';
import styles from '@styles/home.module.css';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const metadata = {
  title: 'Home'
};

export default async function HomePage() {
  const getMovies = await useGetMovies();
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: Movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
