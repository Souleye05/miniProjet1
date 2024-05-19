import { Produit } from "./produit.js";
import { Cargaison } from "./cargaison";

export class ProduitAlimentaire implements Produit {
    libelle: string;
    poids: number;

    constructor(libelle: string, poids: number) {
        this.libelle = libelle;
        this.poids = poids;
    }

    public info(): void {

        console.log("ProduitAlimentaire: " + this.libelle +  " poids: " + this.poids);
    }

}