import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout'


const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);

//ES6 learning

//redux
import { createStore } from 'redux';
function reducer (state, action) {
	switch (action.type) {
		case '+':
		return state + action.payload
		case '-':
		return state - action.payload
		default: 
		return state
	}
}
let store = createStore(reducer, 9);
store.subscribe(()=>{
	console.log('state changed',store.getState());
})

store.dispatch({type: '-', payload: 2});
store.dispatch({type: '+', payload: 23});
store.dispatch({type: '-', payload: 12});
store.dispatch({type: '+', payload: 2});
store.dispatch({type: '-', payload: 2});
store.dispatch({type: '+', payload: 2});



//多参数
const constant = [false,null,"hello"];

let f = (x, ...y) => {
  // y is an Array
  return x * y.length;
  console.log(y.length);
}
console.log(...constant,constant);
console.log(f(2, 'red',true,null,23)); 


//spread
let fun1 = (...args) => {
  console.log(args);
  return args[0];
}

fun1();  
fun1(5); 
let x = fun1(5, 6, 7); 

console.log(x);

//看看函数表达式和申明有没有区别, 只有申明式可以写在调用后

function combo ( num, cal ) {
	console.log(cal(num));
}

combo (9, cal1)
//combo (10, cal)  //报错
let cal = x => x * x
function cal1 (x){ return x * x }

// 双箭头
let dd = a => b => a + b ;

console.log(dd);
console.log(dd(12)(2)); //14





