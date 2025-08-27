
// a shared function getting any thing by id !!

function getId(id) {
    const getid = document.getElementById(id);
    return getid;
}



// 01- hart button functionality

const hartBtns = document.getElementsByClassName("love-btn");

for (let hartbtn of hartBtns) {
    hartbtn.addEventListener("click",
        function () {

            let navHart = getId("nav-hart").innerText;
            navHart = Number(navHart) + 1;
            getId("nav-hart").innerText = navHart;


        }
    )
}


//02 - functionality clal buton funcitonality


let callBtns = document.getElementsByClassName("call");
for (let callBtn of callBtns) {
    callBtn.addEventListener("click",
        function () {
            const coinNumber = getId("coin-id").innerText;
            const heading = callBtn.parentNode.parentNode.children[1].innerText;
            const cardTitle = callBtn.parentNode.parentNode.children[2].innerText;
            const hotLIneNumber = callBtn.parentNode.parentNode.children[3].innerText;
            
            const historyId = getId("clear-div");
            const divCreate = document.createElement("div");
            const newDiv = historyId.appendChild(divCreate);
            

            if (Number(coinNumber) >= 20) {

                alert(`📞calling ${cardTitle} ${hotLIneNumber}....`);
                let newCoinNumber = Number(coinNumber) - 20;
                getId("coin-id").innerText = newCoinNumber;

                newDiv.innerHTML = `<div class="px-[10px] py-[30px] bg-gray-100 mx-[20px] mt-[40px] mb-[20px] rounded-xl flex gap-[30px]">
                        <div>
                            <h3 class="text-[18px] font-bold">${heading}</h3>
                            <p>${hotLIneNumber}</p>
                        </div>
                        <div>
                            <h4>11:36:58 AM</h4>
                        </div>`


                
            }
            else {
                alert(`❌You don’t have enough coins. A minimum of 20 coins is required to make a call.`);

            }


        }
    )
}


/// clear all history from aside ver!!


getId("clear-btn").addEventListener("click",
    function(){
        document.getElementById("clear-btn").parentNode.parentNode.children[1].innerHTML = "";
        
        

    }
)


/// copy button functionality here

const copyBtns = document.getElementsByClassName("copy");
for(let copyBtn of copyBtns){
    copyBtn.addEventListener("click",
        function(){
           let copyCount = getId("copy-item").innerText;
           copyCount = Number(copyCount) + 1;

           document.getElementById("copy-item").innerText = copyCount;
        }
    )
}


