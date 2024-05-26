"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitChimique = void 0;
var ProduitChimique = /** @class */ (function () {
    function ProduitChimique(libelle, poids, toxicite) {
        this.libelle = libelle;
        this.poids = poids;
        this.toxicite = toxicite;
    }
    ProduitChimique.prototype.calculerFrais = function (cargaison) {
        return this.poids * cargaison.getFrais();
    };
    return ProduitChimique;
}());
exports.ProduitChimique = ProduitChimique;
