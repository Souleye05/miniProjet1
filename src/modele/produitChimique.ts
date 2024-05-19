import { Cargaison } from "./cargaison";
import { Produit} from "./produit.js";

export class ProduitChimique implements Produit {
    libelle: string;
    poids: number;
    toxicite: number;
    constructor(libelle: string, poids: number, toxicite: number) {
        this.libelle = libelle;
        this.poids = poids;
        this.toxicite = toxicite;
    }

 public info(): void {

    }

}