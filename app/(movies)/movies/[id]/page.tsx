import { Suspense } from 'react';
import { MovieInfo, MovieVideos } from '@components';
import { getMovie } from '@components/movie-info';

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Params) {
  const movie = await getMovie(id);
  return {
    title: movie.title
  };
}

export default async function MovieDetail({ params: { id } }: Params) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
