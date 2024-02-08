import { Language } from '@components';
import styles from '@styles/search.module.css';

export const metadata = {
  title: 'Search'
};

export default function Search() {
  return (
    <div className={styles.search}>
      <div
        className={`${styles.container} ${styles.containerBox} ${styles.titleContainer}`}
      >
        <span>제목</span>
        <div>
          <input type="text" name="제목" placeholder="Type here..." />
          <input type="submit" name="submit" value="✅" />
        </div>
      </div>

      <div className={`${styles.containerBox} ${styles.containerGroup}`}>
        <div className={`${styles.container} ${styles.miniContainer}`}>
          <span>해당 별점 이상</span>
          <input type="number" name="별점" placeholder="Number" />
          <input type="submit" name="submit" value="✅" />
        </div>

        <Language />

        <div className={`${styles.container} ${styles.miniContainer}`}>
          <span>이후 개봉</span>
          <input type="date" name="개봉" />
          <input type="submit" name="submit" value="✅" />
        </div>
      </div>
    </div>
  );
}
