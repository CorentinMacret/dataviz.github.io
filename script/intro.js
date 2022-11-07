document.addEventListener("DOMContentLoaded", function () {
    const introText = document.getElementsByClassName("titre"),
      introBtn = document.getElementsByClassName("btn");
  
  
    setTimeout(() => {
      introText[0].classList.add("start");
      introBtn[0].classList.add("start");
    }, 800);
  });
  