// 存储每个响应式对象的依赖
const targetMap = new WeakMap();

// 收集依赖
function track(target,key) {
    // 获取
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    dep.add(effect)
}

// 触发
function trigeer(target,key){
    // 检查此对象是否是有依赖
    const depsMap = targetMap.get(target);
    // 不存在则直接返回
    if(!depsMap) {return }
    // 检查此属性是否有依赖
    let dep = depsMap.get(key)
    // 存在则遍历触发副作用函数
    if(dep){
        dep.forEach(effect => {effect()})
    }
}






let product = {price:5,quantity:2};
let total = 0;

let effect = ()=>{
    total = product.price * product.quantity
}

track(product,'quantity');
effect()


// total  = 10

product.quantity = 3

trigeer(product,'quantity');

// total  = 15


// targetMap
// 存储了 响应式对象属性 关联的 依赖

// depsMap
// 存储了 属性dep 的依赖

// dep
// 是一个副作用set的依赖