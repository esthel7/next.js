import { API_URL } from '@app/constants';

export async function useGetMovies() {
  return () => fetch(API_URL).then(res => res.json());
}

export async function useGetAMovie(id: string) {
  return () => fetch(`${API_URL}/${id}`).then(res => res.json());
}
