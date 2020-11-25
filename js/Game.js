class Game{

constructor(){



}

getState(){

    var getStateRef = database.ref("gameState");
    getStateRef.on("value",function(data){
        gameState = data.val();
    })
}

update(state){

    database.ref("/").update({
        gameState:state
    })

}

async start(){

    if(gameState===0){
        
        player = new Player();
        var playerCount = await database.ref ("playerCount").once("value");
        if(playerCount.exists()){
            playerCount = playerCount.val();
            player.getCount();


        }
        form = new Form();
        form.display();
        
    }
    
car1 = createSprite(100,200);
car2 = createSprite(300,200);
car3 = createSprite(500,200);
car4 = createSprite(700,200);

cars = [car1,car2,car3,car4];

car1.addImage("car1",car1_img);
car2.addImage("car2",car2_img);
car3.addImage("car3",car3_img);
car4.addImage("car4",car4_img);



    
}



play(){

form.hide();

Player.getPlayerInfo();
if(allPlayers!==undefined){
  
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
var index = 0;
var x = 250;
var y ;

for(var plr in allPlayers){
    index = index+1;
    x = x+200;
    y = displayHeight-allPlayers[plr].distance;
    cars[index-1].x = x;
    cars[index-1].y = y;

    if(index===player.index){
        //cars[index-1].shapeColor="red";
        ellipse(x,y,60,60);
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
        fill("black");
  


    }




}


}

if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10
    player.update();
    
  }
if(player.distance>4000){

gameState=2
player.rank+=1
Player.updateRank(player.rank);
fill("red")
textSize(20);
text("Your rank is :"+ player.rank,displayWidth/2 - 60,y-220)

}


drawSprites();
}
end(){
    console.log("Game Ended");
    game.update(2)
}
}


