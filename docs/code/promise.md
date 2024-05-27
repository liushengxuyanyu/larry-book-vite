[手写 promise 参考文章](https://juejin.cn/post/6945319439772434469#heading-5)

## 一. promise 的核心逻辑实现

1. Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行
2. Promise 会有三种状态

- Pending 等待
- Fulfilled 完成
- Rejected 失败

3. 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
4. Promise 中使用 resolve 和 reject 两个函数来更改状态；
5. then 方法内部做但事情就是状态判断

- 如果状态是成功，调用成功回调函数
- 如果状态是失败，调用失败回调函数

```js
// MyPromise.js

// 先定义三个常量表示状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// 新建 MyPromise 类
class MyPromise {
  constructor(executor) {
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    executor(this.resolve, this.reject);
  }

  // 储存状态的变量，初始值是 pending
  status = PENDING;

  // resolve和reject为什么要用箭头函数？
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
    }
  };

  // 更改失败后的状态
  reject = (reason) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
    }
  };

  then(onFulfilled, onRejected) {
    // 判断状态
    if (this.status === FULFILLED) {
      // 调用成功回调，并且把值返回
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      // 调用失败回调，并且把原因返回
      onRejected(this.reason);
    }
  }
}

module.exports = MyPromise;
```

测试代码：

```js
// 新建 test.js

// 引入我们的 MyPromise.js
const MyPromise = require("./MyPromise");
const promise = new MyPromise((resolve, reject) => {
  resolve("success");
  reject("err");
});

promise.then(
  (value) => {
    console.log("resolve", value);
  },
  (reason) => {
    console.log("reject", reason);
  }
);

// 执行结果：resolve success
```

## 二. promise 加入异步逻辑

这版本之前，如果在 then 回调中 使用 setTimeout 等异步逻辑，会发现不会打印任何信息，主线程代码立即执行，setTimeout 是异步代码，then 会马上执行，这个时候判断 Promise 状态，状态是 Pending，然而之前并没有判断等待这个状态。

这里就需要我们处理一下 Pending 状态，我们改造一下之前的代码

```js
// MyPromise.js

// 先定义三个常量表示状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// 新建 MyPromise 类
class MyPromise {
  constructor(executor) {
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    executor(this.resolve, this.reject);
  }

  // 储存状态的变量，初始值是 pending
  status = PENDING;

  // resolve和reject为什么要用箭头函数？
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // [!code highlight] // 新增： 存储成功回调函数
  onFulfilledCallback = null;
  // [!code highlight] // 新增：存储失败回调函数
  onRejectedCallback = null;

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
      // [!code highlight] // ==== 新增 ====
      // [!code highlight] // 判断成功回调是否存在，如果存在就调用
      this.onFulfilledCallback && this.onFulfilledCallback(value);
    }
  };

  // 更改失败后的状态
  reject = (reason) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
      // [!code highlight] // ==== 新增 ====
      // [!code highlight] // 判断失败回调是否存在，如果存在就调用
      this.onRejectedCallback && this.onRejectedCallback(reason);
    }
  };

  then(onFulfilled, onRejected) {
    // 判断状态
    if (this.status === FULFILLED) {
      // 调用成功回调，并且把值返回
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      // 调用失败回调，并且把原因返回
      onRejected(this.reason);
    } else if (this.status === PENDING) {
      // [!code highlight] // ==== 新增 ====
      // [!code highlight] // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
      // [!code highlight] // 等到执行成功失败函数的时候再传递
      this.onFulfilledCallback = onFulfilled;
      this.onRejectedCallback = onRejected;
    }
  }
}

module.exports = MyPromise;
```

测试代码：

```js
// test.js

const MyPromise = require("./MyPromise");
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

promise.then(
  (value) => {
    console.log("resolve", value);
  },
  (reason) => {
    console.log("reject", reason);
  }
);

// 等待 2s 输出 resolve success
```
