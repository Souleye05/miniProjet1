import { Cargaison } from "./cargaison.js";
export class CargaisonRoutier extends Cargaison {
    constructor(distance, frais) {
        super(distance, 90);
    }
    calculerFrais() {
        return this.distance * this.frais;
    }
}
