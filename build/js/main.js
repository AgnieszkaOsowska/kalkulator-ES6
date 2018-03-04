"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = "Bob";

var myelement = document.getElementById("title");
myelement.innerHTML = "Hello " + name;

var Calculator = function () {
    function Calculator() {
        _classCallCheck(this, Calculator);
    }

    _createClass(Calculator, [{
        key: "sum",
        value: function sum() {
            var licz1 = document.getElementById('liczba1').value;
            var licz2 = document.getElementById('liczba2').value;
            this.wynik = parseInt(licz1) + parseInt(licz2);
        }
    }, {
        key: "wy\u015B",
        value: function wy() {
            var place = document.getElementById('tresc');
            place.innerHTML = this.wynik;
        }
    }]);

    return Calculator;
}();

var d = new Calculator();
var btn = document.getElementById('policz');

btn.addEventListener('click', function () {
    d.sum();
    d.wyś();
});

var Osoba = function () {
    function Osoba() {
        _classCallCheck(this, Osoba);
    }

    _createClass(Osoba, [{
        key: "pIwD",
        value: function pIwD() {
            this.im = document.getElementById('imie').value; // lub let im = document.getElementById('imie').value; 
            this.naz = document.getElementById('nazwisko').value; // lub let
            this.w = document.getElementById('wiek').value; // lub let
            this.calosc = this.im + " " + this.naz + " ma " + this.w + " lat"; // lub this.calosc = `${im} ${naz} ma ${w} lat`; 
            var tresc = document.getElementById('tekst');
            tresc.innerHTML = this.calosc;
        }
    }]);

    return Osoba;
}();

var os1 = new Osoba();
var przycisk = document.getElementById('wyswietl');

przycisk.addEventListener('click', function () {
    os1.pIwD();
});