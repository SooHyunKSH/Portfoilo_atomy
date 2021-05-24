$(function(){
  $('#fullpage').fullpage({
		//options here
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: true,
		autoScrolling: false,
		scrollHorizontally: true
	});

  new fullpage('#fullpage', {
    anchors:['main', 'about', 'brand','atomypark','csr','global','news'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
  });

  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if( $(this).scrollTop() == 0 ){
      $(".go_to_top").removeClass("on");
    }else{
      $(".go_to_top").addClass("on");
    };
  });

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
  let wHeight = $(window).innerHeight();
  console.log("window height : "+wHeight);
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    console.log(thisScrollTop);
    $(".section").each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
        $(this).addClass("active");
      }
    })
  });
});
