let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#rst");
let newgamebtn=document.querySelector("#new");
let msg=document.querySelector("#won");
let msg_container=document.querySelector(".win");
let turn0 = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if(turn0){
            box.innerText="O"
            turn0=false;
        }else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disablebox=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebox=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disablebox();
}


const checkWinner = () =>{
    for(let pattern of winpattern){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

        if(pos1!="" &&pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
}

const reset_game=() =>{
    turn0=true;
    enablebox();
    msg_container.classList.add("hide");

}

newgamebtn.addEventListener("click",reset_game);
reset.addEventListener("click", reset_game);
