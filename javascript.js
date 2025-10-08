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

let c_choice=getComputerChoice();
console.log(c_choice);