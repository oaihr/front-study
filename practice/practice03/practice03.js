let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

// HTTP (Hyper Text Transfer Protocol)
// HTTPS (Hyper Text Transfer Protocol over Secure Socket Layer) http에 보안 적용 

/* {코딩부분} */
function changeLink(str) {
    if (str.includes("://")) {
        // substring 이용
        /* if (str.substring(0, 5) == "https") {
            let insertStr = "secure."
            // let result = str.substring(0, str.indexOf("/")+2) + insertStr + str.substring(str.indexOf("/")+2);
            let result = "https://" + insertStr + str.substring(str.indexOf("/") + 2);
            return result;
        } else if (str.substring(0, 5) == "http:") {
            let insertStr = "open."
            // let result = str.substring(0, str.indexOf("http")+4) + "s"+ 
            //                 str.substring(str.indexOf("http")+4, str.indexOf("/")+2) + 
            //                 insertStr + str.substring(str.indexOf("/")+2);
            let result = "https://" + insertStr + str.substring(str.indexOf("/") + 2);
            return result;
        } */

        // split 이용 
        let splitStr = str.split("://");
        if (splitStr[0] == 'https') {
            return splitStr[0] + "://secure." + splitStr[1];
        } else {
            return splitStr[0] + "s://open." + splitStr[1];
        }
    } else {
        return "경로가 잘못되었습니다.";
    }
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));