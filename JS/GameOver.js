Crafty.scene("GameOver",function(){

Crafty.init(1150,650);
Crafty.background("url('Images/bg.jpg')");

gameOver =Crafty.e("2D, DOM, Image")
.image("Images/gameOver.png")
.attr({x:320 , y:100});

result = Crafty.e("2D, DOM, Image")
.image("Images/result.png")
.attr({x:400, y:250});

wins =Crafty.e("2D, DOM, Text")
.attr({x:676, y:263})
.text(win)
.textColor("cyan")
.textFont({ size: '33px', weight: 'bold' });

loses =Crafty.e("2D, DOM, Text")
.attr({x:650, y:360})
.text(lose)
.textColor("cyan")
.textFont({ size: '33px', weight: 'bold' });

var back = Crafty.e("2D, DOM, Image, Mouse").image("Images/back.png")
	   .attr({x:1040, y:10}).bind("Click", function(){ Crafty.scene("main");});
	

});