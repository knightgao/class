// vue2 / vue3
// Object.defineProperty()
// ES6 Reflect and ES6 Proxy
// 反射 代理

let product = {price:5,quantity:2};
console.log('quantity is '+product.quantity);
console.log('quantity is '+product['quantity']);
console.log('quantity is '+ Reflect.get(product,'quantity'));



