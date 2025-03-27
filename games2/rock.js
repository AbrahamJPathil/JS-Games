//function for implementing random choice of computer

let win_sound = new Audio("data/win.m4a");
let lose_sound = new Audio("data/fail.m4a");
let alert_sound = new Audio("data/alert.m4a");
choices=document.querySelectorAll(".choice");
cmp_scr_val=0;
cmp_scr=document.querySelector(".computer-score");
usr_scr_val=0;
usr_scr=document.querySelector(".user-score");
msg=document.querySelector("#message");


function computer_play()
{
    let ch_cmp=choices[Math.floor(Math.random()*2.5)];
    return ch_cmp;
}


choices.forEach((choice) => 
    {
        choice.addEventListener("click",() =>
        {
            let cmp=computer_play();
            if(choice.id=='rock')
            {
             if(cmp.id=='paper')
                {
                    msg.innerText="Computer Won"; //computer won
                    cmp_scr.innerText = `${++cmp_scr_val}`;
                    lose_sound.play();

                }
              else if(cmp.id==choice.id)
              {
                msg.innerText='Computer chooses same as user. Draw!!';
                alert_sound.play();
              }
              else
              {
                msg.innerText="User won";
                usr_scr.innerText=`${++usr_scr_val}`;
                win_sound.play();
              }
            }
            if(choice.id=='paper')
                {
                 if(cmp.id=='scissor') //computer won
                    {
                        msg.innerText="Computer Won"; //computer won
                        cmp_scr.innerText = `${++cmp_scr_val}`;
                        lose_sound.play();
                    }
                  else if(cmp.id==choice.id)
                  {
                    msg.innerText='Computer chooses same as user. Draw!!';
                    alert_sound.play();
                  }
                  else
                  {
                    msg.innerText="User won";
                    usr_scr.innerText=`${++usr_scr_val}`;
                    win_sound.play();
                  }
                }
                if(choice.id=='scissor')
                    {
                     if(cmp.id=='paper') //computer won
                        {
                        msg.innerText="Computer Won"; //computer won
                        cmp_scr.innerText = `${++cmp_scr_val}`;
                        lose_sound.play();;
                        }
                      else if(cmp.id==choice.id)
                      {
                        msg.innerText='Computer chooses same as user. Draw!!';
                        alert_sound.play();
                      }
                      else
                      {
                        msg.innerText="User won";
                        usr_scr.innerText=`${++usr_scr_val}`;
                        win_sound.play();
                      }
                    }
                
        })
})