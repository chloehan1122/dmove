$(document).ready(function(){

  // 헤더 스크롤 조정
  // window.scrollTo(0, 1); // 페이지 로드 후 스크롤을 강제로 1px 아래로 이동
  // window.scrollTo(0, 0); // 다시 맨 위로 스크롤하여 스크롤 이벤트를 트리거

  let winWidth = window.innerWidth; //해상도
  let lastScrollTop = 0;
  let scrTop = 0;
  let showMenu = true;  //메뉴보임
  const depth = document.querySelector('.gnb-box li.depth');
  const gnbBox = document.querySelector('.gnb-box');
  if(winWidth < 768) $(".cus-bar>li:first-of-type").html("Big")
  setHeaderColor();
  $(window).scroll(function(){
    scrTop = $(window).scrollTop();
    console.log(scrTop)
    if (scrTop == 0) {
      if($("header").hasClass("noshow")) $("header").removeClass("noshow")
      if($("header").hasClass("halfshow")) $("header").removeClass("halfshow")
      $(".gnb-box").removeClass("halfshow")
      $(".depth-ul a").removeClass("halfshow")
      showMenu = true;
      setHeaderColor();
    } else {
      if (scrTop > lastScrollTop && showMenu) {
        console.log("스크롤을 내렸을 때")
        if(!$("header").hasClass("noshow")) $("header").addClass("noshow")
        showMenu=false;
      } else if(scrTop <= lastScrollTop && !showMenu){
        console.log("스크롤을 올렸을 때")
        if(winWidth > 768){
          if($("header").hasClass("noshow")) $("header").removeClass("noshow")
          if(!$("header").hasClass("halfshow")) $("header").addClass("halfshow")
          $(".h-logo img").attr("src","./img/dmove-logo.png")
          $(".gnb-box").addClass("halfshow")
          $(".depth-ul a").addClass("halfshow")
          showMenu = true;
        }
      }
    }
    $(".btn-top").removeClass("hide")
    lastScrollTop = scrTop;
  });

  depth.addEventListener('mouseenter', () => {
    gnbBox.classList.add('hovered');
    // $("header").css("background-color","#000")
    // $(".gnb-box>li").css("color","#fff")
    // $("button.btn-contact").addClass("hovered")
  });
  depth.addEventListener('mouseleave', () => {
    gnbBox.classList.remove('hovered');
    // $("header").css("background-color","#fff")
    // $(".gnb-box>li").css("color","#000")
    // $("button.btn-contact").removeClass("hovered")
  });

  // Top 버튼
  $(".btn-top").addClass("hide")
  $(window).scroll(function(){
    if($(window).scrollTop() == 0) $(".btn-top").addClass("hide")
    else $(".btn-top").removeClass("hide")
  })
  $(".btn-top").click(function(){
    window.scrollTo({top: 0,left: 0,behavior: "smooth"});
  })

  // 반응형 gnb 버튼 생성
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
    $(".yr21>span").css("letter-spacing","5px")
    $(".floating-icon").removeClass("hide")
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
    $(".yr21>span").css("letter-spacing","0px")
    $(".floating-icon").addClass("hide")
  }

  // partner 영역 fixed 버튼 swiper
  $(".mob-partner-li.btn-swiper li").click(function(){
    $(".btn-swiper li").removeClass("on")
    const vendorsIndex = $(this).addClass("on").index()
    swiper2.slideTo(vendorsIndex)
  });

  // customer 영역 버튼 스크롤
  $(".cus-bar li").click(function(){
    // cus-slider 애니메이션
    let offsetLeft = 15
    if(winWidth < 768) offsetLeft = 2;
    const paddingLeft = 12
    const firstLeft = $(".cus-bar>li:first-of-type").offset().left // 192
    $(".cus-bar li").removeClass("on")
    $(this).addClass("on")
    const liwidth = $(this).width(); // 118
    $(".cus-slider").width(liwidth)
    const objleft = $(this).offset().left;
    console.log(liwidth,objleft)
    $(".cus-slider").css("left",objleft-firstLeft+offsetLeft)

    // 로고 이미지 흑백 toggle
    $(".grid-ul>li").removeClass("on")
    let text = $(this).text().toLowerCase()
    console.log(text)
    if(winWidth > 768 && text=="big enterprises") text="big";
    else text=text.substr(0,4)
    $("."+text).addClass("on")
  })
});