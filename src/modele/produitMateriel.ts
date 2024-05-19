import { Produit} from "./produit.js";

export abstract class ProduitMateriel implements Produit {
    libelle: string;
    poids: number;

    constructor(libelle: string, poids: number) {
        this.libelle = libelle;
        this.poids = poids;
        
    }
    public info(): void {

    }

}