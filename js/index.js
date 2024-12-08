$(document).ready(function(){

  $(".btn-menu").click(function(){
    $(".gnb-mob-box").addClass("on")
    $("body").addClass("hidden")
  })
  $(".btn-menu-close").click(function(){
    $(".gnb-mob-box").removeClass("on")
    $("body").removeClass("hidden")
  })

  let winWidth = window.innerWidth;
  // let br_box = $(".br-box")
  if(winWidth > 768) {
    $(".context-box br").css("display","block")
    $(".m-service br").css("display","block")
  } else{
    $(".context-box br").css("display","none")
    $(".m-service br").css("display","none")
  }

});