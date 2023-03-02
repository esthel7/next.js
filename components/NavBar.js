import Link from "next/link"; // a태그 대신에 next.js에서 사용하는 이동 태그
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter(); // Link에 css 등 속성 넣기 위함

    return (
        <nav>
            <img src="/vercel.svg" />
            <div className={router.pathname === "/about" ? "active" : ""}>
                {router.pathname}
                <Link href="/">
                    {/* <a href="/">Home</a> */}
                    Home {/* 윗줄 대신 Link 태그 쓰기 */}
                </Link>
                <Link href="/about">
                    {/* <a href="/about">About</a> */}
                    About {/* 윗줄 대신 Link 태그 쓰기 */}
                </Link>
            </div>

            {/* style속성 주는 nextJS만의 방법, 내부 태그에는 적용 안되고 명시한 태그에만 적용됨 */}
            <style jsx>{`
                nav{
                    display:flex;
                    gap:10px;
                    flex-direction:column;
                    align-items:center;
                    padding-top:20px;
                    padding-bottom:10px;
                    box-shadow:rgba(50,50,93,0.25) 0px 50px 100px -20px, 
                        rgba(0,0,0,0.3) 0px 30px 60px -30px;
                }
                img{
                    max-width:100px;
                    margin-bottom:5px;
                }
                .active{
                    color:tomato;
                }
                nav div {
                    display:flex;
                    gap:10px;
                }
            `}</style>

        </nav>
    );
}
