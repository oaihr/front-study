
// 내장객체

let str = "hellohi@gmail.com";

console.log(str.length);    // 문자의 길이

console.log(str.includes("g")); // 해당 문자가 포함임?

console.log(str.indexOf("@"));  // 해당 문자의 인덱스 찾기
console.log(str.indexOf("!"));  // 문자가 없으면 -1 return

//if(str.indexOf("!") == -1)   // str에 !가 없는 경우

console.log(str.substring(0, 4)); // 문자 잘라내기
            //           0<=  <4
console.log(str.substring(5, 13)); 

// 처음~@ : 아이디
// @다음~끝 : 도메인
console.log(str.indexOf("@"));
let id = str.substring(0, str.indexOf("@"));    // index 0 부터 @위치 전까지 잘라냄
console.log(id);
let domain = str.substring(str.indexOf("@")+1, str.length); // 7+1, 17 
//let domain = str.substring(str.indexOf("@")+1); // str.indexOf("@")+1 부터 끝까지 잘라냄
console.log(domain);

//" abc"    "abc"

// 앞뒤 공백 제거  trim (비파괴적)
let test = " abc "
console.log(test);
console.log(test.trim());
test = test.trim(); // test에 trim한 값을 직접 저장   
console.log(test);

// 문자 분리 split
let number = "010-1234-5678";
let s = number.split("-");  // 배열로 저장됨
console.log(s);
console.log(s[0]); // 휴대폰 맨 앞자리 010

console.log("------------------------------");
let today = new Date();

console.log(today);
console.log(today.getFullYear());   //년
console.log(today.getMonth());      //월 0~11 +1  (1월~12월)
console.log(today.getDate());       //일
console.log(today.getDay());        //요일 0~6(일~토)
console.log(today.getHours());      //
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(Math.abs(-10)); //절대값
console.log(Math.round(123.56)); //반올림





