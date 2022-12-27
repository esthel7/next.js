import Header from "../components/ChangeHead.js";
import { useEffect, useState } from "react";

const API_KEY="b94bd778a4fd12c141cb3cc19e9191a4";

export default function Home(){ //localhost:30000/ 의 기본 홈페이지 담당(index.js)
    const [counter, setCounter] = useState(0);
    const [movies, setMovies]=useState([]);
    useEffect(()=>{
        (async()=>{//async 함수
            const {results} = await (
                await fetch(`/api/movies`) //fetch는 이동하기
                ).json();
            setMovies(results);
        })();
    },[]);//빈 배열을 넣어 처음 한번만 실행

    return (
        <>
            <div className="container">
                <Header title="Home" />
                <h1>Hello {counter}</h1>
                <button onClick={()=> setCounter(prev => prev+1)}>+</button>

                {!movies && <h4>Loading...</h4>} {/* movies가 없다면 */}
                {movies?.map(movie=> ( //movies뒤에 ?붙이면 movies가 정의돼있다면 실행, 아니면 실행 x
                    <div className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <h4>{movie.original_title}</h4>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .container{
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    padding:20px;
                    gap:20px;
                }
                .movie img{
                    max-width:100%;
                    border-radius:12px;
                    transition:transform 0.2s ease-in-out;
                    box-shadow:rgba(0,0,0,0.1) 0px 4px 12px;
                }
                .movie:hover img{
                    transform:scale(1.05) translateY(-10px);
                }
                .movie h4{
                    font-size:18px;
                    text-align:center;
                }
            `}</style>
        </>
    );
}