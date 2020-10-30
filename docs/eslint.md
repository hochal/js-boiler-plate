## 정적 분석
- 실제 실행 없이 프로그램을 분석하는 것

## 정적 분석을 써야하는 이유
- 코딩 컨벤션 검사를 자동화할 수 있다.
- 런타임 전에 문법 오류나 오타를 잡아낼 수 있다.

## 정적 분석 도구
- ESLint
- Prettier
    - code style과 style에 맞게 code formatting하는 기능 특화
- JSLint
- JSHint
- JSCS

## ESLint
- 가장 널리 사용되는 정적 분석 도구
- 규칙이나 formatter를 직접 커스터마이징 할 수 있음
    - e.g. Airbnb의 eslint, nhn toast의 eslint ...
- webpack 과 같은 번들러에 통합하여 개발 모드와 배포 모드에서 다르게 동작시킬 수 있다.

## ESLint 설정

```jsx
module.exports = {
	parser: '...',      // (1) 
  parserOptions: {      // (2)
    sourceType: 'module'
  },
  env: {                // (3)
    browser: true,
    es6: true,
    jasmine: true
  },
  extends: ['tui'],      // (4)
  rules: {               // (5)
    'indent': [2, 2, {SwitchCase: 1, ignoreComments: false, ImportDeclaration: 1}],
    'semi': 2
  },
  plugins: [...],        // (6)
};
```

1. parser
   - 기본 parser는 Espree다. 
   - parser interface를 따르는 npm package parser를 별도로 설정할 수 있다. (e.g. @typescript-eslint/parser)
2. parserOptions
   - 지원하려는 자바스크립트 언어 옵션
   - ecmaVersion : 5가 default이며 12까지 가능
   - sourceType : script가 default이며 프로젝트가 module 시스템을 따른다면 module로 설정
   - ecmaFeatures : 추가적인 언어 속성을 지정 (e.g. tsx, ts, jsx)
3. env
   - 코드가 실행되는 환경
4. extends
   - npm package를 설치해서 추가할 수 있다.
   - 미리 정해진 규칙 세트다. 이 규칙에 맞춰서 lint 하겠다는 뜻
5. rules
   - extends에서 설정한 규칙 세트에서 새로운 규칙으로 확장하거나 특정 규칙을 재정의할 수 있다.
6. plugins
   - lint에 사용될 수 있는 서드파티 플러그인이다.
   - extends에 설치한 플러그인이 제공하는 규칙세트를 설정할 수 있다.

```jsx
'plugins': ['prettier'],
'extends': ['plugin:prettier/recommended']
```

### 참조
- https://ui.toast.com/fe-guide/ko_STATIC-ANALYSIS/
- https://eslint.org/docs/user-guide/configuring#adding-shared-settings