// localhost:3000/movies/~~ 로 가면 자동 호출 (파일이름으로 호출 []중요, 함수이름은 중요x, next.js 기능)
// 그냥 [params] 면 query 한 개만 받지만, ... 붙으면 여러개의 query 호출 가능
import { useRouter } from "next/router";
import Header from "../../components/ChangeHead";

export default function Detail({ params }) {
    const router = useRouter();
    const [title, id] = params || []; // params 가 있다면 지정(배열에 두개의 요소 존재)
    return (
        <div>
            {/* <h4>{router.query.title || "Loading..."}</h4> */}
            {/* router 값을 가져오기 때문에 동일 url이더라도 user가 그냥 입력한 url은 Loading 뜸
                정상적으로 도달한 user만이 router 객체값 존재 */}

            <Header title={title} />
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({ params: { params } }) {
    // params 속에 params 객체 존재, 속 객체 사용하기 -> params : {params : [~~~]}
    return {
        props: { params },
    };
}
