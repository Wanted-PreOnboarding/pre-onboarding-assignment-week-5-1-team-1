## 목차

[1. 데모 영상](#1-데모-영상)

[2. 실행 방법](#2-실행-방법)

[3. 과제 소개](#3-과제-소개)

[4. 팀원 소개](#4-팀원-소개)

[5. 구현 기능](#5-구현-기능)

[6. 개발 스택](#6-개발-스택)

[7. 폴더 구조](#7-폴더-구조)

[8. 캐시에 대해서](#8-캐시에-대해서)

## 1. 데모 영상

## 2. 실행 방법

```bash
# 설치 방법
> git clone https://github.com/wanted-fe-6/pre-onboarding-assignment-week-5-1-team-1.git
> cd pre-onboarding-assignment-week-5-1-team-1

# 실행 방법
> cd server
> npm install
> npm run start

> cd client
> npm install
> npm run start
```

## 3. 과제 소개

[검색창 구현 + 검색어 추천 기능](https://younuk.notion.site/ab401d7f6b684ff3a199dce1cf312bae)을 구현합니다.

[구현 기능](#5-구현-기능)은 로그인 기능과 계좌 목록과 상세 내용, 사용자 목록과 상세내용이며, 자세한 내용은 해당 텍스트를 클릭해 주세요.

## 4. 팀원 소개

| 이름                                          | 개발 내용                  |
| --------------------------------------------- | -------------------------- |
| [최홍규(팀장)](https://github.com/gomgun-lab) | API, 캐싱 구현             |
| [김정수](https://github.com/sunpl13)          | 기타                       |
| [강민규](https://github.com/kagrin97)         | 기능 및 이벤트 핸들러 구현 |
| [윤여건](https://github.com/kunnyCode)        | 기능 및 이벤트 핸들러 구현 |
| [류웅선](https://github.com/unsnruu)          | UI 구현                    |
| [백승전](https://github.com/BaikSeungJeon)    | API, 캐싱 구현             |

## 5. 구현 기능

✅ 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

- 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
- 검색어가 없을 시 “검색어 없음” 표출

✅ API 호출 최적화

- API 호출별로 로컬 캐싱 구현
  - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
  - [캐싱을 어떻게 기술했는지](#캐시를-어떻게-기술했는가)에 대한 내용 README에 기술
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
  - README에 [전략에 대한 설명](#캐시-전략) 기술
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

✅키보드만으로 추천 검색어들로 이동 가능하도록 구현

> ### 사용법
>
> 어떻게 사용할 수 있나요?

## 6. 개발 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>

</div>
  
## 7. 폴더 구조
<pre>

</pre>

## 8. 캐시에 대해서

### 캐시를 어떻게 기술했는가?

### 캐시 전략
