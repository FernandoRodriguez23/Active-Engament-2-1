
//let song = [];

//function beep () {
//    song.push("beep");
//}

//function bop () {
//    song.push("bop")
//}

//function boop () {
//    song.push("boop")
//}

//function print () {
//    let div = document.createElement("div");
//    div.textContent = song.join(" ");
//    main.appendChild(div);
//    song = [];
//}

//let button = document.createElement("button");
//button.textContent ="beep";
//button.addEventListener("click", beep)
//main.appendChild(button);

//button = document.createElement("button");
//button.textContent ="bop";
//button.addEventListener("click", bop)
//main.appendChild(button);


//button = document.createElement("button");
//button.textContent ="boop";
//button.addEventListener("click", boop)
//main.appendChild(button);

//button = document.createElement("button");
//button.textContent ="print";
//button.addEventListener("click", print)
//main.appendChild(button);


//=========================================================================================================//

//function showText() {
    //if(printSpace.style.display == "none"){
        //printSpace.style.display = "block";
    //}else{
        //printSpace.style.display = "none";
    //}
//}

//swicth.addEventListener("click", showText)


//=========================================================================================================//


function changeBg() {
    if(this.style.background == "green"){
        this.style.background = "white"
    }else{
        this.style.background = "green";
    }
    
}

for(let i = 0; i < 9; i++){
    let square = document.createElement("div")
    square.addEventListener("click", changeBg)
    main.appendChild(square);
}