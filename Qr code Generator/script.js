let apilink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";


let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImage");
let qrtext = document.getElementById("qrtext");


function generateQr() {
    qrImage.src = apilink + qrtext.value;
    imgbox.classList.add("showimg");


}

