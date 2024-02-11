import { atom } from 'recoil';

export interface MovieType {
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

export const TitleRecoil = atom<string>({
  key: 'Title',
  default: ''
});

export const StarRecoil = atom<number>({
  key: 'Star',
  default: 0
});

export const LanguageRecoil = atom<string>({
  key: 'Laugeage',
  default: 'Choose'
});

export const DateRecoil = atom<string>({
  key: 'Date',
  default: ''
});
