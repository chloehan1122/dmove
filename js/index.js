$(document).ready(function(){

  // 헤더 스크롤 조정
  window.scrollTo(0, 1); // 페이지 로드 후 스크롤을 강제로 1px 아래로 이동
  window.scrollTo(0, 0); // 다시 맨 위로 스크롤하여 스크롤 이벤트를 트리거

  let winWidth = window.innerWidth;
  let lastScrollTop = 0;
  let scrTop = 0;
  $(window).scroll(function(){
    scrTop = $(window).scrollTop();
    if (scrTop > lastScrollTop) {
      console.log("스크롤을 내렸을 때")
      $("header").addClass("noshow")
      $("header").removeClass("halfshow")
    } else if (scrTop == 0 && winWidth > 768){
      $("header").removeClass("noshow")
      $("header").removeClass("halfshow")
      $(".h-logo img").attr("src","/img/dmove-logo-color.png")
    } else if (scrTop == 0 && winWidth <= 768){
      $("header").removeClass("noshow")
      $("header").removeClass("halfshow")
      $(".h-logo img").attr("src","/img/dmove-logo.png")
    } else {
      console.log("스크롤을 올렸을 때")
      $("header").removeClass("noshow")
      $("header").addClass("halfshow")
      $(".h-logo img").attr("src","/img/dmove-logo.png")
    }
    lastScrollTop = scrTop;
  });

  // 반응형 gnb
  $(".btn-menu").click(function(){
    $(".gnb-mob-box").addClass("on")
    $("body").addClass("hidden")
  })
  $(".btn-menu-close").click(function(){
    $(".gnb-mob-box").removeClass("on")
    $("body").removeClass("hidden")
  })

  // 반응형 br 유무 및 기타 반응형 요소
  // let winWidth = window.innerWidth;
  // let br_box = $(".br-box")
  if(winWidth > 768) {
    $(".banner-title br.mob").css("display","none")
    $(".banner-span br").css("display","block")
    $(".context-box br").css("display","block")
    $("div.btn-explore").addClass("btn")
    $("div.btn-explore-color").addClass("btn")
    $(".m-product .order-change img").css("order","2")
    $(".m-service br").css("display","block")
    $(".m-customer h3 br.mob").css("display","none")
    $("article br.mob").css("display","none")
  } else{
    $(".banner-title br.mob").css("display","block")
    $(".banner-span br").css("display","none")
    $(".context-box br").css("display","none")
    $(".m-product h3 br.mob").css("display","block")
    $("div.btn-explore").removeClass("btn")
    $("div.btn-explore-color").removeClass("btn")
    $(".m-product .order-change img").css("order","1")
    $(".m-service br").css("display","none")
    $(".m-customer h3 br.mob").css("display","block")
    $("article br.mob").css("display","block")
  }

  // customer 영역 버튼 스크롤
  $(".cus-bar li").click(function(){
    $(".cus-bar li").removeClass("on")
    $(this).addClass("on")
  })

});