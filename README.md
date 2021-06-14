# Portfoilo_atomy
 
## jQuery Plugin : fullpage js 활용
플러그인을 커스텀하여 구성한 원페이지 스크롤 사이트입니다.

## 버튼 클릭 시 이미지 일정 간격만큼 이동
```javascript
$(function(){
 $(".btn").on("click",function(){
  $(".content").animate({marginTop: parseInt(contentMarginTop) + imgHeight}, 500, "swing", function (){})
 })
})
```
