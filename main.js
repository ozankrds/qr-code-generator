const qr = require('qr-image');

document.querySelector("button").addEventListener("click", function () {
    const value = document.getElementById("tbuser").value;
    const qr_svg = qr.imageSync(value, { type: 'png' });

    const img = document.getElementById("qrCode");
    img.src = 'data:image/png;base64,' + qr_svg.toString('base64');
    img.style.visibility = "visible";

    document.querySelector(".container").style.gap = "100px";
});
