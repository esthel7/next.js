/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;//env파일에서 가져오기

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    //사용자가 /contact로 이동하면 /form으로 이동시킴(url 변화) -> redirect기능, 이동이 영구적이라면 해당 정보를 기억하지 않도록 false로 설정
    //:path는 변하지 않는 값 혹은 변수, :path*라고 하면 뒤의 나머지 내용까지 다 유지됨
    return [
      {
        source: "/contact/:path*",
        destination: "/form/:path*",
        permanent: false,
      },
      // {
      //   //redirect를 하나 더 만들고 싶다면 이런 식으로 작성하면 됨
      // }
    ];
  },

  //redirect와 달리 이동하지만 url이 변하지는 않음 -> API key 숨기기 적합
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ];
  }
};

module.exports = nextConfig;
