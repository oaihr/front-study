let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */
function changeLink(str){
    if(str.includes("://")){
        if(str.includes("https")){
            let insertStr = "secure."
            let result = str.substring(0, str.indexOf("/")+2) + insertStr + str.substring(str.indexOf("/")+2);
            return result;
        }else if(str.includes("http")){
            let insertStr = "open."
            let result = str.substring(0, str.indexOf("http")+4) + "s"+ 
                            str.substring(str.indexOf("http")+4, str.indexOf("/")+2) + 
                            insertStr + str.substring(str.indexOf("/")+2);
            return result;
        }
    }else{
        return "경로가 잘못되었습니다.";
    }
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));