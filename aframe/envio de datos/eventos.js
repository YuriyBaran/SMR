var cielo = document.querySelector("#cielo");
var foco = false;

//EVENTO FOCO
document.addEventListener('keydown', function (e) {
        if(foco == false)
            console.log("SI");
        
  });

const { BlobServiceClient } = require('@azure/storage-blob');
const { v1: uuidv1} = require('uuid');
require('dotenv').config()

async function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');

    // Quick start code goes here

}

main()
.then(() => console.log('Done'))
.catch((ex) => console.log(ex.message));
