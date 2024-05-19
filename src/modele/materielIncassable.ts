import { ProduitMateriel } from "./produitMateriel.js"; 

export class MaterielIncassable extends ProduitMateriel {
    constructor(libelle: string, poids: number) {
        super(libelle, poids);
        
    }
    
    public info() {
        
    }

}