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