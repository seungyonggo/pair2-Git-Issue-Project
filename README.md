💚 2조 git issue 프로젝트

### 1조 2페어의 GIT ISSUE 토이 프로젝트 레퍼지토리입니다.

## ❇️ 프로젝트 소개

😸 issueItem, api, filter 기능 구현한 프로젝트

## ❇️ 프로젝트 개요

😸 git.api를 가져와서 issue를 보여주고 필터 기능으로 업데이트, 댓글, 생성 순으로 10개, 20개, 50개의 issue 정렬한 게시판 프로젝트

## ❇️ 베포링크

### Vercel
https://pair2-git-issue-project-git-main-pair2.vercel.app/

### Nettlify
https://cosmic-salmiakki-9852fa.netlify.app/

## ❇️ 작업 기간

#### 2023/06/13 ~ 2023/06/18

## ❇️ 와이어프레임
![PC프레임](https://github.com/seungyonggo/JSdeepdive/assets/123628457/a602fc0b-a370-4e83-bf78-017297e578c2)
![모바일프레임](https://github.com/seungyonggo/JSdeepdive/assets/123628457/57d9b4c3-dd4d-43dd-9eac-7e68d2db0863)



## ❇️ 진행 팀원 소개
<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="https://github.com/seungyonggo">❄️ 고승용</a></td>
    <td><a href="https://github.com/GrayHound0801">🦊 심재원</a></td>
    <td><a href="https://github.com/ooherin">🐬 오혜린</td>
  </tr>
</table>

## ❇️ 역할 분담

- 1순위
  레이아웃 디자인 / 혜린<br>
  api 가져오기 / 재원, 혜린<br>
  axios로 토큰가져오기 / 재원, 혜린<br>
  rtk로 getIssue함수 실행하기 / 승용, 혜린<br>


- 2순위
  페이지네이션 / 재원<br>
  필터기능 / 승용<br>
  로딩페이지 / 승용<br>
  디테일페이지 / 재원<br>
  반응형 / 승용<br>

- 3순위
  전역상태관리
  
## ❇️ Main UI
![MainPage](https://github.com/seungyonggo/JSdeepdive/assets/123628457/bbee559d-efb2-465c-872e-27d04f1859c2)

## ❇️ 배포 링크 및 시연 영상

### 필터 기능 구현
- 업데이트 순
![업데이트](https://github.com/seungyonggo/JSdeepdive/assets/123628457/b25721d2-d35c-49fa-9d32-81ac807b8c66)

- 댓글 수
![댓글순](https://github.com/seungyonggo/JSdeepdive/assets/123628457/eff309b7-456f-47af-84ae-75ed2381317d)

- 생성 순
![생성순](https://github.com/seungyonggo/JSdeepdive/assets/123628457/a85ed28b-6719-4d5f-844e-67e8c8d2dd3c)

- 10개
![10개](https://github.com/seungyonggo/JSdeepdive/assets/123628457/b3d1aedd-dee3-4ec2-85e0-6e64323eeaae)

- 20개
![20개](https://github.com/seungyonggo/JSdeepdive/assets/123628457/ad7551da-67fe-498d-8bca-962834f601a9)

- 50개
![50개](https://github.com/seungyonggo/JSdeepdive/assets/123628457/59964424-999d-44df-a218-d4541fabebbd)

### 로딩페이지 구현
![로딩페이지](https://github.com/seungyonggo/JSdeepdive/assets/123628457/21013ba1-fe2d-44cf-8c50-d819aff17176)

### 페이지네이션 구현
![페이지네이션 11~20포함](https://github.com/seungyonggo/js-code-festival/assets/123628457/aefc829a-55ce-4adc-9120-bb3ddb173eb3)

### 뒤로가기 구현

-페이지네이션 뒤로가기

![페이지네이션 20](https://github.com/seungyonggo/js-code-festival/assets/123628457/07b3a0f9-5bbb-46a4-be33-553c4b2f317c)

-필터 뒤로가기

![필터 뒤로가기](https://github.com/seungyonggo/JSdeepdive/assets/123628457/776cc664-2a7d-466f-ab92-2c9bf117b883)

### 디테일페이지 구현
![디테일페이지](https://github.com/seungyonggo/JSdeepdive/assets/123628457/25e27bb1-a68e-4b29-88ef-54862e96f0b2)

### 반응형 구현
![미디어쿼리](https://github.com/seungyonggo/JSdeepdive/assets/123628457/bfd0e988-4441-4df0-b4ab-b1d367018c0b)

## ❇️ 폴더 구조
```
├─apis
│  └─core.js
│  └─MainApi.js
├─components
│  └─Layout
│    └─Header.js
│    └─index.js
│    └─TopButton
├─pages
│  └─main
│      └─components
│        └─ItemList.js
│        └─OneItem.js
│        └─PageDetail.js
│        └─Pagination.js
│    └─index.js
├─reducer
│  └─index.js
│  └─issue.js
├─routes
│  └─routing.js
└─store
│  └─Store.js
```

## ❇️ 사용한 기술 스택 및 라이브러리
```
초기셋팅
-eslint
-husky
-styled-components

사용 라이브러리
- husky, prettier, eslint
- rtk, redux-logger
- axios
- react-router-dom
- styled-components
```
## ❇️ 문서화
스프린트
<a href="https://www.notion.so/3-github-issue-api-2-835d872ae612416dbf7e11d55fb070b1?pvs=4">💚 Pair2 Notion</a>

데일리 스크럼
<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="https://equatorial-rhythm-d75.notion.site/c685ec6512e649b4a1bf9335e16c74e0">❄️ 고승용</a></td>
    <td><a href="https://equatorial-rhythm-d75.notion.site/150ed2963c234b09a0bfe2750beb59d9">🦊 심재원</a></td>
    <td><a href="https://www.notion.so/3ce9a38795ee42b0a229e32b63122d9b">🐬 오혜린</td>
  </tr>
</table>

## ❇️ 회의 내용
### 6/13
  간단한 와이어 프레임 회의<br>
  husky, prettier, eslint 생성<br>
  Main UI, axios, rtk 생성<br>

### 6/14
  상준님이 나가셔서 혜린님 페어 1팀으로 이동<br>
  재원님이랑 승용님 같이 페이지네이션 개발 시작(살짝 멘붕)

### 6/15
  필터를 승용님이 맡고 페이지네이션 재원님이 완성하기로함<br>
  필터로 issue갯수 구현 완료<br>

### 6/16
  승용님이 필터 업데이트, 댓글, 생성순 기능 구현 완료<br>
  재원님이 페이지네이션 > 버튼 누르면 11~20번 페이지로 이동 가능<br>

### 6/17
  승용님이 로딩페이지 구현 완료, mediaquery 기능 구현 완료<br>
  재원님이 디테일 페이지 구현 완료<br>

### 6/18
  README 작성 완료<br>
  전역상태관리 <br>
  배포하기 완료!
