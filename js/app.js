function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function pinGenerate(){
    const pin = getPin();
    document.getElementById("pin-generator").value = pin;
}

document.getElementById("calc-btn").addEventListener("click", function(event){
    const display = event.target.innerText;
    const displayNumber = document.getElementById("calc-display");
    if (isNaN(display)) {
        if(display == "C"){
            displayNumber.value = "";
        }
    } else {
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + display
        displayNumber.value = newNumber; 
    }
})

function varify(){
    const pin = document.getElementById("pin-generator").value;
    const display = document.getElementById("calc-display").value;
    if (pin == display) {
        document.getElementById("varified").style.display = "block";
        document.getElementById("not-varified").style.display = "none";
        
    } else {
        document.getElementById("not-varified").style.display = "block";
        document.getElementById("varified").style.display = "none";
    }
}