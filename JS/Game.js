	Crafty.init(1150,650);
	
	Crafty.background("url('Images/bg.jpg')");
	xy=""; rot=0; direct=0; colour=""; axis=0;

	Crafty.scene("Game",function(){
		

	game= Crafty.e("2D, DOM, Tween, Image, Generate");
	play= Crafty.e("2D, DOM, Tween, Image, Generate");

	var back = Crafty.e("2D, DOM, Image, Mouse").image("Images/back.png")
	   .attr({x:1040, y:10}).bind("Click", function(){ Crafty.scene("main");});
	
	leaf=[0, 0, 0, 0, 0];
	leaf[0] = Crafty.e("2D, DOM, Image, Tween")
	.attr({x: 480, y:100})
	.image("Images/greenleaf.png")
	.origin("left right");
	leaf[1] = Crafty.e("2D, DOM, Image, Tween")
	.attr({x: 200, y:250})
	.image("Images/greenleaf.png")
	.origin("left right");
	leaf[2] = Crafty.e("2D, DOM, Image, Tween")
	.attr({x: 480, y:400})
	.image("Images/greenleaf.png")
	.origin("left right");
	leaf[3] = Crafty.e("2D, DOM, Image, Tween")
	.attr({x: 750, y:250})
	.image("Images/greenleaf.png")
	.origin("left right");
	leaf[4] = Crafty.e("2D, DOM, Image, Tween")
	.attr({x: 480, y:250})
	.image("Images/greenleaf.png")
	.origin("left right");
win=0; lose=0; round=0;
game.bind("KeyDown", function(e){
	
	if(round>0)
	{
		if(col=="green")
		{
		if( direct == -1 && axis ==88)
		keyToBePressed= 37;
		else if( direct == 1 && axis ==88)
		keyToBePressed= 39;
		else if( direct == -1 && axis ==89)
		keyToBePressed= 38;
		else if( direct == 1 && axis ==89)
		keyToBePressed= 40;
		}
		else if(col=="orange")
		{
		if( rot==0 )
		keyToBePressed= 39;
		else if( rot==90 )
		keyToBePressed= 40;
		else if( rot==180 )
		keyToBePressed= 37;
		else if( rot==270 )
		keyToBePressed= 38;
		}
		
		if(e.key==keyToBePressed)
		win++;
		else 
		lose++;
	}
		round++;
		
		colour = Crafty.math.randomInt(1,2);
		if(colour==1)
			col="green";
		else if(colour==2)
			col="orange";
		axis = Crafty.math.randomInt(88, 89);
		if(axis==88)
			xy='x';
		else if(axis==89)
			xy='y';
		rot = Crafty.math.randomElementOfArray([0,90,180,270]);
		direct = Crafty.math.randomElementOfArray([-1, 1]);
		if(e.key)
		{
			leaf[0].rotation = rot;
			leaf[1].rotation = rot;
			leaf[2].rotation = rot;
			leaf[3].rotation = rot;
			leaf[4].rotation = rot;
			leaf[0].image("Images/"+col+"leaf.png");
			leaf[2].image("Images/"+col+"leaf.png");
			leaf[1].image("Images/"+col+"leaf.png");
			leaf[3].image("Images/"+col+"leaf.png");
			leaf[4].image("Images/"+col+"leaf.png");
			
		game.bind("EnterFrame", function(){
			if(axis==88){
			leaf[0].x = leaf[0].x+direct;
			leaf[1].x = leaf[1].x+direct;
			leaf[2].x = leaf[2].x+direct;
			leaf[3].x = leaf[3].x+direct;
			leaf[4].x = leaf[4].x+direct;
			if(leaf[3].x < -170)
			{
			Crafty.scene("GameOver");
			game.unbind("EnterFrame");
			}
			if(leaf[1].x > 1148)
			{
			Crafty.scene("GameOver");
			game.unbind("EnterFrame");
			}
		}
		else if(axis==89){
			leaf[0].y = leaf[0].y+direct;
			leaf[2].y = leaf[2].y+direct;
			leaf[1].y = leaf[1].y+direct;
			leaf[3].y = leaf[3].y+direct;
			leaf[4].y = leaf[4].y+direct;
			if(leaf[2].y < -150)
			{
			Crafty.scene("GameOver");
			game.unbind("EnterFrame");
			}
			if(leaf[0].y > 660)
			{
			Crafty.scene("GameOver");
			game.unbind("EnterFrame");
		   }
		}
		});
		}
});
});
