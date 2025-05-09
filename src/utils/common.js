function debounce(func, delay) {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}


const throttle = (func, delay) => {
    let last, deferTimer //闭包中的自由变量，表示上一次执行的时间，以及定时器
    return (args) => {
        // 干掉触发
        let now = +new Date();
        if (last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(() => {
                last = now
                func(args)
            }, delay)
        } else {
            //需要让执行过段时间再来到此处
            last = now  // 第一次时间
            func(args)  // 先执行一次
        }
    }
}


export {
    debounce,
    throttle
}

// // 使用示例
// function myFunction() {
//     console.log('函数被调用了');
// }

// const debouncedFunction = debounce(myFunction, 300);

// // 模拟频繁触发
// window.addEventListener('resize', debouncedFunction);
