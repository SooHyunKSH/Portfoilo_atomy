$(function(){
  $('.about_history').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.about_history_lst',
    arrows: true,
    fade: false,
    vertical: true,
    verticalSwiping: true,
    touchMove: false,
    prevArrow: '<button class="slick-prev"><i class="xi-long-arrow-up"><span class="hide">Previous</span></i></button>',
    nextArrow: '<button class="slick-next"><i class="xi-long-arrow-down"><span class="hide">Next</span></i></button>'
  });

  $('#fullpage').fullpage({
		//options here
    showActiveTooltip: true,
		autoScrolling: true,
		scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
      if( $(this).index() > 0 ){
        $("#header").addClass("on");
      }else{
        $("#header").removeClass("on");
      }
    },
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
