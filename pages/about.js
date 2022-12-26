import NavBar from "../components/NavBar";//components 폴더 속에서 호출

export default function Potato(){ //localhost:3000/about으로 가면 자동 호출 (파일이름으로 호출, 함수이름은 중요x, next.js 기능)
    return (
        <div>
            <NavBar />
            <h1>About</h1>
        </div>
    )
}