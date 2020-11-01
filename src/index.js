import sayHello from './sayHello'

if (module.hot) { 
    module.hot.accept()
}
console.log(sayHello())
