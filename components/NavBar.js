import Link from "next/link";//a태그 대신에 next.js에서 사용하는 이동 태그
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar(){
    const router=useRouter(); //Link에 css 등 속성 넣기 위함
    return (
        <nav className={styles.nav}> {/*css파일의 className이 nav인 것 적용*/}
            <Link href="/" className={router.pathname==="/" ? styles.active : ""}> {/*pathname이 /면 css파일의 색*/}
                {/* <a href="/">Home</a> */}
                Home {/*윗줄 대신 Link 태그 쓰기*/}
            </Link>
            <Link href="/about" className={router.pathname==="/about" ? styles.active : ""}> {/*pathname이 /about이면 css파일의 색*/}
                {/* <a href="/about">About</a> */}
                About {/*윗줄 대신 Link 태그 쓰기*/}
            </Link>
        </nav>
    );
}