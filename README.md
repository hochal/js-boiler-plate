# 자바스크립트 개발에 사용하는 도구 조사 및 개발 환경 세팅

다음에 대하여 조사한다.
  - ESlint
    - 정적분석기의 필요성
    - ESLint의 특징 및 설정 방법
- Webpack
  - 번들러의 역할과 종류
  - Webpack의 특징과 설정 방법
- commonJS / ES Module
  - 문법
- npm
  - package.json 각 프라퍼티의 용도 및 역할
  - Semantic Versioning의 개념 및 Major, Minor, Patch의 차이
  - ^(caret)과 ~(tilde)의 용도
  - 주요 CLI 명령어
  - script 사용법
  - import / require(..) 실행시에 경로를 찾아가는 우선순위 (npm 으로 설치한 패키지 사용하기)
  - SourceMap의 개념 및 Webpack 설정 방법

다음과 같은 환경을 구성한다.
- FE개발랩 eslint config로 Eslint를 셋팅한다.
  - [참고](https://ui.toast.com/fe-guide/ko_STATIC-ANALYSIS/)
- entry 포인트를 만들고 Webpack을 이용해 하나의 번들파일을 생성한다.
- npm run build 명령으로 번들파일을 생성할 수 있도록 설정한다.
- npm start 명령으로 파일이 바뀔때마다 번들파일이 자동으로 생성되도록 설정하고 dev-server를 실행시킨다.
- npm test 명령으로 파일이 바뀔때마다 TC가 자동으로 수행되도록 설정한다.
- 번들파일에 매칭되는 SourceMap 이 생성되도록 설정한다.
