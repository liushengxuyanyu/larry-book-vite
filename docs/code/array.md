## 实现 forEach 方法?

::: details

```js
Array.prototype.myForEach = function (callback, context = window) {
  // this=>arr
  let self = this,
    i = 0,
    len = self.length;

  for (; i < len; i++) {
    typeof callback == "function" && callback.call(context, self[i], i);
  }
};
```

:::

## 实现 filter 方法？

::: details

```js
Array.prototype.myFilter = function (callback, context = window) {
  let len = this.length;
  (newArr = []), (i = 0);

  for (; i < len; i++) {
    if (callback.apply(context, [this[i], i, this])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
```

:::

## 实现 find 方法？

::: details

```js
var users = [
  { id: 1, name: "张三" },
  { id: 2, name: "张三" },
  { id: 3, name: "张三" },
  { id: 4, name: "张三" },
];

Array.prototype.myFind = function (callback) {
  // var callback = function (item, index) { return item.id === 4 }
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      return this[i];
    }
  }
};

var ret = users.myFind(function (item, index) {
  return item.id === 2;
});

console.log(ret);
```

:::

## 实现 findIndex 方法？

::: details

```js
var users = [
  { id: 1, name: "张三" },
  { id: 2, name: "张三" },
  { id: 3, name: "张三" },
  { id: 4, name: "张三" },
];

Array.prototype.myFindIndex = function (callback) {
  // var callback = function (item, index) { return item.id === 4 }
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      // 这里返回
      return i;
    }
  }
};

var ret = users.myFind(function (item, index) {
  return item.id === 2;
});

console.log(ret);
```

:::

## 实现 map 方法(常考)？

::: details

```js
Array.prototype.myMap = function (callback, context) {
  // 转换类数组
  var arr = Array.prototype.slice.call(this), //由于是ES5所以就不用...展开符了
    mappedArr = [],
    i = 0;

  for (; i < arr.length; i++) {
    // 把当前值、索引、当前数组返回去。调用的时候传到函数参数中 [1,2,3,4].map((curr,index,arr))
    mappedArr.push(callback.call(context, arr[i], i, this));
  }
  return mappedArr;
};
```

:::

## 实现 reduce 方法(常考)?

::: details

```js
Array.prototype.myReduce = function (fn, initialValue) {
  var arr = Array.prototype.slice.call(this);
  var res, startIndex;

  res = initialValue ? initialValue : arr[0]; // 不传默认取数组第一项
  startIndex = initialValue ? 0 : 1;

  for (var i = startIndex; i < arr.length; i++) {
    // 把初始值、当前值、索引、当前数组返回去。调用的时候传到函数参数中 [1,2,3,4].reduce((initVal,curr,index,arr))
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};
```

:::

## 实现 every 方法？

::: details

```js
Array.prototype.myEvery = function (callback, context = window) {
  var len = this.length,
    flag = true,
    i = 0;

  for (; i < len; i++) {
    if (!callback.apply(context, [this[i], i, this])) {
      flag = false;
      break;
    }
  }
  return flag;
};
```

:::

## 实现 some 方法？

::: details

```js
Array.prototype.mySome = function (callback, context = window) {
  var len = this.length,
    flag = false,
    i = 0;

  for (; i < len; i++) {
    if (callback.apply(context, [this[i], i, this])) {
      flag = true;
      break;
    }
  }
  return flag;
};
```

:::

## 实现数组扁平化 flat 方法(常考)？

::: details

```js
// 递归
let result = [];
let fn = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(arr[i])) {
      fn(item);
    } else {
      result.push(item);
    }
  }
};
```

```js
// reduce
function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
let ary = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatten(ary));
```

:::

## 实现 Array.isArray 方法？

::: details

```js
Array.myIsArray = function (o) {
  // 调用顶级对象上的toString方法转成[object Array]形式
  return Object.prototype.toString.call(o) === "[object Array]";
};

console.log(Array.myIsArray([])); // true
```

:::

## 数组去重(常考)？

::: details

**<font color="red">1. 双层 for 循环: 时间复杂度是 O(n^2)</font>**

```js
function distinct(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
        len--;
        j--;
      }
    }
  }
  return arr;
}
```

**<font color="red">2. Array.filter() 加 indexOf/includes</font>**

