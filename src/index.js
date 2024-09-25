function saveBarcodes(barcodes) {

    localStorage.setItem('barcodes', JSON.stringify(barcodes))
    
}

function getBarcodes() {
    
    let barcodes = localStorage.getItem('barcodes');

    return barcodes ? JSON.parse(barcodes) : [];
}

function renderQRCodes() {
    let barcodes = getBarcodes();
    var QRcode = require('qrcode');
    var canvas = document.getElementById('canvas');
    
    QRcode.toCanvas(canvas, '7891000066560', function (error) {
    if (error) console.log(error)
        console.log('Success!')
    });
}

// let add = document.getElementById('add');
// let string = document.getElementById('codes').value;

// add.addEventListener('click', function () {

//     let array = string.split(/[\r\n, .;]+/)

//     let codesObj = array.map((code, index) => 
//         ({
//             id: index + 1, codigo:code
//         }));
    
//         let jsonCodesObj = JSON.stringify(codesObj);
// })
