const content = "반갑습니다, \n 성장하고 발전하며 \n 웹개발자를 목표로 하는 \n 김종연입니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200);