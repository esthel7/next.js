# ✨Next.js about Movie
```git
⚡ 2024.02 ~
```

## 🖥️ https://nextjs-movies-study.vercel.app
<br />

[📝Next.js 사용기](https://esthel.notion.site/Next-js-c816c074759445e6a06585ac113db11e)
<br />
### ✅`Next.js 14` 프레임워크를 사용하여 CSR과 SSR을 모두 경험
|React|Next.js|
|--|--|
|라이브러리로, 사용 주체가 개발자|프레임워크로 프레임워크 내의 규칙을 따르면서 사용|

### ✅`rendering`이란, 코드를 브라우저가 이해할 수 있는 HTML로 바꾸는 과정
|CSR|SSR|
|--|--|
|기존 `Create React App`은 `Client Side Application`으로 `client` 단에서 모든 렌더링작업을 수행|`Next.js`는 초기 화면의 UI가 `js`의 유무 상관없이 보여짐|
|빈 화면에서 `js`를 읽고 소스코드를 추가 ➡️ `js`엔진에 의해 추가|`HTML`이 이미 존재해 UI가 이미 빌드됨|
|새로고침 시 화면 깜빡임 존재 ➡️ `js` 기다리는 동안|모든 컴포넌트와 페이지들은 백엔드에서 렌더링 완료 후 `HTML`이 클라이언트에게 넘겨짐|

### ✅`SEO` 검색엔진최적화 작업
구글은 페이지의 `HTML`을 봐서 검색 엔진을 활성화 ➡️ `React`의 경우 빈 페이지가 보여질 수도 있음(`js` 다운로드 유무)
`Next.js`는 유용한 실제 데이터가 들어있는 `HTML`을 구성 ➡️ `js`가 활성화되지 않아도❗

### ✅사용성 개선
[이미지 최적화 기법](https://esthel.notion.site/Next-Image-c43410e0b6cd4f7180473aff0cd13d75?pvs=4)으로 평균 2.65초에서 0.034초로 시간 단축
- `Next/Image` 라이브러리 사용

[스켈레톤 이미지](https://esthel.notion.site/iframe-6d9c2ddf6b6949c88045bd3f87659c90?pvs=4)로 사용자 경험 향상 ➡️ 사용자에게 로딩 기간을 시각화하여 납득 가능한 상황 제작
<br /><br />

## 1️⃣ 영화 확인
<div align='center'>
  <img src='https://github.com/esthel7/next.js/assets/96722691/d69f149b-a6c4-4ecf-b9f5-71ba989e0036' />
  <img src='https://github.com/esthel7/next.js/assets/96722691/336903f5-60c4-4c91-aa57-96e409438d0e' />
</div>
<br />

## 2️⃣ 영화 검색
<div align='center'>
  <img src='https://github.com/esthel7/next.js/assets/96722691/cc719504-835b-46fc-a57f-79e95cf04a3d' />
  <img src='https://github.com/esthel7/next.js/assets/96722691/f11f642f-8840-4b95-a9fb-97bf323286fc' />
</div>
<br />

