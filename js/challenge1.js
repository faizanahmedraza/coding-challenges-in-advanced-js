function ageInDays()
{
    var birthYear = prompt("What year were you born?");
    var ageInDayss = (2020 - birthYear) * 365;
    var h3 = document.createElement('h3');
    var textNode = document.createTextNode("You are " + ageInDayss + " days old.");
    h3.setAttribute('id','ageInDays');
    h3.appendChild(textNode);
    document.getElementById('flex-box-result').appendChild(h3);
}

function reset()
{
    document.getElementById('ageInDays').remove();
}
//Challenge2 -- Cat Generator
function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
//Challenge3 -- Rock,Paper,Scissor
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id; //object id
    botChoice = numberToChoice(randomToRpsInt());
    console.log("Computer Choice: ",botChoice);
    var results = decideWinner(humanChoice,botChoice);
    var message = finalMessage(results);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randomToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ["rock","paper","scissor"][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock': {'scissor':1,'rock':0.5,'paper':0},
        'paper': {'rock':1,'paper':0.5,'scissor':0},
        'scissor': {'paper':1,'scissor':0.5,'rock':0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice] +"' height='200' width='200' style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice] +"' height='200' width='200' style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
    messageDiv.innerHTML = "<h1 style='color:"+ finalMessage['color'] + "; font-size:60px; padding: 30px; '>"+finalMessage['message']+"</h1>";
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message':'You Lost!', 'color':'red'}
    } else if(yourScore === 0.5){
        return {'message':'You Tied!', 'color':'yellow'}
    } else {
        return {'message':'You Won!', 'color':'green'}
    }
}