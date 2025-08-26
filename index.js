
// a shared function getting any thing by id !!

function getId(id){
    const getid = document.getElementById(id);
    return getid;
}



// 01- hart button functionality

const hartBtns = document.getElementsByClassName("love-btn");

for(let hartbtn of hartBtns){
    hartbtn.addEventListener("click",
        function(){
            
            let navHart = getId("nav-hart").innerText;
            navHart = Number(navHart) + 1;
            getId("nav-hart").innerText = navHart;


        }
    )
}


//02 - functionality

