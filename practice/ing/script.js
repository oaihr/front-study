/* 여기부터 책의 코드를 작성해주세요 */
const spanEl = document.querySelector("main h2 span");
// 화면에 표시할 문장 배열
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer']
let index = 0;
let currentTxt = txtArr[index].split("");

(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = textArr[index].split("");
    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random()*100));
        }else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt(){
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random()*100));
        }else{
            index = (index +1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})();

// 스크롤 이벤트 추가
/* const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browserScrollY = this.window.pageXOffset;
    if(browserScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
});
 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    requestAnimationFrame(ScrollCheck);
});
function ScrollCheck(){
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browserScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

// 애니메이션 스크롤 이동
const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior: 'smooth'});
 };

//  스크롤 이벤트 연결하기 
 const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
    for(let i=0; i<scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    })
}