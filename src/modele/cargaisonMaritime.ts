import { Cargaison } from "./cargaison.js";

export class CargaisonMaritime extends Cargaison {
    constructor(distance: number, frais: number) {
       super(distance, 300); 
    }

    public calculerFrais(): number {
        return this.distance * this.frais;
    }

}