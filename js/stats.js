let httpRequest = new XMLHttpRequest();

        let cac =document.getElementById("cac"); //j'affiche les valeurs contenues dans l'objet via les propriété
        let taux =document.getElementById("taux");
        let lingot =document.getElementById("lingot");

        
        //Code déclenché quand une réponse arrive du serveur
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let data = JSON.parse(httpRequest.responseText) //Je désérialise la réponse texte envoyée par le serveur
                     console.log(data);                                         //Data contient maintenant un objet JS
                    
                     cac.innerText = "CAC 40 /" + " " + data.CAC;
                     taux.innerText = "Taux d'emprunt :" + " " + data.taux;
                     lingot.innerText = "Lingot d'or :" + " " + data.lingot;

                } else {
                    console.log("Une erreur est survenue");
                }
                        
            } else {
                
                console.log("chargement en cours");
            }
        };
        
        //Envoie de la requête au serveur
        httpRequest.open('GET', 'data/text.json');
        httpRequest.send();
        