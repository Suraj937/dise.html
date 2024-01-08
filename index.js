document.querySelector("button").addEventListener("click",function (){

    var firstVariable = Math.floor(Math.random()*6)+1;
    var secondVariable = Math.floor(Math.random()*6)+1;
    
    var randomDice1 = "dice"+firstVariable+".png";
        randomDice1 = "./images/"+randomDice1;
    var randomDice2 = "./images/"+"dice"+secondVariable+".png";
    document.querySelector(".img1").setAttribute("src",randomDice1);
    document.querySelector(".img2").setAttribute("src",randomDice2);
    if( firstVariable > secondVariable ){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }else if( firstVariable < secondVariable ){
        
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }else{
        document.querySelector("h1").innerHTML = "Draw!";
    }




});



