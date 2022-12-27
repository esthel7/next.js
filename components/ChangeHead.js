import Head from "next/head"; //헤더부분(홈페이지 로고) 사용하기 위함

export default function Header({title}){
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}