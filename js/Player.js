class Player{

constructor(){
this.index = null;
this.distance = 0;
this.name = null;
this.rank=null;


}


getCount(){
    var playerCountref = database.ref("playerCount");
    playerCountref.on("value",(data)=>{
        playerCount = data.val();


    })


}


updateCount(count){

database.ref("/").update({
    playerCount:count
})

}

update(){

    var playerIndex = "players/player"+this.index;
    database.ref(playerIndex).set({

        name:this.name,
        distance:this.distance
    })


}
static getPlayerInfo(){

var playerInfoRef = database.ref("players");
playerInfoRef.on("value",(data) =>{
    allPlayers = data.val();
})

}

getRank(){
    var playerRankRef=database.ref('rank');
    playerRankRef.on("value",(data)=>{
        this.rank = data.val();
    }


    )
}

static updateRank(rank){
database.ref('/').update({
rank:rank
})
}

}