const depsMap = new Map();

function track(key){
    let dep = depsMap.get(key);
    if(!dep){
        depsMap.set(key,(dep = new Set()));
    }
    // dep set 收集
    dep.add(effect());
}

function trigeer(key){
    let dep = depsMap.get(key);
    if(dep){
        dep.forEach(
            effect=>{
                effect();
            }
        )
    }
}


let product = {price:5,quantity:2};
let total = 0;

let effect = ()=>{
    total = product.price * product.quantity
}

track('quantity');
effect()


// total  = 10

product.quantity = 3

trigeer('quantity');

// total  = 15
