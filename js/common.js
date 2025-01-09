const setHeaderColor = () => {
  let winWidth = window.innerWidth; //해상도
  if(winWidth > 768){
    // pc버전
    $(".h-logo img").attr("src","./img/dmove-logo-color.png")
  } else{
    // 모바일버전
    $(".h-logo img").attr("src","./img/dmove-logo.png")
  }
}

const bookmark = (num) => {
  const ulBox = document.querySelector(".partner-wrap");
  const liBox = ulBox.querySelectorAll("li.brand");
  let goBox = liBox[num];
  console.log(goBox)
  scrRunTop = goBox.offsetTop - 120;
  //console.log(scrRunTop);
  window.scrollTo({top: scrRunTop,left: 0,behavior: "smooth"});
}

const btnDeactive = (e) => {
  e.preventDefault()
}