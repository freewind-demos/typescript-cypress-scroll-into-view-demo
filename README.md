TypeScript Cypress Get Nested Element Demo
==========================================

注意：
- 不能将多个`.get`串在一起，它们并不会依次在前者的基础上找，而是从全局找，所以只有最后一个有效
- 可以使用`.get`再加上`.find`，后者会在前者的基本上找
- 如果需要利用一个`.get`，目前推荐的做法是使用`as()`给它一个alias，后面通过该alias引用
  - 这个做法不是typesafe的，但我们没有更好的做法
  - 尝试使用cypress-promise，但它推荐只用来取“值”，而不要取Chainable。达不到目的，同时还有警告

```
npm install
npm run server

npm run test:open
npm run test:run
```
