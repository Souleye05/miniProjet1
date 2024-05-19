import { Cargaison } from "./cargaison.js";

export class CargaisonAerienne extends Cargaison {
    constructor(distance: number, frais: number) {
       super(distance, 100); 
    }

    public calculerFrais(): number {
        return this.distance * this.frais;
    }

}