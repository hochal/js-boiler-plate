# CommonJS

> Javascript를 범용적으로(브라우저 밖에서도) 사용하기 위해 필요한 명세(Specification)를 만드는 일을 한다.

- ES6 모듈이 나오기전에 JS 코드를 파일로 쪼개고 합치는 번들러가 필요하여 나온게 CommonJS랑 AMD다.
- Node.js는 commonJS 규격을 따라왔는데 13.2 버전부터는 ES6 모듈을 정식으로 지원해준다.

# ES6 Module
- IE와 일부 구버전의 브라우저에선 지원이 안됨
  - 이 경우 Webpack과 같은 모듈 번들러를 사용하여 해결
- script 태그에 `type="module"` 을 추가하거나 `.mjs` 확장자를 사용한다.

- Webpack은 ES6 모듈을 CommonJS를 사용하는 코드로 가공해서 준다.
  
```javascript 
// es6 방식의 import
import bold, {boldTagName} from './bold';

// webpack 
var _bold__WEBPACK_IMPORTED_MODULE_0__ = 
	__webpack_require__(“./src/bold.js”);
var _bold__WEBPACK_IMPORTED_MODULE_0___default = 
	__webpack_require__.n(_bold__WEBPACK_IMPORTED_MODULE_0__);
```

# 모듈 스코프
  - 전역 스코프
    - foo.js 와 bar.js를 모듈로 보지 않아 두 x는 모두 **전역 스코프**에 추가되며 `x='bar'`로 덮어씌워진다.
```javascript
<script src="foo.js"></script>
<script src="bar.js"></script>

// foo.js
var x = 'foo';

// bar.js
var x = 'bar';
```

  - 모듈 스코프
    - 각 모듈 내부에서 선언한 변수는 **모듈 스코프**를 가지며 모듈을 가져오지 않으면 모듈 내부의 변수에 접근할 수 없다.
```javascript
<script type="module" src="foo.js"></script>
<script type="module" src="bar.js"></script>

// foo.js
var x = 'foo';
console.log(window.x); // undefined

// bar.js
console.log(x); // ReferenceError: x is not defined
console.log(window.x); // undefined
```

# CommonJS와 ES6 Module의 문법

### CommonJS
```javascript
// time.js
const moment = require("moment")
exports.now = function () {
  return moment().format()
}

// time.test.js
const { now } = require("./time")
console.log("Now:", now())
```

### ES6 Module 파일 단위 적용
> .mjs는 ES6 Module을 포함하고 있는 파일을 의미한다.

1-1. 모듈 가져오기
```javascript
import { now } from "./time.mjs" // 경로 꼭 필요함
now();
```

1-2. 모듈 한꺼번에 가져오기
```javascript
import * as time from './time.mjs';
time.now()
```

1-3. 모듈을 다른 이름으로 가져오기
```javascript
import { now as n } from './time.mjs';
n();
```

2-1. 모듈이 한개만 선언되어 있는 걸 가져오기
```javascript
export default function now(){
	// ..
}
import now from './time.mjs';
```

2-2. 모듈이 여러개 선언되어 있는 걸 가져오기
```javascript
export function now(){
	// ..
}
import { now } from './time.mjs';
```

### ES6 Module 프로젝트 단위 적용
```javascript
// package.json
{
  // 생략
  "type": "module"
  // 생략
}

// time.test.js => 전체 파일에 module을 적용하면 mjs는 필요없다.
import { now } from "./time.js" 
now();
```

# 참조
- https://www.notion.so/commonJS-c576e2f372214da2a0be68d0984d50c3#eeb59cf77ecb4ed387e54c6fd02dd5a9
- https://www.notion.so/commonJS-c576e2f372214da2a0be68d0984d50c3#a4f08708795a4f2a9e0ebb65ce6c1420