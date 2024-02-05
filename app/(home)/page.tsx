import { API_URL } from '@app/constants';
import { Movie } from '@components';
import styles from '@styles/home.module.css';

export const metadata = {
  title: 'Home'
};

async function getMovies() {
  return fetch(API_URL).then(response => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map(movie => (
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
