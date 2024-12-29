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