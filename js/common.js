$(function(){
  $('#fullpage').fullpage({
		//options here
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    showActiveTooltip: true,
		autoScrolling: true,
		scrollHorizontally: true,
    scrollingSpeed: 2000,
    slidesNavigation: true,
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

  // var changeBg = 1;
  // setInterval(function() {
  //   changeBg++;
  //   // if (changeBg > 2) {
  //   //   changeBg = 1;
  //   // }
  //   $('.section02').css({
  //     'background-image': 'url(../img/products_img0' + changeBg + '.jpg)'
  //   })
  // }, 2000);

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
  // });
});
