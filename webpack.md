# Webpack
> 의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러
>
> <br>
> 모듈?
>
> 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다.
> 
> 번들러?
>
> 의존성이 있는 모듈 코드를 하나 또는 여러개의 파일로 만들어주는 도구

<br>

### 번들러의 종류
- RquireJS
- Browserify
- Rollup
- Parcel
- Webpack

### Webpack의 특징
- 가장 널리 쓰이며 안정적이다.
- Javascript, CSS, Image 등의 리소스 모두 의존성을 관리한다.
- lint, 특정 언어 전처리, 소스 minify/uglify 등의 과정들을 자동화해주는 Task Runner의 기능을 포함하고 있다.
- 개발옵션
  - live-reloading
  - HMR (Hot Module Replacement)
- 다양한 로더와 로더들간에 체이닝 
- Code Spliting
- Source map
  - transfile 또는 minify/uglify 된 코드를 실제 코드와 대응시켜주는 기술
  - webpack 설정의 dev-tools에 옵션을 줘서 설정할 수 있다.
    - https://webpack.js.org/configuration/devtool/
  - 표준 스펙은 아니지만 대부분의 최신 브라우저에서 지원한다. (IE는 11부터 지원)
- 기타 등등..

### Webpack 설정

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 설정이 추가된 객체를 모듈로 내보낸다.
module.exports = {
	entry: './src/index.js',                 // 모듈간의 의존성 관계도를 만드는 시작점
	output: {
		path: path.resolve(__dirname, 'dist'), // 번들 파일 위치 (path.resolve : 절대경로 사용)
		filename: 'bundle.js'                  // 번들 파일명
	}, 
	module: {
		rules: [                               // loaders
			{
				test: /\.css$/,      
				use: 'css-loader'                  // npm install --save-dev css-loader
			}
		]
	},
	plugins: [
	  new HtmlWebpackPlugin(),               // html 파일 생성하고 <script>태그로 번들링된 모든 파일을 html에 삽입해준다.
	  new CleanWebpackPlugin(['dist'])       // 번들이 시작되기전 빌드 폴더 같은 특정 폴더를 지워준다.
	]
}
```

1. loaders
  - webpack은 기본적으로 js 타입의 파일만 인식하는데, loader를 사용해서 js 타입이 아닌 파일들을 모듈로 변환하여 webpack이 인식할 수 있도록 해주는 도구
  - 지원하는 타입 목록
    - es6의 import
    - commonJS의 require
    - AMD의 define, require
    - css/sass/less의 @import
    - 스타일시트의 url()
    - html의 <img src="">
  - module.rules
    - 사용하려는 loader의 규칙을 정의
    - use : loader 이름
      - 여러개를 chaning하여 사용하는 경우 array 형태로 값을 주면 된다.
      - array형태로 준 경우 뒤에서부터 순서대로 loader가 실행된다.
    - test: loader를 적용하려는 파일 확장자를 정규식 형태로 지정
    - 예시
      - bable, eslint를 chaining하면 eslint로 정적 분석이 끝난 뒤 bable이 변환한다.
      - css loader, style loader를 chaining하면 css loader가 모듈의 id 값을 클래스 이름에 붙여서 unique한 클래스명을 만들어주고, 그 다음 style loader가 css loader를 거친 css 정보를 받아서 style 태그로 만들고 dom에 붙인다.
2. plugins
  - loader로 모듈 변환하는 것 외에 더 다양한 기능들을 제공해주는 도구
    - 번들 최적화, assets 관리 등
  - plugin 인스턴스를 new 연산자로 생성하여 plugins 옵션에 추가하는 방식
3. mode
  - 배포할 때와 개발할 때 옵션을 별도로 지정할 수 있다.
```javascript
// webpack.dev.config.js
module.exports = {
  mode: 'development',
  ...
};

// webpack.config.js
module.exports = {
  mode: 'production',
  ...
};

// 스크립트 수정
module.exports = {
	"scripts": {
	  "bundle": "webpack --watch --config webpack.dev.config.js",
	  "production": "webpack" // webpack.config.js 기본 실행
	},
	...
}
```

### 참조
- [https://perfectacle.github.io/2016/11/14/Webpack-devtool-option-Performance/](https://perfectacle.github.io/2016/11/14/Webpack-devtool-option-Performance/)
- [https://webpack.js.org/configuration/devtool/](https://webpack.js.org/configuration/devtool/)
- [https://medium.com/@ljs0705/spa-single-page-app-에서-webpack을-사용하는-이유-ce7d3f82fe9](https://medium.com/@ljs0705/spa-single-page-app-%EC%97%90%EC%84%9C-webpack%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-ce7d3f82fe9)
- [https://wormwlrm.github.io/2020/08/12/History-of-JavaScript-Modules-and-Bundlers.html](https://wormwlrm.github.io/2020/08/12/History-of-JavaScript-Modules-and-Bundlers.html)
- [https://ui.toast.com/fe-guide/ko_BUNDLER/](https://ui.toast.com/fe-guide/ko_BUNDLER/)
- [https://godsenal.com/posts/Webpack-코드-스플리팅/](https://godsenal.com/posts/Webpack-%EC%BD%94%EB%93%9C-%EC%8A%A4%ED%94%8C%EB%A6%AC%ED%8C%85/)