
// 함수 리턴
function sum1(){
    return 100;
}

console.log(sum1());
let n = 20+sum1();
console.log(n);

const sum2 = function(a, b){
    return a+b;
}
console.log(sum2(10,20));

const sum3 = function sum333(a, b){
    return a+b;
}
console.log(sum3(80,20));

const sum4 = (a, b)=>{
    return a+b;
}
console.log(sum4(100,200));

const sum5 = (a,b)=> a+b;   // 화살표 뒤 코드를 바로 return
console.log(sum5(15,15));

const sum6 = ()=>1+2+3+4+5;

// const sum6 = ()=>{
//   return 1+2+3+4+5;
//}
console.log(sum6());


function func(){
    let x = 10;
}

//console.log(x); x는 함수 스코프에 선언됨

if(true){
    let x = 20;
}

{
    let x = 30;
}
//console.log(x); 인식안됨

// console.log(q);
// let q = 30;

//var w; 호이스팅됨(선언부만 위로 올라감)
console.log(w);
var w = 30; 

r = 3000;
var r;  // 호이스팅
console.log(r);

check();
function check(){ // 호이스팅
    console.log('check');
}

// let name = "이름";
// let name = "내이름";

var r = 5000; // 이미 선언된 변수인데, 다시 선언하면서 기존값 덮어쓰기됨
console.log(r);
/*          var는 호이스팅 때문에 헷갈릴 수 있어서 let, const를 사용함             */


function welcome(){
    console.log("환영합니다");
    //
    //
}

// 즉시 실행 함수
( function(){
    console.log('일회용 함수 출력');
} )();