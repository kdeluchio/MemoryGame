class MemoryGame  
{

    board = ['aladin.png', 'avatar.png', 'capitã.png', 'dumbo.png', 'enola.png', 'et.png',
             'future.png', 'harryPoter.png', 'jocker.png', 'mortalKombat.png', 'pixels.png', 
             'shazam..png', 'sonic.png', 'starwars.png', 'us.png', 'venon.png', 'vingadores.png', 
             'watchmen.png', 'monica.png', 'titanic.png', 'curela.png', 'panter.png']
    
    draw() {

      const divBoard = document.querySelector(".board");

      for(let i=0; i < 2 ; i++) {

        const boardMixed = this.mix();
        boardMixed.forEach(item => {
          
          const divCard = document.createElement("div");
           divCard.classList.add("card");

           const imgCard = document.createElement("img");
           imgCard.classList.add("imgOff");
           imgCard.src = `img\\${item}`;

           divCard.appendChild(imgCard);
           divBoard.appendChild(divCard);
        });
      }
 
    }

    mix() {

      let boardMixed = [];

      while(boardMixed.length < this.board.length)
      {
        let index = Math.floor(Math.random() * this.board.length);
        if(boardMixed.find(element => element == this.board[index])) continue;

        boardMixed.push(this.board[index]);
      }

      return boardMixed;
    }

    turnCard(card){

      card.classList.add("imgCurrent");
      card.classList.remove("imgOff");

      const cards = document.querySelectorAll(".imgCurrent");
      if(cards.length == 2){
        
        const ok = this.checkCards(cards[0], cards[1]);
        setTimeout(function () {
          if(ok){
            cards[0].classList.add("imgOn");
            cards[0].classList.remove("imgCurrent");
  
            cards[1].classList.add("imgOn");
            cards[1].classList.remove("imgCurrent");
            
          }else {
            cards[0].classList.add("imgOff");
            cards[0].classList.remove("imgCurrent");
            
            cards[1].classList.add("imgOff");
            cards[1].classList.remove("imgCurrent");
          }
        }, 500);
      }

    }

    checkCards(card1, card2){
      return card1.getAttribute('src') == card2.getAttribute('src');
    }

    gameOver(){
      const cards = document.querySelectorAll(".imgOff");
      if(cards.length == 0){
        alert("You Win!");
        const divBoard = document.querySelector(".board");
        divBoard.innerText="";
        this.draw();
      }

    }

};
