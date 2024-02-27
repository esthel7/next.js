interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

async function getVideos(id: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}/videos`).then(
    res => res.json()
  );
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className="mx-auto mt-24 pb-24 grid grid-cols-video gap-5">
      {videos.map((video: Video) => (
        <iframe
          className="w-auto h-auto mx-auto max-w-full rounded-lg opacity-80 transition-opacity duration-200 ease-in-out bg-[url('../public/loading.gif')] bg-no-repeat bg-center hover:opacity-100"
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
