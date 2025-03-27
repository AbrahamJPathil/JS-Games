 //this is for ensuring the script loads only after DOM LOaded --> page loaded
    function redirect(link)
    {
        window.location.href=link;
    }
    const divElements = document.querySelectorAll(".game");
    divElements[0].addEventListener("click",()=>{redirect("games/tic.html")});
    divElements[1].addEventListener("click",()=>{
        redirect("games2/rock.html")
    });

    
