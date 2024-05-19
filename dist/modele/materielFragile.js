import { ProduitMateriel } from "./produitMateriel.js";
export class MaterielFragile extends ProduitMateriel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
    }
}
