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
        if (p_choice==null)
            return null;
            p_choice=p_choice.trim();
            p_choice= p_choice.charAt(0).toUpperCase() + p_choice.slice(1).toLowerCase();
        if (p_choice !='Rock' && p_choice !="Paper" && p_choice!="Scissors")
            console.log("Invalid Choice. Try again");
        else
            return p_choice;
    }
}

function playRound(p_choice,c_choice)
{
    if (p_choice==null)
        return null;
    else if(p_choice=="Rock" && c_choice=="Scissors")
    {
        console.log(p_choice+" beats "+c_choice+". Good job! Plus One Point for you");
        return 1;
    }
    else if(p_choice=="Scissors" && c_choice=="Paper")
    {
        console.log(p_choice+" beats "+c_choice+". Good job! Plus One Point for you");
        return 1;
    }
    else if(p_choice=="Paper" && c_choice=="Rock")
    {
        console.log(p_choice+" beats "+c_choice+". Good job! Plus One Point for you");
        return 1;
    }
    else if(p_choice==c_choice)
    {
        console.log(p_choice+" and "+c_choice+" is A tie. No points for everyone");
        return 0;
    }
    else
    {
        console.log(c_choice+" beats "+p_choice+". Plus One Point for the computer :D");
        return 2;
    }
}

function playGame()
{
    let p_score=0;
    let c_score=0;
    while(1)
        {
            let p_choice=getHumanChoice();
            let c_choice=getComputerChoice();
            let result= playRound(p_choice,c_choice);
            if (result==null)
            {
                console.log("QUITEER")
                return null;
            }
            else if(result==1)
            {
                p_score++;
            }
            else if(result==2)
            {
                c_score++;
            }
            console.log(p_score);
            console.log(c_score);
            if(p_score==5)
            {
                console.log("Player Wins !!!");
                return 1;
            }
            else if(c_score==5)
            {
                console.log("Computer Wins :C");
                return 0;
            }
        }
}

playGame();