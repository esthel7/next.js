import {
  DateInput,
  Language,
  SearchResult,
  StarInput,
  TitleInput
} from '@components';
import styles from '@styles/search.module.css';

export const metadata = {
  title: 'Search'
};

export default function Search() {
  return (
    <>
      <div className={styles.search}>
        <div
          className={`${styles.container} ${styles.containerBox} ${styles.titleContainer}`}
        >
          <span>제목</span>
          <div>
            <TitleInput />
          </div>
        </div>

        <div className={`${styles.containerBox} ${styles.containerGroup}`}>
          <div className={`${styles.container} ${styles.miniContainer}`}>
            <span>해당 별점 이상</span>
            <StarInput />
          </div>

          <Language
            styles={[styles.container, styles.miniContainer, styles.select]}
          />

          <div className={`${styles.container} ${styles.miniContainer}`}>
            <span>이후 개봉</span>
            <DateInput />
          </div>
        </div>
      </div>

      <SearchResult />
    </>
  );
}
