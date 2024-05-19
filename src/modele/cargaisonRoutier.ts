import { Cargaison } from "./cargaison.js";

export class CargaisonRoutier extends Cargaison {
    constructor(distance: number, frais: number) {
       super(distance, 90); 
    }

    public calculerFrais(): number {
        return this.distance * this.frais;
    }

}