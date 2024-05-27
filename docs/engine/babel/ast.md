[参考文章](https://juejin.cn/post/6844903798347939853#heading-0)

## AST 是什么？

抽象语法树 (Abstract Syntax Tree)，简称 AST，它是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

## AST 的作用？

<font color="blue">代码编译</font>

- Babel，将 ES6 JavaScript 转化为 ES5 JavaScript。

- TypeScript，将 TypeScript 转化为 JavaScript。

- Sass，将 Sass 转化为 CSS。

<font color="blue">代码加工</font>

- Prettier，代码美化，风格格式化。

- ESLint, 修复语法错误。

- uglifyJS，代码压缩，混淆。

- @vue/compiler-dom，可以将 Vue 文件代码拆分成 template、script、style 三种代码类型片段。

<font color="blue">代码分析</font>

- ESLint，代码语法检查。

- Webpack，代码模块打包分析。

## AST 如何生成？

两个步骤：

- **词法分析：** 将输入的源代码字符串，生成一系列词法单元 (Tokens)，这些词法单元包括数字，标点符号，运算符等，这些词法单元之间都是独立的。

- **语法分析：** 将词法分析出来的 Token 按照不同的语法结构如声明语句、赋值表达式等转化成有语法含义的抽象语法树结构。

```js
const iceman = "good boy";
```

`const iceman = 'good boy'; `上面这一段源代码字符串，先把它按照单词的构成规则分成一个个不能再细分的单词（Token），也就是 `const`、`iceman`、`=`、 `'good boy'`，这个过程是词法分析。之后把 Tokens 按照声明语句、赋值表达式的语法结构如进行递归组装，生成 AST 对象，这个过程是语法分析。

## 常见的编译器有哪些？

- **JS Parser：** esprima、 acorn、 espree、@babel/parser。

- **TS Parser：** typescript
