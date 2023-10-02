import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle');
wrapper.innerHTML = '<input id="café" type="text">' + wrapper.innerHTML;
wrapper.innerHTML = '<input id="grains" type="text">' + wrapper.innerHTML;
wrapper.innerHTML = '<input id="lait" type="text">' + wrapper.innerHTML;
wrapper.innerHTML = '<input id="eau" type="text">' + wrapper.innerHTML;

wrapper.innerHTML = '<button id="b_acheter">Acheter</button> <button id="b_remplir">Remplir</button> <button id="b_prendre">Prendre</button>' + wrapper.innerHTML;

const boutton = document.querySelector('#start');
const boutton_acheter = document.querySelector('#b_acheter');
const boutton_remplir = document.querySelector('#b_remplir');
const boutton_prendre = document.querySelector('#b_prendre');
boutton.textContent = "Calculer";

function start() {
    let eau = document.querySelector('#eau');
    let lait = document.querySelector('#lait');
    let grains = document.querySelector('#grains');
    let café = document.querySelector('#café');
    calculer(Number(eau.value), Number(lait.value), Number(grains.value), Number(café.value));
    // const etapes = [
    //     { title: "Commence à faire le café", duree: 2000 },
    //     { title: "Mouds les grains de café", duree: 1500 },
    //     { title: "Fait chauffer l'eau", duree: 2500 }, 
    //     { title: "Infuse les grains de café moulus", duree: 3000 },
    //     { title: "Verse le café dans une tasse", duree: 2000 },
    //     { title: "Ajoute un peu de lait dans la tasse", duree: 1500 },
    //     { title: "Le café est terminé.", duree: 1000 } 
    // ];
    // const laListe = renewTag('ul');
    // wrapper.append(laListe);
    
    // injectElements(etapes, laListe);
}

const ingredients = [
    { nom: "eau", quantité: 200, unité: "ml"},
    { nom: "lait", quantité: 50, unité:"ml"},
    { nom: "grains", quantité: 15, unité:"g"},
];

const expresso = [
    { nom: "eau", quantité: 250, unité: "ml"},
    { nom: "lait", quantité: 0, unité:"ml"},
    { nom: "grains", quantité: 16, unité:"g"},
    { nom: "prix", quantité: 4, unité:"€"},
];

const latte = [
    { nom: "eau", quantité: 350, unité: "ml"},
    { nom: "lait", quantité: 75, unité:"ml"},
    { nom: "grains", quantité: 20, unité:"g"},
    { nom: "prix", quantité: 7, unité:"€"},
];

const cappucino = [
    { nom: "eau", quantité: 200, unité: "ml"},
    { nom: "lait", quantité: 100, unité:"ml"},
    { nom: "grains", quantité: 12, unité:"g"},
    { nom: "prix", quantité: 6, unité:"€"},
];

function calculer(nbEau, nbLait, nbGrains, nbCafe){
    let C1 = nbEau / ingredients[0].quantité
    let C2 = nbLait / ingredients[0].quantité
    let C3 = nbGrains / ingredients[0].quantité
    let nbCafePossible = parseInt(plusPetit(C1, C2, C3))
    if(eau.value < ingredients[0].quantité*nbCafe|| lait.value < ingredients[1].quantité*nbCafe || grains.value < ingredients[2].quantité*nbCafe) {
        wrapper.innerHTML += "<p> « Non, je ne peux faire que " + nbCafePossible + " tasses de café </p>";
    }
    else if (eau.value == ingredients[0].quantité*nbCafe && lait.value == ingredients[1].quantité*nbCafe && grains.value == ingredients[2].quantité*nbCafe) {
        wrapper.innerHTML += "<p> Oui, je peux faire cette quantité de café </p>";
    }
    else 
        wrapper.innerHTML += "<p> Oui, je peux faire cette quantité de café (et même " + (nbCafePossible - café.value) + " plus que cela) </p>";

    // for (let value of Object.values(ingredients)){
    //     wrapper.innerHTML += "<p>" + value.nom + " " + value.quantité*nbCafe + " " + value.unité + "</p>";
    // }
}

function plusPetit(nbEau, nbLait, nbGrains) {
        if (nbEau <= nbLait && nbEau <= nbGrains) {
            return nbEau;
        } else if (nbLait <= nbEau && nbLait <= nbGrains) {
            return nbLait;
        } else {
            return nbGrains;
        }
}

function acheter(){
    boutton_acheter.style.display = "none"
    boutton_remplir.style.display = "none"
    boutton_prendre.style.display = "none"
    boutton.style.display = "none"
    wrapper.innerHTML ='<button id="b_expresso">Expresso</button> <button id="b_latte">Latte</button> <button id="b_cappucino">Cappucino</button>';

}

const réserve = [
    { nom: "eau", quantité: 400, unité: "ml"},
    { nom: "lait", quantité: 540, unité:"ml"},
    { nom: "grains", quantité: 120, unité:"g"},
    { nom: "prix", quantité: 550, unité:"€"},
    { nom: "tasse", quantité: 9, unité:"unitaire"},
];

function remplir() {
    wrapper.innerHTML = '<input id="eauR" type="text"> <input id="laitR" type="text"> <input id="grainsR" type="text"> <input id="tasseR" type="text"> <button id="remplirR">Remplir</button>'
    let eauR = document.querySelector('#eauR');
    let laitR = document.querySelector('#laitR');
    let grainsR = document.querySelector('#grainsR');
    let tasseR = document.querySelector('#tasseR');
    const r = document.querySelector('#remplirR');
    document.querySelector('#remplirR').addEventListener('click', function (){
        console.log("je suis un bot");
        remplir2(Number(eauR.value), Number(laitR.value), Number(grainsR.value), Number(tasseR.value));
    })
    
}

function remplir2(nbEauR, nbLaitR, nbGrainsR, nbTasseR){
    
    let quantité_final_eau = réserve[0].quantité + nbEauR;
    console.log(quantité_final_eau);
    let quantité_final_lait = réserve[1].quantité + nbLaitR;
    let quantité_final_grains = réserve[2].quantité + nbGrainsR;
    let quantité_final_tasse = réserve[4].quantité + nbTasseR;
    wrapper.innerHTML ="<p> Il y a désormais " + quantité_final_eau + " ml d'eau, " + quantité_final_lait + " ml de lait, " + quantité_final_grains + " g de grains et " + quantité_final_tasse + " tasses.</p>";
}

function prendre(){
    console.log(réserve[3].quantité);
    wrapper.innerHTML = "<p> Bonjour, vous avez bien retiré " + réserve[3].quantité + " " + réserve[3].unité + ".</p>";
    réserve[3].quantité = 0;
    console.log(réserve[3].quantité);
    wrapper.innerHTML = '<p> <button id="retour">Retour</button></p>';
}

function init(){
    
}

document.querySelector('#start').addEventListener('click', start)
document.querySelector('#b_acheter').addEventListener('click', acheter)
document.querySelector('#retour').addEventListener('click', init)
document.querySelector('#b_acheter').addEventListener('click', acheterExpresso)
document.querySelector('#b_acheter').addEventListener('click', acheterLatte)
document.querySelector('#b_acheter').addEventListener('click', acheterCappucino)
document.querySelector('#b_remplir').addEventListener('click', remplir)
document.querySelector('#b_prendre').addEventListener('click', prendre)

