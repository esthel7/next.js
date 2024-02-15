import { useGetAMovie } from '@hooks';

export default async function MovieInfo({ id }: { id: string }) {
  const getAMovie = await useGetAMovie(id);
  const movie = await getAMovie();

  return (
    <div className="grid grid-cols-[1fr,2fr] mx-auto gap-12 200:gap-7 150:gap-2 150:grid-cols-[1fr,1fr]">
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="rounded-3xl max-w-70% place-self-center 300:max-w-90% 200:max-w-full 110:word-break"
      />

      <div className="text-right flex flex-col mt-5 gap-5 200:max-w-full 150:break-all 150:break-words">
        <h1 className="text-white text-4xl font-semibold 110:text-3xl">
          {movie.title}
        </h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p className="150:hidden">{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