```js
function distinct(a, b) {
  let arr = a.concat(b);
  return arr.filter((item, index) => {
    //return arr.indexOf(item) === index
    return arr.includes(item);
  });
}
```

**<font color="red">3. ES6 中的 Set 去重</font>**

```js
function distinct(array) {
  return Array.from(new Set(array));
}
```

**<font color="red">4. reduce 实现对象数组去重复</font>**

```js
var resources = [
  { name: "张三", age: "18" },
  { name: "张三", age: "19" },
  { name: "张三", age: "20" },
  { name: "李四", age: "19" },
  { name: "王五", age: "20" },
  { name: "赵六", age: "21" },
];
var temp = {};
resources = resources.reduce((prev, curv) => {
  // 如果临时对象中有这个名字，什么都不做
  if (temp[curv.name]) {
  } else {
    // 如果临时对象没有就把这个名字加进去，同时把当前的这个对象加入到prev中
    temp[curv.name] = true;
    prev.push(curv);
  }
  return prev;
}, []);
console.log("结果", resources);
```

:::

## 对象数组去重?

::: details

```js
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];
const result = responseList.reduce((acc, cur) => {
  const ids = acc.map((item) => item.id);
  return ids.includes(cur.id) ? acc : [...acc, cur];
}, []);
console.log(result); // -> [ { id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3} ]
```

:::

## 计算两个数组的交集？

::: details

```js
function union(arr1, arr2) {
  return arr1.filter((item) => {
    return arr2.indexOf(item) > -1;
  });
}
const a = [1, 2, 2, 1];
const b = [2, 3, 2];
console.log(union(a, b)); // [2, 2]
```

:::

## 数组求和、数组最大值(reduce)？

::: details
求和

```js
const arr = [12, 34, 23];
const sum = arr.reduce((total, num) => total + num);

// 设定初始值求和
const arr = [12, 34, 23];
const sum = arr.reduce((total, num) => total + num, 10); // 以10为初始值求和

// 对象数组求和
var result = [
  { subject: "math", score: 88 },
  { subject: "chinese", score: 95 },
  { subject: "english", score: 80 },
];
const sum = result.reduce((accumulator, cur) => accumulator + cur.score, 0);
const sum = result.reduce((accumulator, cur) => accumulator + cur.score, -10); // 总分扣除10分
```

最大值

```js
const a = [23, 123, 342, 12];
const max = a.reduce((pre, next) => (pre > cur ? pre : cur), 0); // 342
```

:::

## 数组转对象(reduce)？

::: details

```js
var streams = [
  { name: "技术", id: 1 },
  { name: "设计", id: 2 },
];
var obj = streams.reduce((accumulator, cur) => {
  accumulator[cur.id] = cur;
  return accumulator;
}, {});
```

:::

## 扁平化一个二维数组(reduce)?

::: details

```js
var arr = [
  [1, 2, 8],
  [3, 4, 9],
  [5, 6, 10],
];
var res = arr.reduce((x, y) => x.concat(y), []);
```

:::

## 数组去重(reduce)?

::: details

```js
var newArr = arr.reduce(function (prev, cur) {
  prev.indexOf(cur) === -1 && prev.push(cur);
  return prev;
}, []);
```

:::

## 对象数组去重(reduce)?

::: details

```js
const dedup = (data, getKey = () => {}) => {
  const dateMap = data.reduce((pre, cur) => {
    const key = getKey(cur);
    if (!pre[key]) {
      pre[key] = cur;
    }
    return pre;
  }, {});
  return Object.values(dateMap);
};
```

:::

## 求字符串中字母出现的次数(reduce)?

::: details

```js
const str = "sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha";

const res = str.split("").reduce((pre, next) => {
  pre[next] ? pre[next]++ : (pre[next] = 1);
  return pre;
}, {});
```

:::

## 实现 compose 函数(reduce)?

组合多个函数，从右到左，比如：`compose(f, g, h)` 最终得到这个结果 `(...args) => f(g(h(...args)))`
::: details

```js
function compose(...funs) {
  if (funs.length === 0) {
    return (arg) => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce(
    (a, b) =>
      (...arg) =>
        a(b(...arg))
  );
}
```

:::

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
