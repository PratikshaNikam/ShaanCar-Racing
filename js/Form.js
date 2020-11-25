class Form{

    constructor(){
        this.input = createInput("name");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset");
        
        this.button = createButton("play");

    }


    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

     display(){

        var title =createElement("h1");
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0); 
        this.greeting = createElement("h2");
        

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);

        
        this.button.position(displayWidth/2+100,displayHeight/2);
        this.reset.position(displayWidth-200,30);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;

           player.update();
           player.updateCount(playerCount);
            this.greeting.html("Hello There "+ player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })

        this.reset.mousePressed(()=>{

            game.update(0);
            player.updateCount(0);
            Player.updateRank(0);
        })
     }
    }