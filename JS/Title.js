window.onload = ( function(){
	Crafty.init(1150,650);
	
	Crafty.background("url('Images/bg.jpg')");
	var assetsObj = { "images": ["Images/about.png", "Images/ported.png", "Images/gameOver.png", "Images/result.png", "Images/back.jpg", "Images/sanchit.jpg", "Images/bg.jpg", "Images/floatingLeaves.png", "Images/howToPlay.png", "Images/play.png", "Images/greenleaf.png", "Images/orangeleaf.png", "Images/score.png", "Images/screen.png", "Images/turnGreen.png", "Images/turnOrange.png"]}
	
	Crafty.load(assetsObj, function() {
	Crafty.scene("main");
	});
	
	Crafty.scene("main",function(){
	var title=Crafty.e("2D, DOM, Image, Tween")
	.image("Images/floatingLeaves.png")
	.attr({x:230, y:-500});
	
	title.tween({x:230, y:100},1000).bind("TweenEnd",function(){})
	
	var play=Crafty.e("2D, DOM, Image, Mouse, Tween")
	.image("Images/play.png")
	.attr({x:-500, y:250})
	.bind("Click", function(){
	Crafty.scene("Game");
	});
	play.tween({x:480, y:250},1000).bind("TweenEnd",function(){})
	
	var howToPlay=Crafty.e("2D, DOM, Image, Mouse, Tween")
	.image("Images/howToPlay.png")
	.attr({x:1750, y:350})
	.bind("Click", function(){
	Crafty.scene("Guide");
	});
	howToPlay.tween({x:380, y:350},1000).bind("TweenEnd",function(){})
	
	var about=Crafty.e("2D, DOM, Image, Mouse, Tween")
	.image("Images/about.png")
	.attr({x:460, y:1000})
	.bind("Click", function(){
	Crafty.scene("About");
	});
	about.tween({x:460, y:450},1000).bind("TweenEnd",function(){})
	Crafty.e("2D, DOM, Image").image("Images/ported.png").attr({x:900, y:600});

	
});	
});