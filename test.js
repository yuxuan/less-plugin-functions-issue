var fs = require('fs');
var less = require('less');
var lessInput = fs.readFileSync('./target.less', 'utf8');
var Funtions = require('less-plugin-functions');

less.render(lessInput, {plugins: [new Funtions({alwaysOverride: true})]}).then(
    ({css}) => console.log(css),
    (error) => console.log(error)
)