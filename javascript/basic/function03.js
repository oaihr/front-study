
// 콜백함수: 특정 작업이 완료된 후에 실행되도록 설계된 함수

// js에서는  함수를 변수에 저장 가능
//          함수를 매개변수, return에 활용 가능

function func01(a){
    console.log(a);
}
func01('매개변수');

function func02(f){
    console.log("func02");
    f();
}

const temp = ()=>{
    console.log("temp 함수 호출");
}

func02(temp);   // 함수 temp를 매개변수로 넘김

function reserve(name, callback){
    console.log('어서오세요');
    console.log('등록을 도와드리겠습니다');
    // name 예약자 목록에 넣기 
    //..
    console.log(name+"님 예약됐습니다")
    //.. 
    callback(); // 특정 작업이 완료된 후에 실행
}

function msg(){
    console.log('문자로 안내하기');
}
reserve('마바사', msg); // 함수 미리 정의하고 넘기기

reserve('가나다', function(){       // 넘길때 함수 선언
    console.log('전화로 안내하기');
});

reserve('타파하', ()=>{console.log('카톡으로 안내하기');})  // 넘길때 화살표함수로 선언

console.log("---------------------------------");
function arrForEach(){
    let arr = [10,20,30,40];
    for(let i in arr){
        console.log(i+" "+arr[i]);
    }
}
arrForEach();

function arrForEach2(arr){  // 매개변수로 배열을 받음
    for(let i in arr){
        console.log(i+": "+arr[i]);
    }
}
arrForEach2([9,8,7,6]);

function arrForEach3( func ){
    let arr = [110,220,330,440];
    
    for(let i in arr){
        func(i, arr[i]);
    }
}

const printFunc = (a,b)=>{
    console.log(a+": "+b);
}

arrForEach3(printFunc);

arrForEach3( (a, b)=>{  // 함수를 선언하면서 매개변수에 전달
    console.log(a+"------"+b);
});


// setTimeout(함수, 시간) -> '시간'이 지난 후에 함수를 실행
setTimeout( ()=>{console.log('setTimeout에 전달한 함수');}, 2000 ); // 1000 -> 1초


const cb = ()=>{console.log('cb 함수');}
const outCb = (f)=>{
    console.log('outCb 실행');
    f();
}

setTimeout( ()=>{
    console.log("setTimeout에 넘긴 콜백함수");
    outCb(cb);
}, 3000)