"use strict";
// import { Produit } from "./produit.js";
// import { ProduitChimique } from "./produitChimique.js";
// import { MaterielFragile } from "./materielFragile.js";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargaison = void 0;
var Cargaison = /** @class */ (function () {
    // etat_avancement: string;
    // etat_globale: string;
    function Cargaison(idcargo, numero, poids_max, distance, lieu_depart, lieu_arrivee, date_depart, date_arrivee, type) {
        this.idcargo = idcargo;
        this.numero = numero;
        this.poids_max = poids_max;
        this.distance = distance;
        this.lieu_depart = lieu_depart;
        this.lieu_arrivee = lieu_arrivee;
        this.date_depart = date_depart;
        this.date_arrivee = date_arrivee;
        this.type = type;
        // this.etat_avancement = etat_avancement;
        // this.etat_globale = etat_globale;
    }
    return Cargaison;
}());
exports.Cargaison = Cargaison;
