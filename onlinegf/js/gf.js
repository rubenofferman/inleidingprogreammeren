console.log("hey babes");

/* Bron foto's: https://everskies.com/wardrobe/sets */

var state = true;

var bodyElement = document.querySelector('body');


/*code voor praat button*/

var lieveWoordjes = ["love you too...", "awh thats so sweet...", "you're so cute..."]

var lieveWoordjesSelector = document.querySelector('.liefPraatje');

var lieveWoordjesButton = document.querySelector('.praat');

var aantalClicks = 0;

function lieveWoordjesZeggen(){
    var randomGetal = Math.random()*3;
    randomGetal = Math.floor(randomGetal);
    lieveWoordjesSelector.textContent = lieveWoordjes[randomGetal];
    aantalClicks++;
    lieveWoordjesSelector.classList.add("liefPraatje");
    mobiel.classList.remove("mobielPlaatje");
    telefoonWoordjesSelector.classList.remove("mobielPraatje");
    verliefd.src = "images/onlinegfnomood.png";
    bodyElement.classList.remove("rozeAchtergrond");
    teVeelClicks();
}

var veelPratenBericht = ["ok im bored...", "you can shut up now...", "*sigh*"]

var klaarMetPraten = ["im done..."]

var boosvVanPraten = ["I SAID IM DONE"]

var excuusVanPraten = ["im sorry babe..."]

function teVeelClicks(){
    if(aantalClicks >= 10){
        var randomGetal = Math.random()*3;
        randomGetal = Math.floor(randomGetal);
        lieveWoordjesSelector.textContent = veelPratenBericht[randomGetal]; 
    }
    if(aantalClicks >= 15){
        lieveWoordjesSelector.textContent = klaarMetPraten;
    }
    if(aantalClicks >=18){
        bodyElement.classList.add('rodeAchtergrond');
        lieveWoordjesSelector.textContent = boosvVanPraten;
    }
    if(aantalClicks == 20){
        aantalClicks = 0;
        bodyElement.classList.remove('rodeAchtergrond');
        lieveWoordjesSelector.textContent = excuusVanPraten;
    }

}

lieveWoordjesButton.addEventListener("click", lieveWoordjesZeggen);

//var aantalClicks = 0;



/*code voor verliefd button*/

var verliefd = document.querySelector("img");

var blozen = document.querySelector(".verliefd");

blozen.addEventListener("click", verliefdEmotie);

function verliefdEmotie(){
    console.log("im in love");
    

    if (state == false){
        verliefd.src = "images/gfblozenfoto.png";
        bodyElement.classList.add('rozeAchtergrond');
        lieveWoordjesSelector.classList.remove("liefPraatje");
        mobiel.classList.remove("mobielPlaatje");
        telefoonWoordjesSelector.classList.remove("mobielPraatje");
        state = true;
    }
     else{
        verliefd.src = "images/onlinegfnomood.png";
        bodyElement.classList.remove('rozeAchtergrond');
        state = false;}
    }








/* code voor telefoon button */

var mobiel = document.querySelector('.mobielPlaatje');

var mobielKnop = document.querySelector('.telefoon');

var telefoonWoordjes = ["bla bla bla, bla bla bla... BLA BLA bla. Bla bla? bla bla BLA!"];

var telefoonWoordjesSelector = document.querySelector('.mobielPraatje');

/* bron audio fragment: https://stackoverflow.com/questions/9419263/how-to-play-audio */
var audioTelefoonRing = new Audio("../audio/ringingeffect.mp3");

function telefoonAfgaan(){
    audioTelefoonRing.play()
    setTimeout(mobielOpnemen, 8000)
    
    };

function mobielOpnemen(){
    mobiel.src = "images/gfmobieltje.png";
    telefoonWoordjesSelector.textContent = telefoonWoordjes
    verliefd.classList.remove("img");
    blozen.classList.remove("verliefd");
    lieveWoordjesSelector.classList.remove("liefPraatje");
}
    


mobielKnop.addEventListener("click", telefoonAfgaan);



