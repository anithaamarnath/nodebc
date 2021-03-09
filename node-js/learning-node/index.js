// const express = require('express');
// //const module = require('./my-module');
// console.log(express);

const getPrice = require('./math');
const price = getPrice(200);

console.log(price);