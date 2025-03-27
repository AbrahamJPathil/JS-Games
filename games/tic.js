let win_sound = new Audio("win.m4a");
let lose_sound = new Audio("fail.m4a");
let alert_sound = new Audio("alert.m4a");
var i = 1;
var j = 0;
var flag1,flag2;
let player1=[];
let player2=[];

x_btn=document.querySelector("#x");
y_btn=document.querySelector('#y');
message_window=document.querySelector("#game-messages");

function startGame() {
        if (flag1 && flag2) {
            game();
        }
    }


function alloc()
{
    for(let i=0;i<9;i++)
    {
        if(grid_stat[i]==0)
        {
            return 0;
        }
    }
    return 1;
}

function ifwon(curr_ele)
{
    if (
        (grid_stat[0] == curr_ele && grid_stat[1] == curr_ele && grid_stat[2] == curr_ele) ||
        (grid_stat[3] == curr_ele && grid_stat[4] == curr_ele && grid_stat[5] == curr_ele) ||
        (grid_stat[6] == curr_ele && grid_stat[7] == curr_ele && grid_stat[8] == curr_ele) ||
        (grid_stat[0] == curr_ele && grid_stat[3] == curr_ele && grid_stat[6] == curr_ele) ||
        (grid_stat[1] == curr_ele && grid_stat[4] == curr_ele && grid_stat[7] == curr_ele) ||
        (grid_stat[2] == curr_ele && grid_stat[5] == curr_ele && grid_stat[8] == curr_ele) ||
        (grid_stat[0] == curr_ele && grid_stat[4] == curr_ele && grid_stat[8] == curr_ele) ||
        (grid_stat[2] == curr_ele && grid_stat[4] == curr_ele && grid_stat[6] == curr_ele)
    )
    
    {
         if(curr_ele==1)
         {
            message_window.innerText = 'Player 1 has WON the Game!!!, refreshing in 10s';
            win_sound.play();
            setTimeout(() => location.reload(), 10000);
            return true;
         }
         else
         {
            message_window.innerText = 'Player 2 has WON the Game!!!, refreshing in 10s';
            win_sound.play();
            setTimeout(() => location.reload(), 10000);
            return true;
         }
         
    }

}

x_btn.addEventListener("click",() =>
{
    if(i==1)
    {
        i++;
        flag1=1;
        message_window.innerText='Player 1 has chosen X';
        player1=['X'];
        startGame();
    }
    else if(i==2 && player1[0]=='X')
    {
        message_window.innerText='Player 1 already chose X, Player 2 chooses O';
        alert_sound.play();
        player2=['O'];
        startGame();
    }
    else
    {
        message_window.innerText='Player 2 has chosen X, Ready to begin!';
        player2=['X'];
        j++;
        flag2=1;
        startGame();
    }
})

y_btn.addEventListener("click",()=>{
    if(i==1)
    {
        i++;
        message_window.innerText='Player 1 has chosen O';
        player1=['O'];
        flag1=1;
        startGame();
    }
    else if(i==2 && player1[0]=='O')
        {
            message_window.innerText='Player 1 already chose O, Player 2 chooses X';
            alert_sound.play();
            player2=['X'];
        }
    else
    {
        message_window.innerText='Player 2 has chosen O,Ready to begin!';
        player2=['O'];
        j++;
        flag2=1;
        startGame();
    }
})



let grid_stat=[0,0,0,0,0,0,0,0,0];
b1=document.querySelector("#one");
b2=document.querySelector("#two");
b3=document.querySelector("#thr");
b4=document.querySelector("#for");
b5=document.querySelector("#fiv");
b6=document.querySelector("#six");
b7=document.querySelector("#sev");
b8=document.querySelector("#ei");
b9=document.querySelector("#non");

box_check = (index,b) =>
{
    if(i>j)
        {
            //it is player1's turn
            if(grid_stat[index]==0)
            {
                message_window.innerText='Move by Player 1 accepted!';
                b.innerText=player1[0];
                grid_stat[index]=1;
                j++;
                if(!(ifwon(1)) && alloc())
                    {
                        message_window.innerText='No one won the game, refreshing in 10s';
                        lose_sound.play();
                        setTimeout(()=>location.reload(),10000);
                    }
                
            }
            else
            {
                alert_sound.play();
                message_window.innerText='Position Already occupied';
            }
            
        }
    else
        {
            //it is player2s turn
            if(grid_stat[index]==0)
                {
                    message_window.innerText='Move by Player 2 accepted';
                    b.innerText=player2[0];
                    grid_stat[index]=2;
                    if(!(ifwon(2)) && alloc())
                        {
                            message_window.innerText='No one won the game, refreshing in 10s';
                            lose_sound.play();
                            setTimeout(()=>location.reload(),10000);
                        }    
                    i++;
                    
                }
                else
                {
                    message_window.innerText='Position Already occupied';
                    alert_sound.play();
                }
        }
}
game = () =>
{
    b1.addEventListener("click",() => box_check(0, b1));
    b2.addEventListener("click",() => box_check(1, b2));
    b3.addEventListener("click",() => box_check(2, b3));
    b4.addEventListener("click",() => box_check(3, b4));
    b5.addEventListener("click",() => box_check(4, b5));
    b6.addEventListener("click",() => box_check(5, b6));
    b7.addEventListener("click",() => box_check(6, b7));
    b8.addEventListener("click",() => box_check(7, b8));
    b9.addEventListener("click",() => box_check(8, b9));
    
}



    
