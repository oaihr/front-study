//operator 연산자

console.log(2 ** 4); // 2의 4제곱

let x = 10;
let y = 10;
let z = '10';

console.log(x>5);

// == (같다)    != (다르다)

// == (값이같다)    === (값과 타입이 같다)
console.log(x == y);    //true
console.log(x == z);    //true

console.log(x === y);   //true 
console.log(x === z);   //false : x와 z는 값은 같지만 자료형이 다름

console.log(x>5 && y>0);    //true
console.log(x==1 || y>=50); //false

// 형변환
//숫자 -> 문자
//문자 -> 숫자

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w);   //숫자와 문자열 결합 -> 문자열

//String()
//Number()

console.log(q + String(e));
console.log(q + Number(w));

console.log(Number("123.123"));

//조건문
if(q == 10){
    console.log("출력~~");
}

q == 10 && console.log("&&로 출력~~");  //출력됨
q == 20 && console.log("&&로 출력~~");  //출력안됨
