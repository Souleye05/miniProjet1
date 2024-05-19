import { Cargaison } from "./cargaison.js";
export class CargaisonMaritime extends Cargaison {
    constructor(distance, frais) {
        super(distance, 300);
    }
    calculerFrais() {
        return this.distance * this.frais;
    }
}
