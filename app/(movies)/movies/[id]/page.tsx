import { Suspense } from 'react';
import { useGetAMovie } from '@hooks';
import { MovieInfo, MovieVideos } from '@components';

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Params) {
  const getAMovie = await useGetAMovie(id);
  const movie = await getAMovie();
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
