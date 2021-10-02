class MemoryGameController{

    subscribeCardEvent(){

        var cards = document.querySelectorAll(".card"); 

        cards.forEach(item =>{
            item.addEventListener("click", function(event){
                let memoryGame = new MemoryGame();

                if(event.target.tagName == "IMG")  memoryGame.turnCard(event.target);
            
                if(event.target.tagName == "DIV") memoryGame.turnCard(event.target.querySelector('img'));
                
            });
        });

    }   

    draw(){
        let memoryGame = new MemoryGame();
        memoryGame.draw();
    }

}

