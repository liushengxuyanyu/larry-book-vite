::: tip
异步的题都很重点，是八股文除外的一个技术分水岭，不要求有更高的算法能力，更多考察的是异步逻辑思维。
:::

## 实现 sleep 睡眠函数(重点)？

> sleep(1000) 意味着等待 1000 毫秒

::: details

```js
// 使用 promise来实现 sleep
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

sleep(1000).then(() => {
  // 这里写你的骚操作
});
```

:::

## 实现一个异步并发数限制的函数？

::: details

```js
/**
 * 关键点
 * 1. new promise 一经创建，立即执行
 * 2. 使用 Promise.resolve().then 可以把任务加到微任务队列，防止立即执行迭代方法
 * 3. 微任务处理过程中，产生的新的微任务，会在同一事件循环内，追加到微任务队列里
 * 4. 使用 race 在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
 * 5. 任务完成后，需要从 doingTasks 中移出
 */
function limit(count, array, iterateFunc) {
  const tasks = [];
  const doingTasks = [];
  let i = 0;
  const enqueue = () => {
    if (i === array.length) {
      return Promise.resolve();
    }
    const task = Promise.resolve().then(() => iterateFunc(array[i++]));
    tasks.push(task);
    const doing = task.then(() =>
      doingTasks.splice(doingTasks.indexOf(doing), 1)
    );
    doingTasks.push(doing);
    const res =
      doingTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve();
    return res.then(enqueue);
  };
  return enqueue().then(() => Promise.all(tasks));
}

// test
const timeout = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), i));
limit(2, [1000, 1000, 1000, 1000], timeout).then((res) => {
  console.log(res);
});
```

:::

## 实现异步串行、并行(重点)？

::: details

```js
// 字节面试题，实现一个异步加法
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 500);
}

// 解决方案
// 1. promisify
const promiseAdd = (a, b) =>
  new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

// 2. 串行处理
async function serialSum(...args) {
  return args.reduce(
    (task, now) => task.then((res) => promiseAdd(res, now)),
    Promise.resolve(0)
  );
}

// 3. 并行处理
async function parallelSum(...args) {
  if (args.length === 1) return args[0];
  const tasks = [];
  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0));
  }
  const results = await Promise.all(tasks);
  return parallelSum(...results);
}

// 测试
(async () => {
  console.log("Running...");
  const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);
  console.log(res1);
  const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);
  console.log(res2);
  console.log("Done");
})();
```

:::

## 实现有并行限制的 Promise 调度器?

<style>
  /* 这里是 details 块的样式重写  不要切换黑暗模式 */
  /* .custom-block {
    padding: 0 !important;
    font-size: 16px;
  } */
  .custom-block.details {
    background-color: #fff !important;
    padding: 0 !important;
    font-size: 16px;
  }
  .custom-block.details summary {
    color: #3451b2 !important;
  }
</style>
