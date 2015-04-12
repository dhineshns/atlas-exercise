angular.module('starter.controllers', [])


.controller('CanvasCtrl', function($scope) {
  
	$scope.$on("$ionicView.beforeEnter", function() {
	var tCounter = 1;
  var c = document.getElementById("myCanvas");
  elemLeft = c.offsetLeft,
  elemTop = c.offsetTop;

  c.width = window.innerWidth;
  c.height = window.innerHeight;

  var f1 = {centerX : c.width/4, centerY : c.height/2}
  var ctx = c.getContext("2d");
  ctx.lineWidth = 6;

  drawCircle(ctx, f1.centerX, f1.centerY);
  drawText(ctx, 'F1', f1.centerX, f1.centerY);

    //call back which listens for clicks on the screen and draws line cirlces from F1
    c.addEventListener('click', function(event) {
      var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;
      drawLine(ctx, f1.centerX, f1.centerY, x, y);
      drawCircle(ctx, x, y);
      drawText(ctx, 'T'+tCounter++, x, y);
      drawText(ctx, 'F1', f1.centerX, f1.centerY);

    }, false);

    function drawCircle (context, centerX, centerY){
      context.beginPath();
      context.arc(centerX, centerY, 20, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
    }

    function drawLine(context, startX, startY, endX, endY ){
      context.strokeStyle = "#333";
      context.beginPath();
      context.moveTo(startX, startY);
      context.bezierCurveTo(startX, endY, endX, startY, endX, endY);
      context.strokeStyle = 'green';
      context.stroke();
    }

    function drawText(context, text, start, end){
      ctx.fillStyle='white';
      ctx.textBaseline="middle"; 
      ctx.font="20px Georgia";
      ctx.textAlign="center"; 
      ctx.fillText(text, start, end);
    }
    

});
$scope.myName = "Dhinesh Nakkeerar"
});
