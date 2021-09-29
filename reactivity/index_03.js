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



console.log(`total us ${total}`);