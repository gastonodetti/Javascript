let display = document.getElementById("inputs");

let result = document.getElementById("result");
result.innerText = "";

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click" , (e) => {
        switch (e.target.innerText){
            case "AC": 
                result.innerText = "";
                display.innerText = "";
                break;
            case "←":
                if (display.innerText){
                    display.innerText = display.innerText.slice(0 , -1)
                }
                break;
            case "=":
                result.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText
                break;
        }
    })
})