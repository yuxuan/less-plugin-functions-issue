To reproduce the issue, run:

```
yarn or npm install
node test.js
```

There would be errors like this:

```
{ TypeError: Cannot read property 'numerator' of undefined
    at Dimension.operate (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/dimension.js:68:33)
    at Operation.eval (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/operation.js:36:22)
    at /Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/call.js:87:58
    at Array.map (<anonymous>)
    at Call.eval (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/call.js:87:30)
    at Expression.eval (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/expression.js:42:41)
    at Value.eval (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/value.js:25:34)
    at Declaration.eval (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/declaration.js:64:37)
    at Ruleset.eval (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/ruleset.js:172:54)
    at Ruleset.eval (/Users/yuxuanhuoo/Projects/less-bug/node_modules/less/lib/less/tree/ruleset.js:172:54)
    ...
```