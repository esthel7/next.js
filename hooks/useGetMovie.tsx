export async function useGetMovies() {
  return () => fetch(process.env.NEXT_PUBLIC_API_URL).then(res => res.json());
}

export async function useGetAMovie(id: string) {
  return () =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`).then(res => res.json());
}
