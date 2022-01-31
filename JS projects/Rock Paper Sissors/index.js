var jugadaElegida = "";
var jugadaOponente = "";

//selection of my choose movement

document.getElementById("rock").addEventListener("click", (e) => {
    jugadaElegida = "rock"
    document.getElementById("rock").className = "selected"
    document.getElementById("paper").className = "unSelected"
    document.getElementById("sissor").className = "unSelected"
})
document.getElementById("paper").addEventListener("click", (e) => {
    jugadaElegida = "paper"
    document.getElementById("paper").className = "selected"
    document.getElementById("rock").className = "unSelected"
    document.getElementById("sissor").className = "unSelected"
   
})
document.getElementById("sissor").addEventListener("click", (e) => {
    jugadaElegida = "sissor"
    document.getElementById("sissor").className = "selected"
    document.getElementById("paper").className = "unSelected"
    document.getElementById("rock").className = "unSelected"
   
})


//actions that happend when user clicks "play" button

let executed = false;
document.getElementById("play").addEventListener("click" , (e) => {
   
    if (!executed && jugadaElegida !== "") {    

    let jugada = Math.random()
    
    if (jugada < 0.33) {
        jugadaOponente = "rock"
    }
    if (jugada > 0.32 && jugada < 0.66) {
        jugadaOponente = "paper"
    }
    if (jugada > 0.66) {
        jugadaOponente = "sissor"
    }
    

    if (jugadaOponente == jugadaElegida){
        document.getElementById("result").innerText = "Empate!"
    }

    if (jugadaElegida == "paper"){
        if (jugadaOponente == "sissor"){
            document.getElementById("result").innerText = "Perdiste!"
        }
        if (jugadaOponente == "rock"){
            document.getElementById("result").innerText = "Ganaste!"
        }
    }
    if (jugadaElegida == "rock"){
        if (jugadaOponente == "sissor"){
            document.getElementById("result").innerText = "Ganaste!"
        }
        if (jugadaOponente == "paper"){
            document.getElementById("result").innerText = "Perdiste!"
        }
    }
    if (jugadaElegida == "sissor"){
        if (jugadaOponente == "rock"){
            document.getElementById("result").innerText = "Perdiste!"
        }
        if (jugadaOponente == "paper"){
            document.getElementById("result").innerText = "Ganaste!"
        }
    }

    jugadaOponente += "Oponent"
    document.getElementById(jugadaOponente).className = "shown"
    executed = true;
}
})


//clear function
document.getElementById("restart").addEventListener("click" , (e) => { 
    document.location.reload(false)
})