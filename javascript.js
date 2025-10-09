function getComputerChoice()
{
    let num= (Math.random()*1000)%3 ;
    if(num <1)
        return "Paper";
    else if(num <2)
        return "Scissors";
    else if(num <3)
        return "Rock";
    else
        return "Error. Invalid choice";
}

function getHumanChoice()
{
    while(1)
    {
        let p_choice= prompt("Choose Wisley:\nRock Paper Scissors");
        if (p_choice !='Rock' && p_choice !="Paper" && p_choice!="Scissors")
            console.log("Invalid Choice. Try again");
        else
            return p_choice;
    }
}
let p_score=0;
let c_score=0;

let p_choice=getHumanChoice();
let c_choice=getComputerChoice();
console.log(p_choice);
console.log(c_choice);

if(p_choice=="Rock" && c_choice=="Scissors")
    p_score++;
else if(p_choice=="Scissors" && c_choice=="Paper")
    p_score++
else if(p_choice=="Paper" && c_choice=="Rock")
    p_score++
else if(p_choice==c_choice); 
else
    c_score++;
console.log(p_score);
console.log(c_score);
    