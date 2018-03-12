// require('./main.css');
// require('./main.scss');
// var sub = require('./sub');
// var $ = require('jquery');  //添加第三方库
// var moment = require('moment'); //添加第三方库
// var app = document.createElement('div');
// app.innerHTML = '<h1>Hello world zhangmengxi</h1>';
// app.appendChild(sub());
// document.body.appendChild(app);
// $('body').append('<p>look at me!now is ' + moment().format() + '</p>');



// ES6操作

import './main.css';
import './main.scss';
import generateText from './sub';
import $ from 'jquery';  //添加第三方库
import moment from 'moment'; //添加第三方库

let app=document.createElement('div');
const myPromise=Promise.resolve(42);
myPromise.then((number)=>{
    $('body').append('<p>promise result is'+number+'now is'+moment().format()+'</p>')
});
app.innerHTML = '<h1>Hello world it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());