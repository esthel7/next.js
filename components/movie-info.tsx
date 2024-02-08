import { useGetAMovie } from '@hooks';
import styles from '@styles/movie-info.module.css';

export default async function MovieInfo({ id }: { id: string }) {
  const getAMovie = await useGetAMovie(id);
  const movie = await getAMovie();
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
