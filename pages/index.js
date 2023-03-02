import Header from "../components/ChangeHead.js";
import Link from "next/link"; // a태그 대신에 next.js에서 사용하는 이동 태그
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const API_KEY = "b94bd778a4fd12c141cb3cc19e9191a4";

export default function Home({ results }) { // localhost:30000/ 의 기본 홈페이지 담당(index.js)
    // {results}는 getServerSideProps 함수의 반환값
    const [counter, setCounter] = useState(0);
    const router = useRouter();

    const onClick = (id, title) => {
        // router.push(`/movies/${id}`); // 해당 위치로 이동 -> Link 대신 사용 가능
        router.push({
            pathname: `/movies/${title}/${id}`,
            // query: { // url 뒤 query로 같이 전송 가능 ex. ?title=~~
            //     title, // title: title 과 동일
            // }
        },
            // `/movies/${id}` // 브라우저에는 이 url로 보이게하기
        );
    };

    return (
        <>
            <div className="container">
                <Header title="Home" />
                <h1>Hello {counter}</h1>
                <button onClick={() => setCounter(prev => prev + 1)}>+</button>

                {results?.map(movie => ( // results뒤에 ?붙이면 results가 정의돼있다면 실행, 아니면 실행 x
                    <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                        {/* <Link href={`/movies/${movie.original_title}/${movie.id}`} key={movie.id}> -> onClick함수 대신 사용 가능 */}
                        <div className="movie">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <h4>{movie.original_title}</h4>
                        </div>
                        {/* </Link> */}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .container{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie{
                    cursor: pointer;
                }
                .movie img{
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
                }
                .movie:hover img{
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4{
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </>
    );
}

// 서버에서 돌아가는 함수 -> 백에서 다 처리할 동안 user에게 안보임
export async function getServerSideProps() {// 함수 이름 변경 x 무조건 이 이름
    // 이 함수로 로딩화면 필요x 로딩될 동안 아무 화면 없음 로딩창 필요하면 serverside 사용x -> serverside rendering, js 비활성화여도 동작

    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json(); // 서버이므로 전체 주소로 작성

    return {
        props: {
            results,
        }
    };
}
