let mainForm = document.getElementById("mainForm");
let reset = document.getElementById("reset");
let button = document.getElementById("send"); 

let productMeasure = document.getElementById("productMeasure");
let shelfDeepness = document.getElementById("shelfDeepness");
let qtdRows = document.getElementById("qtdRows"); 
let unitsPerPack = document.getElementById("unitsPerPack");

mainForm.addEventListener("submit", (ev) => {

    ev.preventDefault();
    sendData();
});

reset.addEventListener("click", (ev) => {

    ev.preventDefault();
    resetValues();
});

async function sendData() {

    let packs = Math.trunc(((shelfDeepness.valueAsNumber/productMeasure.valueAsNumber)*qtdRows.valueAsNumber)/unitsPerPack.valueAsNumber);
    button.innerHTML = `${packs} Fardo(s)`
    // alert(`${packs} Fardos`);

}

async function resetValues() {

    productMeasure.innerHTML = "";
    shelfDeepness.innerHTML = "";
    qtdRows.innerHTML = "";
    unitsPerPack.innerHTML = "";
}