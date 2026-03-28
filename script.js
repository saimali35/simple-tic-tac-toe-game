// accessing all buttons
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#winner")
let turno = true;
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// logic of changes in boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML !== "") return;
        console.log("clicked");
        if (turno === true) {
            box.innerHTML = "o";
            turno = false;
        }
        else {
            box.innerHTML = "x";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
// showing who wins
const showWinner = (winner) => {
    msg.innerHTML = "congratulations winner is" + " " + winner;
    msg.classList.remove("hide");
    msgContainer.classList.remove("hide");
    disableboxes();

}
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;

    }
}
// check winner logic
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("winner");
            showWinner(pos1);

        }

    }

}
// logic for reset game
const resetgame = () => {
    turno = true;
    msg.classList.add("hide");
    for (let box of boxes) {
        box.innerHTML = "";
    }
    msgContainer.classList.add("hide");
    enableboxes();
}
resetbtn.addEventListener("click", resetgame);
