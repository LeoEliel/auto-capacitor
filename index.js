let mainForm = document.getElementById("mainForm");

mainForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    sendData();
});

async function sendData() {
    
    // const formData = new formData(mainForm);
    
    let productMeasure = document.getElementById("productMeasure");
    let shelfDeepness = document.getElementById("shelfDeepness");
    let qtdRows = document.getElementById("qtdRows"); 
    let unitsPerPack = document.getElementById("unitsPerPack");

    let packs = Math.trunc(((shelfDeepness.valueAsNumber/productMeasure.valueAsNumber)*qtdRows.valueAsNumber)/unitsPerPack.valueAsNumber);

    console.log(`${packs} Fardos`);
    alert(`${packs} Fardos`);

}
