import {
  DateInput,
  Language,
  SearchResult,
  StarInput,
  TitleInput
} from '@components';

export const metadata = {
  title: 'Search'
};

export default function Search() {
  return (
    <>
      <div className="pb-12">
        <div className="searchContainer searchContainerBox">
          <span>제목</span>
          <div className="w-full flex flex-row justify-between items-center 100:block">
            <TitleInput />
          </div>
        </div>

        <div className="searchContainerBox flex justify-between gap-5 200:flex-wrap 125:flex-col">
          <div className="searchContainer searchMiniContainer">
            <span>해당 별점 이상</span>
            <StarInput />
          </div>

          <Language />

          <div className="searchContainer searchMiniContainer 200:basis-full">
            <span>이후 개봉</span>
            <DateInput />
          </div>
        </div>
      </div>

      <SearchResult />
    </>
  );
}
