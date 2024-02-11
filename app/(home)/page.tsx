import { useGetMovies } from '@hooks';
import { Movie } from '@components';
import { MovieType } from '@states';
import styles from '@styles/home.module.css';

export const metadata = {
  title: 'Home'
};

export default async function HomePage() {
  const getMovies = await useGetMovies();
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: MovieType) => (
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
