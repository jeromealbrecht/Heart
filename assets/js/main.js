myFuntion();



function myFuntion(){
    let reponse = prompt('entre un prénom ?');
    reponse = reponse.toLowerCase().trim()
    let element = document.getElementById("heart");
    
    if (reponse == 'livia' || reponse == 'bertille'){
        element.classList.remove("none")
        element.classList.add("visible");
        console.log("inloop")
}
else {
    document.getElementById("message").textContent += "press f5 to retry";
}
}