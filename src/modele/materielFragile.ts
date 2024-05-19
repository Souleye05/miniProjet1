import { ProduitMateriel } from "./produitMateriel.js"; 

export class MaterielFragile extends ProduitMateriel {
    constructor(libelle: string, poids: number) {
        super(libelle, poids);
        
    }
    
    public info() {        
    }
}