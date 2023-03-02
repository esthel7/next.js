// 무조건 _app.js 이어야만 함 nextJS는 index.js 랜더링되고 바로 _app.js 봄

import Layout from "../components/Layout"; // components 폴더 속에서 호출
import "../styles/globals.css"; // 원래 module.css 말고는 import 안되는데 _app.js에서만 됨

export default function App({ Component, pageProps }) {
    // component에 about.js, index.js 내용 들어감
    // pageProps는 상세 내용

    return (
        <>
            <Layout> {/* _app.js에 너무 많은 내용이 담기므로 Layout.js로 세분화작업 */}
                <Component {...pageProps} />
            </Layout>

            {/* style속성 주는 nextJS만의 방법, 내부 태그에는 적용 안되고 명시한 태그에만 적용됨, global 명시하면 어느 페이지에서든 적용 */}
            <style jsx global>{`
                a{
                    color:black;
                }
            `}</style>
        </>
    );
}
