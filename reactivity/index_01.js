let price = 5;
let quantity = 2;
let total = 0;

let effect = function (){
    total = price * quantity
}


// 收集
track();
// 副作用
effect();
// 触发
trigger();



console.log(`total is ${total}`);
price = 20;
console.log(`total us ${total}`);