window.onload = function createbottom() {

    
    let randomcard=Math.floor(Math.random()*13+1);
    let simbolo=Math.floor(Math.random()*4+1);
    
    
    

        let cardnumber = document.querySelector(".second");
        if(randomcard==1){
            randomcard="A";
             
        }
        if(randomcard==11){
            randomcard="J";
        }
        if(randomcard==12){
            randomcard="Q";
        }
        if(randomcard==13){
            randomcard="K";
        }

        if(simbolo==1){
            let corazones=document.createElement("div");
            corazones.innerHTML= '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1200px-Love_Heart_symbol.svg.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".first").appendChild(corazones); 
            let corazones1=document.createElement("div");
            corazones1.innerHTML= '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1200px-Love_Heart_symbol.svg.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".third").appendChild(corazones1);
            
        }

           if(simbolo==2){
            let rombos=document.createElement("div");
            rombos.innerHTML= '<img src="https://i.pinimg.com/originals/ed/bb/0d/edbb0d654f744370ddc63bb8605eecd9.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".first").appendChild(rombos); 
            let rombos1=document.createElement("div");
            rombos1.innerHTML= '<img src="https://i.pinimg.com/originals/ed/bb/0d/edbb0d654f744370ddc63bb8605eecd9.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".third").appendChild(rombos1);
            
        }

          if(simbolo==3){
            let trebol=document.createElement("div");
            trebol.innerHTML= '<img src="https://w7.pngwing.com/pngs/107/957/png-transparent-playing-card-suit-symbol-card-game-clovers-game-hearts-black.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".first").appendChild(trebol); 
            let trebol1=document.createElement("div");
            trebol1.innerHTML= '<img src="https://w7.pngwing.com/pngs/107/957/png-transparent-playing-card-suit-symbol-card-game-clovers-game-hearts-black.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".third").appendChild(trebol1);
            
        }

         if(simbolo==4){
            let picas=document.createElement("div");
            picas.innerHTML= '<img src="https://www.pngfind.com/pngs/m/463-4634832_black-spade-png-cartas-de-poker-trebol-png.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".first").appendChild(picas); 
            let picas1=document.createElement("div");
            picas1.innerHTML= '<img src="https://www.pngfind.com/pngs/m/463-4634832_black-spade-png-cartas-de-poker-trebol-png.png" width="30px" height="30px" alt=""> ';
            document.querySelector(".third").appendChild(picas1);
            
        }

        cardnumber.innerHTML=randomcard;

        document.querySelector(".second").appendChild(cardnumber);



        
        
          

};