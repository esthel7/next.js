import {useState} from "react";
import NavBar from "../components/NavBar";//components 폴더 속에서 호출

export default function Home(){ //localhost:30000/ 의 기본 홈페이지 담당(index.js)
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <NavBar />
            <h1>Hello {counter}</h1>
            <button onClick={()=> setCounter(prev => prev+1)}>+</button>
        </div>
    );
}