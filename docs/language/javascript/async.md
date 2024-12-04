::: tip
异步相关专题！！！ 面试重点都是！！！
https://juejin.cn/post/6844904004007247880#heading-67
:::

## 浏览器中的Event loop（重点看）？
参考链接：https://interview.poetries.top/docs/excellent-docs/3-JS%E6%A8%A1%E5%9D%97.html#_12-1-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84event-loop

## 谈谈 Promise？
> 面试重点，总结性的聊聊promise。概念、特点、常用方法、使用场景等

**<font color="blue">概念：</font>**

`Promise` 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大. 有了 `Promise` 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。

**<font color="blue">特点：</font>**

1. 有三种状态：`pending`（进行中）、`fulfilled`（已成功）和 `rejected`（已失败），只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。

**<font color="red">缺点：</font>**

1. 无法取消 promise，一旦创建无法中途取消。

2. 如果不设置回调函数，外部无法捕获其内部的错误。

3. 当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

基本用法：

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

Promise 新建后就会立即执行:

```js
let promise = new Promise(function (resolve, reject) {
  console.log("Promise");
  resolve();
});

promise.then(function () {
  console.log("resolved.");
});

console.log("Hi!");

// Promise
// Hi!
// resolved
```

**实现 promise A+ 规范，是面试重点。去参考手写代码里 promise A+ 实现**

**事件循环宏任务和微任务的执行顺序也是面试重点**

## promise小问题：调用resolve或reject会终结 Promise 的参数函数的执行吗？
**不会中断**
```js
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```

上面代码中，调用`resolve(1)`以后，后面的`console.log(2)`还是会执行，并且会首先打印出来。这是因为立即 `resolved` 的 `Promise` 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

一般来说，调用`resolve`或`reject`以后，`Promise` 的使命就完成了，后继操作应该放到`then`方法里面，而不应该直接写在`resolve`或`reject`的后面。所以，最好在它们前面加上`return`语句，这样就不会有意外。

```js
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
```

## promise小问题：实例的then、catch、finally方法？

## promise小问题：Promise.all、race、allSettled、any的区别？
简单总结：参数都是 `promise` 数组, 或者 具备`Iterator`接口，且返回的每个成员都是 `Promise` 实例, 可以转换为 `promise`的数组

- `Promise.all()`：`const p = Promise.all([p1, p2, p3]);` 参数实例**全部`fulfilled`**，返回`promise`结果才为 **fulfilled**（结果是一个数组），有一个 **rejected**，p的状态就为**rejected**

**<font color="red">全部成功 或 其中一个失败</font>**

- `Promise.race()`：`const p = Promise.race([p1, p2, p3]);` 任何一个`promise`实例**率先改变状态**，则结果p就跟着改变。

**<font color="red">其中一个率先改变状态（不管成功或失败）</font>**

- `Promise.allSettled()`： `const p = Promise.allSettled([p1, p2, p3]);` 所有 `Promise` 对象**都发生状态变更**（不管是`fulfilled`还是`rejected`），返回的 `Promise` 对象才会发生状态变更。

**<font color="red">全部都完成状态变更（不管成功或失败）</font>**

- `Promise.any()`: `const p = Promsie.any([p1, p2, p3]);` 只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

、**<font color="red">其中一个成功 或 全部失败</font>**

## Promise.resolve()方法?

[阮一峰 Promise.resolve()](https://es6.ruanyifeng.com/#docs/promise#Promise-resolve)

## Promise.reject()方法?

[阮一峰 Promise.reject()](https://es6.ruanyifeng.com/#docs/promise#Promise-reject)


## Promise.try() 方法？

[阮一峰 Promise.try()](https://es6.ruanyifeng.com/#docs/promise#Promise-try)

## async/await ?

[阮一峰 async](https://es6.ruanyifeng.com/#docs/async)

## async 函数返回值是什么？
返回一个 `promise` 对象

```js
async function f() {
  return 'hello world';
}

console.log(f()) // Promise {<fulfilled>: 'hello world'}
```

## async 函数中的异常，外部可以使用try catch捕获到么？
**不能**
```js
try {
  async function f() {
    throw new Error('错误')
  }
  f()
} catch(e) {
  console.log(e) // 捕获不到
}
```
使用 返回的 `promise`对象的 `catch`方法进行捕获
```js
async function f() {
  throw new Error('错误')
}
f().catch(e => {
  console.log(e)
})
```

## async 函数中的 所有await都会执行么？

任何一个`await`语句后面的 `Promise` 对象变为`reject`状态，那么整个`async`函数都会中断执行。

```js
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
```
如果想失败后 继续执行，需要捕获异常。
```js
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f().then(v => console.log(v))
// hello world
// 或者
async function f() {
  await Promise.reject('出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

f().then(v => console.log(v))
// 出错了
// hello world
```

## async函数内多个await是 串行 还是 并行？
**串行**

getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar

```js
let foo = await getFoo();
let bar = await getBar();
```

可以改成如下写法：
```js
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```

## async/await 的运行机制？

https://interview.poetries.top/docs/excellent-docs/3-JS%E6%A8%A1%E5%9D%97.html#_12-6-async%E5%8E%9F%E7%90%86
