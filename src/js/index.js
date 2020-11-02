import sayHello from './sayHello';
import styleCSS from '../css/sample.css';
import styleSCSS from '../css/sample.scss';

if (module.hot) {
  module.hot.accept();
}
console.log(sayHello());
