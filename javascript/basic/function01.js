
//function 함수

// 기본 함수 선언
function func01(){
    console.log('func01 호출');
}

func01();

const func02 = function(){
    console.log('func02 호출');
}

func02();

const func03 = function func303(){   // 함수를 선언해서 변수에 담았기 때문에 함수이름이 사용되지않음
    console.log('func03 호출');
}

func03();
//func303();


const func04 = ()=>{
    console.log('func04 호출');
}
func04();

// 함수 + 매개변수
function func05(a, b){
    console.log(a+" "+b);
}
func05(10, 20);
func05("A", "B");

const func06 = function(a,b){
    console.log(a+" "+b);
}
func06(20, 30);

const func07 = function function007(a,b){
    console.log(a+" "+b);
}
func07(40, 60);

const func08 = (x, y)=>{
    console.log(x+" "+y);
}
func08(100, 99);
