/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

// for http://signature.io
var cloud = $('.cloud');
var process = $(".cloud-processing");

process.addClass("process");


// to restart the animation click and hold on the cloud
cloud.on("mousedown", function(){
  process.addClass("process");
});

cloud.on("mouseup", function(){
  process.removeClass("process");
});

// TODO
//- settup mobile friendly version