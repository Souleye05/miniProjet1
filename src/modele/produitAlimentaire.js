"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitAlimentaire = void 0;
var ProduitAlimentaire = /** @class */ (function () {
    function ProduitAlimentaire(libelle, poids) {
        this.libelle = libelle;
        this.poids = poids;
    }
    ProduitAlimentaire.prototype.info = function () {
        console.log("ProduitAlimentaire: " + this.libelle + " poids: " + this.poids);
    };
    ProduitAlimentaire.prototype.calculerFrais = function (cargaison) {
        return this.poids * cargaison.getFrais();
    };
    return ProduitAlimentaire;
}());
exports.ProduitAlimentaire = ProduitAlimentaire;
