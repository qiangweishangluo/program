define(function(){
  return init;
});
function init(){
  var key=0;
  var timer=time();

  $("#mz-index-lunbo-button").on("mouseenter","span",function(){
    clearInterval(timer);
    key=$(this).index();
    draw();
  })
  $("#mz-index-lunbo-button").on("mouseleave","span",function(){
    timer=time();
  })

  function draw(){
    $("#mz-index-lunbo-button span").removeClass("mz-index-lunbo-action");
    $("#mz-index-lunbo-button span").eq(key).addClass("mz-index-lunbo-action");
    $("#mz-index-banner img").css("opacity","0");
    $("#mz-index-banner img").eq(key).css("opacity","1");
  }
  function time(){
    return setInterval(() => {
      if(key==2)
      {
        key=0;
      }
      draw();
      key++; 
    }, 1000)
  }


}