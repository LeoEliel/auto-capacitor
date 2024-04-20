let mainForm = document.getElementById("mainForm");

let productMeasure = document.getElementById("productMeasure");
let shelfDeepness = document.getElementById("shelfDeepness");
let qtdRows = document.getElementById("qtdRows"); 
let unitsPerPack = document.getElementById("unitsPerPack");

let result = document.getElementById("result"); 

mainForm.addEventListener("submit", (ev) => {

    ev.preventDefault();
    sendData();
});

async function sendData() {

    let packs = Math.trunc(((shelfDeepness.valueAsNumber/productMeasure.valueAsNumber)*qtdRows.valueAsNumber)/unitsPerPack.valueAsNumber);
    result.innerHTML = `${packs} Fardo(s)`

    document.getElementById('mainForm').reset();

}