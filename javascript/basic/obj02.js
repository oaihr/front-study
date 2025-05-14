
let scores = [10, 30, 50, 70];

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//for ... in
for(let i in scores){   //i: index 
    console.log(i+' '+scores[i]);   // 인덱스와 값 출력
}

//for ... of 
for(let score of scores){   // score: scores의 값
    console.log(score);
}

// 0  1  2  3 
// 10 30 50 70
scores.forEach((item, index)=>{   // 요소 각각 반복
    console.log(item+" "+index);
}   );