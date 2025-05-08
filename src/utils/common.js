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

export {
    debounce
}

// // 使用示例
// function myFunction() {
//     console.log('函数被调用了');
// }

// const debouncedFunction = debounce(myFunction, 300);

// // 模拟频繁触发
// window.addEventListener('resize', debouncedFunction);
