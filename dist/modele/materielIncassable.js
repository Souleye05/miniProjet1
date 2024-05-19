import { ProduitMateriel } from "./produitMateriel.js";
export class MaterielIncassable extends ProduitMateriel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
    }
}
