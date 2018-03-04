let name = "Bob";

let myelement = document.getElementById("title");
myelement.innerHTML= `Hello ${name}`;


class Calculator {
    sum() {
        let licz1 = document.getElementById('liczba1').value;
        let licz2 = document.getElementById('liczba2').value;
        this.wynik = parseInt(licz1) + parseInt(licz2);
    }
    wyś() {
        let place = document.getElementById('tresc');
        place.innerHTML = this.wynik;
    }
}


var d = new Calculator();
var btn = document.getElementById('policz');

btn.addEventListener('click', ()=> {
    d.sum();
    d.wyś();
});

class Osoba {
    pIwD() {
        this.im = document.getElementById('imie').value;   // lub let im = document.getElementById('imie').value; 
        this.naz = document.getElementById('nazwisko').value; // lub let
        this.w = document.getElementById('wiek').value;  // lub let
        this.calosc = `${this.im} ${this.naz} ma ${this.w} lat`;  // lub this.calosc = `${im} ${naz} ma ${w} lat`; 
        let tresc = document.getElementById('tekst');
        tresc.innerHTML = this.calosc;
    }
}

var os1 = new Osoba();
var przycisk = document.getElementById('wyswietl');

przycisk.addEventListener('click', ()=> {
os1.pIwD();
});