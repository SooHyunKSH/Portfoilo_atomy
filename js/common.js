$(function(){
  $('#fullpage').fullpage({
		//options here
    // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    showActiveTooltip: true,
		autoScrolling: true,
		scrollHorizontally: true,
    scrollingSpeed: 500,
    slidesNavigation: true,
    scrollOverflow: false,
    css3: true,
    slidesNavPosition: 'bottom',
    afterRender: function () {
      setInterval(function () {
          $.fn.fullpage.moveSlideRight();
      }, 3000);
  }
	});

  $(window).scroll(function(){
    // console.log($(this).scrollTop());
    if( $(this).scrollTop() == 0 ){
      $(".go_to_top").removeClass("on");
    }else{
      $(".go_to_top").addClass("on");
    };

    if( $(this).scrollTop() > 0){
      $("#header").addClass("on");
    }else{
      $("#header").removeClass("on");
    };
  });

  /* section05 map tapmenu mouseover */
  $(".map_tab ul li").mouseover(function(){
    let thisIndex = $(this).index() + 1;
    $(this).each(function(){
      $(".section05 .map").css("background-image","url('./img/worldwide_map0"+thisIndex+".svg')");
    });
  }).mouseout(function(){
    $(".section05 .map").css("background-image","url('./img/worldwide_map.svg')");
  })

  /*section offset().top 값으로 class추가*/
  // let wHeight = $(window).innerHeight();
  // console.log("window height : "+wHeight);
  // $(window).scroll(function(){
  //   let thisScrollTop = $(this).scrollTop();
  //   console.log(thisScrollTop);
  //   $(".section").each(function(){
  //     let thisOffset = $(this).offset();
  //     if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
  //       $(this).addClass("active");
  //     }
  //   })

  let imgNum = $(".about_item_img img").height();
  let txtNum = $(".slide_txt").height();
  let slideWrap = $(".slide_container .slide_wrap").css("margin-top");
  let txtSlideWrap = $(".slide_txt_container .slide_wrap").css("margin-top");
  let imgCount = $(".about_item_img").length;
  let imgIndex = $(".about_item_img").index();
  let slideTxtIndex = $(".slide_txt").index();
  console.log(slideTxtIndex);
  
  /* section01 slide contents */
  $(".top_btn").on("click",function(){
    let counterNumber = Number($(".counter em").text());
    let counterChange = counterNumber - 1;
    let slideWrap = $(".slide_container .slide_wrap").css("margin-top");
    let txtSlideWrap = $(".slide_txt_container .slide_wrap").css("margin-top");
    /* counter */
    $(".counter em").text(counterChange);
    $(".slide_txt").each(function(){
      if( counterChange == $(this).index() + 1 ){
        $(this).addClass("active");
      }else{
        $(this).removeClass("active");
      }
    });
    /* image slide */
    if(!$(".slide_wrap").is(":animated")){
      $(".slide_container .slide_wrap").animate({marginTop : parseInt(slideWrap) + imgNum },500,"swing",function(){
        $(".bottom_btn").css("display","block");
        if( parseInt(slideWrap) == -0 || parseInt(slideWrap) == 1){
          $(".top_btn").css("display","none");
        }
      })
      /* text slide */
      $(".slide_txt_container .slide_wrap").animate({marginTop: parseInt(txtSlideWrap) + txtNum},500,"swing");
    }
  })

  $(".bottom_btn").on("click",function(){
    let counterNumber = Number($(".counter em").text());
    let counterChange = counterNumber + 1;
    let slideWrap = $(".slide_container .slide_wrap").css("margin-top");
    let txtSlideWrap = $(".slide_txt_container .slide_wrap").css("margin-top");
    /* counter */
    $(".counter em").text(counterChange);
    $(".slide_txt").each(function(){
      if( counterChange == $(this).index() + 1 ){
        $(this).addClass("active");
      }else{
        $(this).removeClass("active");
      }
    });
    /* image slide */
    if(!$(".slide_wrap").is(":animated")){
      $(".slide_container .slide_wrap").animate({marginTop : parseInt(slideWrap) - imgNum },500,"swing",function(){
        $(".top_btn").css("display","block");
        if( parseInt(slideWrap) == -parseInt(imgNum)*3){
          $(".bottom_btn").css("display","none");
        }
      })
      /* text slide */
      $(".slide_txt_container .slide_wrap").animate({marginTop: parseInt(txtSlideWrap) - txtNum},500,"swing");
    }
  })
});
