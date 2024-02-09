import { atom } from 'recoil';

const LanguageRecoil = atom<string>({
  key: 'Laugeage',
  default: 'Choose'
});

export { LanguageRecoil };
