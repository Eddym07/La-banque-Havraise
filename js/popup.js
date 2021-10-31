const btn = document.getElementById('btn');
const layer = document.getElementById('layer');
const h3 = document.getElementById("content");

btn.addEventListener('click', function () {
    layer.classList.toggle("hidden");
});


let httpRequest = new XMLHttpRequest();


httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let data = httpRequest.responseText;
                console.log(data)
            //j'affiche les valeurs contenues dans l'objet via les propriété
            h3.innerText = data;
        } else {
            console.log("Une erreur est survenue");
        }

    } else {

        console.log("chargement en cours");
    }
};


httpRequest.open('GET', 'data/popup.txt');
httpRequest.send();
