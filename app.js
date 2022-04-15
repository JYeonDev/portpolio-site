// typingwrite

const content = "반갑습니다, \n 성장하고 발전하며 \n 프론트엔드를 목표로 하는 \n 김종연입니다.";
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

// menu-bar

const menuBar = document.querySelector('.menu-bar');

menuBar.addEventListener('click', ()=> {
  menuBar.classList.toggle('menu-bar-animation');
  console.log('test')
})


// skill

const acc = document.getElementsByClassName("accordion");
let count;

for (count = 0; count < acc.length; count++) {
  acc[count].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// project

// window.addEventListener('scroll', () => {
//   let scrollHeight = this.scrollY;
//   let projectHeight = document.querySelector('.project').offsetTop;
//   console.log('스크롤높이',scrollHeight);
//   console.log('프로젝트현재위치', projectHeight)

// })



// AOS 스크롤 이벤트라이브러리
AOS.init(
  {
    offset: 120,
    delay: 0,
    duration: 400, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom' 
    }
  );