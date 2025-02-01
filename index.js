var sum1=1;
var sum2=1;
var currentPlayer = 1;
$("button").prop("disabled", true);
$("#btn1").prop("disabled", false);
$("button").toggle();
var snakeAndLadder = {
    16: 35,
    19: 7,
    21: 42,
    54: 34,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78
  };
  
$("#btn1").click(function(){
    if (currentPlayer !== 1) return;
    animation("#btn1");
    playSound();
    var randomNumber=Math.floor(Math.random()*6+1);
    console.log(randomNumber);
    setTimeout(function(){
        switch(randomNumber){
            case 1: document.querySelector("#btn1").style.backgroundImage = "url('images/dice1.png')";break;
            case 2: document.querySelector("#btn1").style.backgroundImage = "url('images/dice2.png')";break;
            case 3: document.querySelector("#btn1").style.backgroundImage = "url('images/dice3.png')";break;
            case 4: document.querySelector("#btn1").style.backgroundImage = "url('images/dice4.png')";break;
            case 5: document.querySelector("#btn1").style.backgroundImage = "url('images/dice5.png')";break;
            case 6: document.querySelector("#btn1").style.backgroundImage = "url('images/dice6.png')";break;     
    }   
    },1500);
    setTimeout(function(){
        document.querySelector(".div" + sum1).classList.remove("pawn1");
    },2000);
    setTimeout(function(){
        sum1=sum1+randomNumber;
        if(sum1<=100){
            console.log(sum1);
            document.querySelector(".div" + sum1).classList.add("pawn1");
            if (snakeAndLadder[sum1]) {
                document.querySelector(".div" + sum1).classList.remove("pawn1"); 
                if (snakeAndLadder[sum1] < sum1) { 
                    $(".snake").css("top", $(".div" + sum1).offset().top)
                               .css("left", $(".div" + sum1).offset().left)
                               .show();
                    setTimeout(function() { 
                        $(".snake").hide(); 
                    }, 1000);  
                    sum1 = snakeAndLadder[sum1];
                    document.querySelector(".div" + sum1).classList.add("pawn1");
                } else { 
                    $(".ladder").css("top", $(".div" + sum1).offset().top)
                                 .css("left", $(".div" + sum1).offset().left)
                                 .show();
                    setTimeout(function() { 
                        $(".ladder").hide(); 
                    }, 1000); 
                    sum1 = snakeAndLadder[sum1];
                    document.querySelector(".div" + sum1).classList.add("pawn1"); 
                }
            }
            if(sum1==100){
                document.querySelector("h2").innerHTML="Red Wins...🎉<button onclick='playAgain()'>Play Again..</button>";
                $("#btn1").prop("disabled", true);
                $("#btn2").prop("disabled", true);
                currentPlayer=0;
            }
        }else{
            sum1=sum1-randomNumber;
            document.querySelector(".div" + sum1).classList.add("pawn1");
        }
    },2000); 
    $("#btn1").prop("disabled", true);
    $("#btn2").prop("disabled", false);
    currentPlayer = 2;
});
$("#btn2").click(function(){
    if (currentPlayer !== 2) return;
    animation("#btn2");
    playSound();
    var randomNumber=Math.floor(Math.random()*6+1);
    console.log(randomNumber);
    setTimeout(function(){
        switch(randomNumber){
            case 1: document.querySelector("#btn2").style.backgroundImage = "url('images/dice1.png')";break;
            case 2: document.querySelector("#btn2").style.backgroundImage = "url('images/dice2.png')";break;
            case 3: document.querySelector("#btn2").style.backgroundImage = "url('images/dice3.png')";break;
            case 4: document.querySelector("#btn2").style.backgroundImage = "url('images/dice4.png')";break;
            case 5: document.querySelector("#btn2").style.backgroundImage = "url('images/dice5.png')";break;
            case 6: document.querySelector("#btn2").style.backgroundImage = "url('images/dice6.png')";break;     
    }   
    },1500);

    setTimeout(function(){
        document.querySelector(".div" + sum2).classList.remove("pawn2");
    },2000)
    setTimeout(function(){
        sum2=sum2+randomNumber;
        if(sum2<=100){
            console.log(sum2);
            document.querySelector(".div" + sum2).classList.add("pawn2");
            if(snakeAndLadder[sum2]) {
                document.querySelector(".div" + sum2).classList.remove("pawn2"); 
                if (snakeAndLadder[sum2] < sum2) {  // Snake
                    $(".snake").css("top", $(".div" + sum2).offset().top)
                               .css("left", $(".div" + sum2).offset().left)
                               .show();
                    setTimeout(function() { $(".snake").hide(); }, 1000); 
                    sum2 = snakeAndLadder[sum2];
                    document.querySelector(".div" + sum2).classList.add("pawn2");
                } else { 
                    $(".ladder").css("top", $(".div" + sum2).offset().top)
                                .css("left", $(".div" + sum2).offset().left)
                                .show();
                    setTimeout(function() { $(".ladder").hide(); }, 1000);
                    sum2 = snakeAndLadder[sum2]; 
                    document.querySelector(".div" + sum2).classList.add("pawn2"); 
                }
            }
            if(sum2==100){
                document.querySelector("h2").innerHTML="Blue Wins...🎉<button onclick='playAgain()'>Play Again..</button>";
                $("#btn1").prop("disabled", false);
                $("#btn2").prop("disabled", false);
                currentPlayer=0;
            }
        }else{
            sum2=sum2-randomNumber;
            document.querySelector(".div" + sum2).classList.add("pawn2");
        }
    },2000) 
    $("#btn2").prop("disabled", true);
    $("#btn1").prop("disabled", false);
    currentPlayer = 1;
});

function playAgain(){
    document.querySelector(".div" + sum1).classList.remove("pawn1");
    document.querySelector(".div" + sum2).classList.remove("pawn2");
    document.querySelector("h2").innerHTML="Roll The Dice To Play...";
    sum1=1;
    sum2=1;
    document.querySelector(".div" + sum1).classList.add("pawn1");
    document.querySelector(".div" + sum2).classList.add("pawn2");
    document.querySelector("#btn1").style.backgroundImage = "url('images/dice6.png')";
    document.querySelector("#btn2").style.backgroundImage = "url('images/dice6.png')";
    currentPlayer = 1;
    $("#btn1").prop("disabled", false);
}
function animation(key){
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice1.png')";
    },30);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice2.png')";
    },60);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice3.png')";
    },90);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice4.png')";
    },120);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice5.png')";
    },150);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice6.png')";
    },180);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice1.png')";
    },210);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice2.png')";
    },240);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice3.png')";
    },270);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice4.png')";
    },300);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice5.png')";
    },330);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice6.png')";
    },360);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice1.png')";
    },390);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice2.png')";
    },420);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice3.png')";
    },450);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice4.png')";
    },480);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice5.png')";
    },510);
    setTimeout(function(){
        document.querySelector(key).style.backgroundImage = "url('images/dice6.png')";
    },540);
}

function playSound() {
    var audio = new Audio("dice1.mp3");
    audio.play();
  }  