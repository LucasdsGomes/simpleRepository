const cliqueAqui = document.getElementById("cliqueAqui");
const surprise = document.getElementById("surprise");

function appearSurprise() {
    cliqueAqui.addEventListener("click", function () {
        surprise.style.display = "block";
    });
}

appearSurprise();